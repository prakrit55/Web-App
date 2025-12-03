import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 🔐 Handles login logic
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:6767/api/admin/login",
        {
          username,
          password,
        }
      );

      // ✅ Store token in localStorage
      localStorage.setItem("adminToken", response.data.token);
      localStorage.setItem("adminUser", response.data.username);

      toast.success("Welcome back, Admin!");
      navigate("/admin/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.error || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-150 flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="bg-primary text-accent p-8 rounded-xl shadow-2xl shadow-black w-[90%] max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>

        <div className="mb-4">
          <label className="block mb-1">Username</label>
          <input
            type="text"
            className="w-full px-3 py-2 rounded bg-slate-800 text-accent outline-none focus:ring-2 focus:ring-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 rounded bg-slate-800 text-accent outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 duration-300"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
