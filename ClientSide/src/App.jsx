import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Pages
import Home from "./pages/Home.jsx";
import Courses from "./pages/Courses.jsx";
import Roadmaps from "./pages/Roadmaps.jsx";
import RoadmapDetails from "./components/roadmaps/RoadmapDetails.jsx";
import CodeLab from "./pages/CodeLab.jsx";
import Assignments from "./pages/Assignments.jsx";
import About from "./pages/About.jsx";
import AiVerce from "./pages/AiVerse.jsx";
import Notes from "./pages/Notes.jsx";
import NotFound from "./pages/NotFound.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import NoteDetail from "./components/notes/NoteDetail.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import ManageRoadmaps from "./pages/ManageRoadmaps.jsx";
import ManageCourses from "./pages/ManageCourses.jsx";
import AddCourse from "./pages/AddCourse.jsx";
import AddRoadmap from "./pages/AddRoadmap.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path="/roadmaps/:id" element={<RoadmapDetails />} />
        <Route path="/codelab" element={<CodeLab />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/about" element={<About />} />
        <Route path="/aiverse" element={<AiVerce />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/:id" element={<NoteDetail />} />
        <Route path="/admin-panel" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/roadmaps" element={<ManageRoadmaps />} />
        <Route path="/admin/courses" element={<ManageCourses />} />
        <Route path="/admin/add-course" element={<AddCourse />} />
        <Route path="/admin/add-roadmap" element={<AddRoadmap />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" // or "light", "colored"
      />
    </>
  );
}

export default App;
