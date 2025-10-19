import React, { useState } from "react";
import { COMPANY_DATA } from "../data/companyData.js";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

const callGeminiAPI = async (issue) => {
  const systemPrompt = `You are an industrial maintenance expert. Draft a polite technical inquiry about the issue.`;
  const userPrompt = `Draft inquiry regarding: "${issue}"`;

  const payload = {
    contents: [{ parts: [{ text: userPrompt }] }],
    systemInstruction: { parts: [{ text: systemPrompt }] },
  };

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "Error generating draft";
  } catch {
    return "API request failed.";
  }
};

const InquiryGenerator = () => {
  const [issue, setIssue] = useState(COMPANY_DATA.commonIssues[0]);
  const [draft, setDraft] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const result = await callGeminiAPI(issue);
    setDraft(result);
    setLoading(false);
  };

  return (
    <section className="py-12 max-w-3xl mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Generate Technical Inquiry</h2>
      <select
        className="w-full p-3 border rounded mb-4"
        value={issue}
        onChange={(e) => setIssue(e.target.value)}
      >
        {COMPANY_DATA.commonIssues.map((i, idx) => (
          <option key={idx} value={i}>{i}</option>
        ))}
      </select>
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
      >
        {loading ? "Generating..." : "Generate Draft"}
      </button>
      {draft && (
        <pre className="mt-4 p-4 bg-gray-100 rounded overflow-auto">{draft}</pre>
      )}
    </section>
  );
};

export default InquiryGenerator;
