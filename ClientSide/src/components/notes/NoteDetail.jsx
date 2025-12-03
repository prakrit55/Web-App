import { useParams } from "react-router-dom";
import notes from "../../data/notes.json";

const NoteDetail = () => {
  const { id } = useParams();
  const note = notes.find((n) => n.id === id);

  if (!note) {
    return <div className="p-4 text-white">Note not found.</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 dark:text-white mb-4">{note.title}</h1>
      <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
        {/* Placeholder - Replace with real content from backend or Markdown */}
        This is a detailed explanation for the note titled "{note.title}". You can expand this with content from a markdown file or backend.
      </p>

      <div className="mt-6">
        <h2 className="text-lg font-semibold dark:text-white mb-2">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {note.tags.map((tag) => (
            <span
              key={tag}
              className="bg-slate-300 dark:bg-slate-700 text-sm px-2 py-1 rounded-full text-gray-800 dark:text-white"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoteDetail;