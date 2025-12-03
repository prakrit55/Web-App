import { useState } from "react";
import { PiSidebarBold } from "react-icons/pi";
import { TiThSmallOutline } from "react-icons/ti";
import {
  FaLaptopCode,
  FaServer,
  FaCodeBranch,
  FaRobot,
  FaMobileAlt,
  FaDatabase,
} from "react-icons/fa";

function Sidebar({ setSelectedCategory, selectedCategory }) {
  const categories = [
    { name: "All", icon: <TiThSmallOutline /> },
    { name: "Frontend", icon: <FaLaptopCode /> },
    { name: "Backend", icon: <FaServer /> },
    { name: "Database", icon: <FaDatabase /> },
    { name: "Full Stack", icon: <FaCodeBranch /> },
    { name: "Artificial Intelligence", icon: <FaRobot /> },
    { name: "Mobile Development", icon: <FaMobileAlt /> },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`flex flex-col items-center text-blue-50 font-semibold ${
        isOpen ? "w-45" : "w-11"
      } transition-all duration-500 ease-in-out px-2`}
    >
      <div className="flex gap-2 w-full items-center px-0.5">
        <button onClick={() => setIsOpen(!isOpen)}>
          <PiSidebarBold className="text-2xl my-2" />
        </button>

        {isOpen && <h1 className="text-lg delay-500 transition-all text-start">Categories</h1>}
      </div>
      <ul className="flex flex-col w-full items-center cursor-pointer">
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => setSelectedCategory(category.name)}
            className={`flex items-center gap-2 hover:bg-slate-700 px-0.5 rounded-lg w-full ${
              selectedCategory === category.name ? "text-blue-400" : ""
            }`}
            title={!isOpen ? category.name : ""}
          >
            <span className="text-2xl py-1.5">{category.icon}</span>
            {isOpen && (
              <span className="text-sm font-light">{category.name}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
