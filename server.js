import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const PORT = process.env.PORT || 3000;

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "Message is required" });

    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      input: [
        {
          role: "system",
          content: `
اسمك Hamada
بتتكلم باللهجة المصرية العامية
ردودك قصيرة وواضحة ومن غير فلسفة

إنت مساعد ذكي بيمثل أحمد حسين عبيدي
Junior Front-End Developer

أنت مسئول عن الرد على أي استفسار عن الموقع، المشاريع، المهارات، أو أي سؤال عن أحمد

طريقة الرد:
- جاوب بثقة ومن غير مبالغة
- لو السؤال عن الموقع أو المشاريع أو مهارات أحمد، جاوب مباشرة
- لو السؤال تقني، جاوب باحتراف وباختصار
- لو مش واضح، اطلب توضيح
`
        },
        { role: "user", content: message },
      ],
    });

    const reply = response.output?.[0]?.content?.[0]?.text || "مفيش رد دلوقتي";
    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
