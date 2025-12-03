import { useState } from "react";
import { toast } from "react-toastify";
import API from "../api";
import { useNavigate } from "react-router-dom";

const AddRoadmap = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emoji: "",
    title: "",
    description: "",
    color: "",
    tags: "",
  });

  const [steps, setSteps] = useState([
    { stepName: "", description: "" },
  ]);

  // 🌀 Form inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🌀 Step inputs
  const handleStepChange = (index, e) => {
    const newSteps = [...steps];
    newSteps[index][e.target.name] = e.target.value;
    setSteps(newSteps);
  };

  // ➕ Add another step
  const handleAddStep = () => {
    setSteps([...steps, { stepName: "", description: "" }]);
  };

  // ❌ Remove step
  const handleRemoveStep = (index) => {
    const newSteps = [...steps];
    newSteps.splice(index, 1);
    setSteps(newSteps);
  };

  // 🚀 Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");
    if (!token) return toast.error("Not authorized");

    try {
      const tagsArray = formData.tags.split(",").map((tag) => tag.trim());

      await API.post(
        "/api/roadmaps",
        {
          ...formData,
          tags: tagsArray,
          steps,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Roadmap added successfully");
      navigate("/admin/roadmaps");
    } catch (err) {
      toast.error("Failed to add roadmap");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-800 text-accent p-6">
      <h2 className="text-2xl font-bold mb-6">➕ Add New Roadmap</h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl"
      >
        {/* Basic Fields */}
        <input
          type="text"
          name="emoji"
          value={formData.emoji}
          onChange={handleChange}
          placeholder="Emoji (🚀, 💻)"
          className="p-3 rounded bg-slate-700 text-white"
          required
        />
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="p-3 rounded bg-slate-700 text-white"
          required
        />
        <input
          type="text"
          name="color"
          value={formData.color}
          onChange={handleChange}
          placeholder="Color (#00ffcc)"
          className="p-3 rounded bg-slate-700 text-white"
        />
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          placeholder="Tags (comma separated)"
          className="p-3 rounded bg-slate-700 text-white"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Short description"
          rows="3"
          className="p-3 rounded bg-slate-700 text-white md:col-span-2"
          required
        ></textarea>

        {/* 🔥 Steps Section */}
        <div className="md:col-span-2 mt-4">
          <h3 className="text-xl font-semibold mb-2 text-white">🧱 Steps</h3>

          {steps.map((step, index) => (
            <div key={index} className="mb-4 bg-slate-800 p-4 rounded-lg">
              <input
                type="text"
                name="stepName"
                value={step.stepName}
                onChange={(e) => handleStepChange(index, e)}
                placeholder={`Step ${index + 1} Title`}
                className="w-full p-2 mb-2 rounded bg-slate-700 text-white"
                required
              />
              <textarea
                name="description"
                value={step.description}
                onChange={(e) => handleStepChange(index, e)}
                placeholder="Step Description"
                rows="2"
                className="w-full p-2 rounded bg-slate-700 text-white"
                required
              />
              {steps.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveStep(index)}
                  className="text-red-400 mt-2 underline"
                >
                  Remove Step
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={handleAddStep}
            className="mt-2 text-blue-400 underline"
          >
            ➕ Add Another Step
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 duration-300 md:col-span-2"
        >
          Add Roadmap
        </button>
      </form>
    </div>
  );
};

export default AddRoadmap;
