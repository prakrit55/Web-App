import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function CourseCard({ course }) {
  return (
    <div className="bg-primary group text-blue-50 h-80 w-full rounded-xl overflow-hidden shadow-md hover:scale-105 transition duration-200 relative">
      <div className="w-full h-3/5 bg-[#010723] flex justify-center">
        <img
          src={course.thumbnail || "../src/assets/logo/logo1.svg"}
          alt=""
          className={`object-cover ${
            course.thumbnail
              ? "w-full h-full"
              : "h-2/2 animate-pulse"
          }`}
        />
      </div>
      <div className="w-full flex flex-col p-4">
        <h1 className="text-lg font-semibold truncate">{course.title}</h1>
        <h2 className="text-sm">Teacher: {course.teacher || "Unknown"}</h2>
        <h3 className="text-sm">Duration: {course.duration || "Unknown"}</h3>
      </div>
      <Link
        to={course.youtubeLink}
        title="Go To YouTube"
        target="_blank"
        className="bg-accent hidden group-hover:block text-primary rounded p-2 font-semibold absolute bottom-3 right-3"
      >
        <FaArrowRight />
      </Link>
    </div>
  );
}

export default CourseCard;
