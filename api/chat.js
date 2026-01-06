import OpenAI from "openai";

const openai = new OpenAI({
  // eslint-disable-next-line no-undef
  apiKey: process.env.OPENAI_API_KEY, // تأكد إن القيمة موجودة في Environment Variables بدون علامات اقتباس
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ reply: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ reply: "الرسالة فاضية" });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
أنت شات بوت خاص بموقع Ahmed Hussein Abidi.
لو حد سألك "فينك؟" رد:
"أنا موجود على موقع أحمد، تقدر تتواصل معاه من صفحة Contact."
رد دايمًا بالعربي المصري.
          `,
        },
        { role: "user", content: message },
      ],
    });

    res.status(200).json({
      reply: completion.choices[0].message.content,
    });
  } catch (err) {
    console.error("Chat API Error:", err);
    res.status(500).json({ reply: "حصلت مشكلة في السيرفر" });
  }
}
