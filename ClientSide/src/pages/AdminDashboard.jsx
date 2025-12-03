// 📁 src/pages/AdminPanel/AdminDashboard.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../api";
import { FaBookOpen, FaMapSigns } from "react-icons/fa";

function AdminDashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({ courses: 0, roadmaps: 0 });

  // ✅ Fetch dashboard stats from backend
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        const res = await API.get("/api/admin/dashboard/stats", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setStats(res.data);
      } catch (err) {
        console.error("Failed to fetch stats", err);
      }
    };

    fetchStats();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    toast.success("Logged out successfully");
    navigate("/admin-panel");
  };

  return (
    <div className="min-h-120 text-accent p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome, Admin 👋</h1>

      {/* 📊 STATS SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="bg-primary text-blue-50 rounded-xl p-6 shadow-lg flex items-center gap-5">
          <FaBookOpen className="text-4xl text-blue-400" />
          <div>
            <h2 className="text-lg font-semibold">Total Courses</h2>
            <p className="text-3xl font-bold">{stats.courses}</p>
          </div>
        </div>

        <div className="bg-primary text-blue-50 rounded-xl p-6 shadow-lg flex items-center gap-5">
          <FaMapSigns className="text-4xl text-green-400" />
          <div>
            <h2 className="text-lg font-semibold">Total Roadmaps</h2>
            <p className="text-3xl font-bold">{stats.roadmaps}</p>
          </div>
        </div>
      </div>

      {/* 🧭 ACTION BUTTONS SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <button
          onClick={() => navigate("/admin/add-roadmap")}
          className="p-6 bg-primary rounded-xl hover:bg-blue-700 duration-200 shadow-xl"
        >
          ➕ Add Roadmap
        </button>

        <button
          onClick={() => navigate("/admin/add-course")}
          className="p-6 bg-primary rounded-xl hover:bg-emerald-700 duration-200 shadow-xl"
        >
          📚 Add Course
        </button>

        <button
          onClick={() => navigate("/admin/roadmaps")}
          className="p-6 bg-primary rounded-xl hover:bg-red-700 duration-200 shadow-xl"
        >
          🗂️ Manage Roadmaps
        </button>

        <button
          onClick={() => navigate("/admin/courses")}
          className="p-6 bg-primary rounded-xl hover:bg-yellow-700 duration-200 shadow-xl"
        >
          📖 Manage Courses
        </button>

        <button
          onClick={handleLogout}
          className="p-6 bg-red-600 rounded-xl hover:bg-red-800 duration-200 shadow-xl text-white"
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;
