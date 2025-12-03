import { useState /*, useEffect */ } from "react";
import Sidebar from "../components/courses/Sidebar";
import CourseCard from "../components/courses/CourseCard";
import { GiWhiteBook } from "react-icons/gi";
// import API from "../api";
import Seo from "../components/Seo";
import coursesData from "../assets/courses.json"; // local JSON file

function Courses() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [courses, setCourses] = useState(coursesData); // set directly from local file
  // const [loading, setLoading] = useState(true);

  /*
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await API.get("/api/courses");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);
  */

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <>
      <Seo />
      <main className="w-full py-4 px-3">
        <div className="flex h-auto rounded-xl md:gap-3 gap-1">
          <div className="bg-primary w-auto h-126 rounded sticky top-24">
            <Sidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
          <div className="w-full h-full rounded-xl">
            <div className="mb-4">
              <h1 className="text-xl font-bold bg-primary text-blue-50 py-2 px-3 rounded flex gap-2 items-center">
                <GiWhiteBook />
                {selectedCategory} Courses
              </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-4 pl-1">
              {filteredCourses.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Courses;
