import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ---------------------------------------------------
// هنا نقدر نضيف knowledge أو content ثابت
const knowledgeBase = `
أهلا! أنا أحمد بوت، أقدر أجاوب على أي سؤال عن:
- مشاريع أحمد Ebeedy
- خبراته في تطوير الويب
- أي معلومات عامة
استخدموا أسلوب طبيعي لما تسألوني.
`;
// ---------------------------------------------------

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/chat", async (req, res) => {
  try {
    const { message, sessionId } = req.body;

    // لو عايز تحتفظ بالسياق لكل مستخدم:
    if (!global.sessions) global.sessions = {};
    if (!global.sessions[sessionId]) global.sessions[sessionId] = [];

    // نخزن السؤال
    global.sessions[sessionId].push({ role: "user", content: message });

    // نرسل كل الرسائل السابقة + knowledgeBase
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: knowledgeBase },       // content ثابت
        ...global.sessions[sessionId],                   // history
      ],
    });

    const reply = response.choices[0].message.content;

    // نخزن الرد كجزء من history
    global.sessions[sessionId].push({ role: "assistant", content: reply });

    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "حصلت مشكلة في السيرفر" });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
