import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api";

const RoadmapDetails = () => {
  const { id } = useParams();
  const [roadmap, setRoadmap] = useState(null);

  useEffect(() => {
    const fetchRoadmap = async () => {
      try {
        const response = await API.get(`/api/roadmaps/${id}`);
        setRoadmap(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRoadmap();
  }, [id]);

  if (!roadmap) return <div className="p-4 text-blue-50">Loading...</div>;

  return (
    <div className="p-4 max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl mb-6 shadow-md flex items-center gap-4">
        <span className="text-4xl">{roadmap.emoji}</span>
        <h1 className="text-3xl font-bold">{roadmap.title}</h1>
      </div>

      {/* Steps */}
      <div className="space-y-6">
        {roadmap.steps.map((step, index) => (
          <div
            key={index}
            className="bg-white dark:bg-primary shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 p-5 rounded-xl"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">
                {index + 1}
              </div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                {step.stepName}
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapDetails;
