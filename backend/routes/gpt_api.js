const express = require('express');
const router = express.Router();
const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: 'your_openai_api_key' });

router.post('/generate-summary', async (req, res) => {
  const { name, email, phone, profile, education, work, skills, projects } = req.body;

  const prompt = `
Generate a professional resume summary based on the following details:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Profile: ${profile}
- Education: ${education.map(e => `${e.degree} from ${e.institution} (${e.year})`).join(", ")}
- Work Experience: ${work.map(w => `${w.company} - ${w.description}, ${w.location} (${w.years} yrs)`).join(", ")}
- Skills: ${skills.join(", ")}
- Projects: ${projects.map(p => `${p.title}: ${p.description}`).join(", ")}

Make it concise, professional, and job-ready.
`;

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: 'gpt-3.5-turbo'
    });

    const summary = completion.choices[0].message.content;
    res.json({ summary });
  } catch (error) {
    console.error("GPT Summary Error:", error);
    res.status(500).json({ error: "Failed to generate summary" });
  }
});


module.exports = router;