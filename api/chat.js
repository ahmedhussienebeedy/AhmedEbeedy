import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ reply: "Method not allowed" });
  }

  try {
    const { message } = req.body;

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
    console.error(err);
    res.status(500).json({ reply: "حصلت مشكلة في السيرفر" });
  }
}
