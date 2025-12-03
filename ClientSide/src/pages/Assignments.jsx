import { useEffect, useState } from "react";
import Assignment from "../data/assignments.json";
import AssignmentCard from "../components/assignment/AssignmentCard";
import Seo from "../components/Seo";
function Assignments() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    setAssignments(Assignment);
  }, []);

  return (
    <>
      <Seo />
      <div className="px-4 py-6 max-w-5xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-blue-900 dark:text-blue-100">
            📚 Assignments
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Sharpen your skills by solving these challenges.
          </p>
        </div>

        <div className="space-y-6">
          {assignments.map((assignment, index) => (
            <AssignmentCard key={index} assignment={assignment} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Assignments;
