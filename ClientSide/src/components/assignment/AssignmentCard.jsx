import { useState } from "react";
import { Link } from "react-router-dom";

function AssignmentCard({ assignment }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-primary shadow-lg rounded-xl transition-all duration-300 hover:shadow-xl border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            📝 {assignment.title}
          </h2>
          <span className={`text-sm font-bold`} style={{ color: assignment.color }}>
            Difficulty: {assignment.difficulty}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300">{assignment.description}</p>

        <div className="flex flex-wrap gap-3 mt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm transition"
          >
            {isExpanded ? "Hide Pseudocode" : "View Pseudocode"}
          </button>

          <Link
            to="/codelab"
            className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded text-sm transition"
          >
            Try Now
          </Link>
        </div>

        {isExpanded && (
          <div className="mt-4 bg-gray-100 dark:bg-gray-800 rounded p-4 overflow-x-auto">
            <pre className="text-sm font-mono text-gray-800 dark:text-gray-200">
              {assignment.pseudocode}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default AssignmentCard;
