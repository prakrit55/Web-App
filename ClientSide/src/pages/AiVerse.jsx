import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import AiData from "../data/aiVerse.json";

const AiVerse = () => {
  const [tools, setTools] = useState([]);
  const [filteredTools, setFilteredTools] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setTools(AiData);
    setFilteredTools(AiData);
  }, []);

  const categories = ["All", ...new Set(tools.map((tool) => tool.category))];

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredTools(tools);
    } else {
      setFilteredTools(tools.filter((tool) => tool.category === category));
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-blue-700 dark:text-blue-100 mb-6">
        🌌 AI Verse - Explore Free AI Tools
      </h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => handleFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* AI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredTools.map((tool, index) => (
          <div
            key={index}
            className="bg-white dark:bg-primary border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all"
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
              {tool.name}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              <span className="font-semibold">Category:</span> {tool.category}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-300 mb-3">
              {tool.description}
            </p>
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-medium mt-2 hover:underline"
            >
              Visit Site <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiVerse;
