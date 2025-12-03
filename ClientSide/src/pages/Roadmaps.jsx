import RoadmapCard from "../components/roadmaps/RoadmapCard";
import Seo from "../components/Seo";
function Roadmaps() {
  return (
    <>
      <Seo />
      <main className="w-full py-4 px-3">
        <div className="h-12 w-full bg-primary text-blue-50 rounded shadow-md shadow-black flex items-center justify-start px-4">
          <h2 className="text-lg">Roadmaps</h2>
        </div>
        <div className="mt-4">
          <RoadmapCard />
        </div>
      </main>
    </>
  );
}

export default Roadmaps;
