const apiKey = "";
const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

const exponentialBackoffFetch = async (url, options, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response;
    } catch (error) {
      if (i === retries - 1) throw error;
      const delay = Math.pow(2, i) * 1000 + Math.random() * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  throw new Error("Maximum fetch retries exceeded.");
};

export const callGeminiAPI = async (issue) => {
  const systemPrompt = `You are a professional industrial machine maintenance expert. Generate a formal technical inquiry message addressed to MASOOM.`;
  const userPrompt = `Draft a technical inquiry message regarding this issue: "${issue}".`;

  const payload = {
    contents: [{ parts: [{ text: userPrompt }] }],
    tools: [{ google_search: {} }],
    systemInstruction: { parts: [{ text: systemPrompt }] },
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  };

  try {
    const response = await exponentialBackoffFetch(apiUrl, options);
    const result = await response.json();
    const candidate = result.candidates?.[0];
    return candidate?.content?.parts?.[0]?.text || "Error generating draft.";
  } catch (error) {
    console.error(error);
    return `API Request Failed: ${error.message}`;
  }
};

export const getTechnicalDefinition = async (term) => {
  const systemPrompt = `Provide a concise definition (1-2 sentences) for industrial machinery term: ${term}`;
  const userPrompt = `Define "${term}"`;

  const payload = {
    contents: [{ parts: [{ text: userPrompt }] }],
    tools: [{ google_search: {} }],
    systemInstruction: { parts: [{ text: systemPrompt }] }
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  };

  try {
    const response = await exponentialBackoffFetch(apiUrl, options);
    const result = await response.json();
    const candidate = result.candidates?.[0];
    return candidate?.content?.parts?.[0]?.text || "Could not retrieve definition.";
  } catch (error) {
    console.error(error);
    return `API Request Failed: ${error.message}`;
  }
};
