const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

export async function getAIFeedback(question, answer) {
  const prompt = `You are an interview coach. A candidate was asked: "${question}" They answered: "${answer}" Give brief, constructive feedback (3-4 sentences) on their answers clarity, relevance, and confidence. Be encouraging but honest.`;
  try {
    const response = await fetch(API_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }) });
    const data = await response.json();
    const feedback = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return feedback || "Sorry, could not generate feedback right now.";
  } catch (error) {
    console.error("AI feedback error:", error);
    return "Something went wrong while getting feedback.";
  }
}
