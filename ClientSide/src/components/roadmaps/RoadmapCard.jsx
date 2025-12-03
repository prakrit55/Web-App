import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import API from "../../api";
import { Link } from "react-router-dom";

// Skeleton Card Component
function SkeletonRoadmapCard() {
  return (
    <div className="min-h-58 w-full bg-gray-700 rounded shadow-md shadow-black p-5 animate-pulse">
      <div className="bg-gray-600 h-8 w-8 rounded mb-4"></div>
      <div className="bg-gray-600 h-5 w-3/4 rounded mb-2"></div>
      <div className="bg-gray-600 h-4 w-5/6 rounded mb-4"></div>
      <div className="bg-gray-600 h-4 w-1/3 rounded mb-6"></div>
      <div className="flex flex-wrap gap-2">
        <div className="bg-gray-600 h-5 w-12 rounded-full"></div>
        <div className="bg-gray-600 h-5 w-16 rounded-full"></div>
        <div className="bg-gray-600 h-5 w-14 rounded-full"></div>
      </div>
    </div>
  );
}

const RoadmapCard = () => {
  const [roadmaps, setRoadmaps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoadmaps = async () => {
      try {
        const response = await API.get("/api/roadmaps");
        setRoadmaps(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRoadmaps();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-4 pl-1">
      {loading
        ? Array.from({ length: 12 }).map((_, i) => <SkeletonRoadmapCard key={i} />)
        : roadmaps.map((roadmap, index) => (
            <div
              key={index}
              className="min-h-58 w-full bg-primary text-blue-50 rounded shadow-md shadow-black p-5"
            >
              <div className="text-3xl">{roadmap.emoji}</div>
              <h2 className="text-lg" style={{ color: roadmap.color }}>
                {roadmap.title}
              </h2>
              <p className="text-sm mt-2 line-clamp-2">{roadmap.description}</p>
              <Link
                to={`/roadmaps/${roadmap._id}`}
                className="mt-3 text-sm text-blue-600 flex items-center gap-1.5 b-1"
                style={{ color: roadmap.color }}
              >
                Explore Now <FaArrowRight className="mt-1" />
              </Link>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {roadmap.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-600 py-0.5 px-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
    </div>
  );
};

export default RoadmapCard;
