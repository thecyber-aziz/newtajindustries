import React, { useState } from "react";
import { COMPANY_DATA } from "../utils/data";
import { getTechnicalDefinition } from "../utils/api";

export default function GlossaryTool() {
  const [term, setTerm] = useState(COMPANY_DATA.commonTerms[0]);
  const [definition, setDefinition] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLookup = async () => {
    if (!term) return;
    setIsLoading(true);
    setDefinition("");
    const result = await getTechnicalDefinition(term);
    setDefinition(result);
    setIsLoading(false);
  };

  return (
    <div id="glossary" className="mt-16 pt-12 border-t-2 border-red-200">
      <h2 className="text-3xl font-bold text-red-700 mb-6 flex items-center justify-center">
        <span className="mr-2 text-red-500">🔍</span> Technical Glossary Lookup
      </h2>
      <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto">
        Need to understand a technical term? Look up quick, concise definitions related to industrial machinery and repair.
      </p>

      <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-2xl border border-red-100">
        <div className="flex flex-col sm:flex-row gap-4 mb-6 items-stretch">
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Enter a technical term (e.g., PLC)"
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 text-gray-700 bg-white"
          />
          <button
            onClick={handleLookup}
            disabled={isLoading || !term}
            className={`flex-shrink-0 px-6 py-3 text-lg font-semibold text-white rounded-lg shadow-md transition duration-300 transform ${
              isLoading || !term
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700 hover:scale-[1.02]"
            }`}
          >
            {isLoading ? "Searching..." : "Lookup Term"}
          </button>
        </div>

        {definition && (
          <div className="mt-6 text-left p-4 bg-red-50 border border-red-200 rounded-lg">
            <h4 className="text-xl font-bold text-gray-900 mb-2">{term}:</h4>
            <p className="whitespace-pre-wrap text-base text-gray-800">{definition}</p>
          </div>
        )}
      </div>
    </div>
  );
}
