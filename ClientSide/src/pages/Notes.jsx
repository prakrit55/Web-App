// File: src/data/notes.json


// File: src/pages/Notes.jsx
import { useState } from "react";
import notesData from "../data/notes.json";
import { Link } from "react-router-dom";

const Notes = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    ...new Set(notesData.map((note) => note.category)),
  ];
  const filteredNotes = notesData.filter((note) => {
    return (
      (filter === "All" || note.category === filter) &&
      (note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.tags.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase())
        ))
    );
  });

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-100">
        📝 Zeki Notes
      </h1>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-1/2 dark:bg-slate-800 dark:text-white"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-1/4 dark:bg-slate-800 dark:text-white"
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredNotes.map((note) => (
          <div
            key={note.id}
            className="bg-white dark:bg-primary border dark:border-slate-700 rounded-xl p-5 shadow-md hover:shadow-xl transition-all"
          >
            <h2 className="text-lg font-semibold mb-2 dark:text-white">
              {note.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              {note.snippet}
            </p>
            <div className="flex flex-wrap gap-1 text-xs mb-3">
              {note.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-slate-200 dark:bg-slate-700 text-gray-800 dark:text-gray-100 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              to={`/notes/${note.id}`}
              className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
