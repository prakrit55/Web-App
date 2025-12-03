import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import API from "../api";

function AddCourse() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    thumbnail: "",
    title: "",
    category: "",
    teacher: "",
    youtubeLink: "",
    duration: "",
  });

  // 💡 Handles all inputs in one go
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");

    if (!token) {
      toast.error("Unauthorized. Please login.");
      return;
    }

    try {
      const res = await API.post("/api/courses", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Course added successfully!");
      navigate("/admin/courses");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-800 text-accent p-6">
      <h1 className="text-2xl font-bold mb-6">➕ Add New Course</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-primary p-6 rounded-xl shadow-xl w-full max-w-2xl"
      >
        {[
          { name: "thumbnail", label: "Thumbnail URL" },
          { name: "title", label: "Course Title" },
          { name: "category", label: "Category" },
          { name: "teacher", label: "Teacher" },
          { name: "youtubeLink", label: "YouTube Playlist URL" },
          { name: "duration", label: "Duration (e.g., 4h 10m)" },
        ].map((input) => (
          <div key={input.name} className="mb-4">
            <label className="block mb-1 font-medium">{input.label}</label>
            <input
              type="text"
              name={input.name}
              value={formData[input.name]}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-slate-700 text-white"
              required
            />
          </div>
        ))}

        <button
          type="submit"
          className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded"
        >
          Submit Course
        </button>
      </form>
    </div>
  );
}

export default AddCourse;
