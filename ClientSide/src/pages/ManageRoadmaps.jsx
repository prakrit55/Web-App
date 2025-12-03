// 📁 src/pages/AdminPanel/ManageRoadmaps.jsx
import { useEffect, useState } from "react";
import { FaTrash, FaPen } from "react-icons/fa6";
import API from "../api";
import { toast } from "react-toastify";

const ManageRoadmaps = () => {
  const [roadmaps, setRoadmaps] = useState([]);

  // ✅ Fetch all roadmaps on mount
  useEffect(() => {
    fetchRoadmaps();
  }, []);

  const fetchRoadmaps = async () => {
    try {
      const res = await API.get("/api/roadmaps");
      setRoadmaps(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("adminToken");
    if (!token) return toast.error("Not authorized");

    try {
      await API.delete(`/api/roadmaps/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Roadmap deleted");
      fetchRoadmaps();
    } catch (err) {
      toast.error("Error deleting roadmap");
      console.log(err);
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-slate-900 to-gray-800 text-accent">
      <h2 className="text-2xl font-bold mb-6">Manage Roadmaps</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {roadmaps.map((roadmap) => (
          <div
            key={roadmap._id}
            className="bg-primary text-blue-50 rounded-xl shadow-xl p-4 relative"
          >
            <div className="text-3xl">{roadmap.emoji}</div>
            <h3 className="text-lg font-semibold mt-2" style={{ color: roadmap.color }}>
              {roadmap.title}
            </h3>
            <p className="text-sm mt-2 line-clamp-3">{roadmap.description}</p>

            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {roadmap.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-slate-700 py-0.5 px-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="absolute top-2 right-2 flex gap-3">
              <button
                onClick={() => handleDelete(roadmap._id)}
                className="bg-red-600 p-2 rounded-full hover:bg-red-800 duration-300"
              >
                <FaTrash className="text-white text-sm" />
              </button>
              <button
                onClick={() => alert("Edit roadmap coming soon...")}
                className="bg-yellow-500 p-2 rounded-full hover:bg-yellow-600 duration-300"
              >
                <FaPen className="text-white text-sm" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageRoadmaps;
