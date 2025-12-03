import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

import logo1 from "../../assets/logo/logobgless3.svg";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  const links = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Roadmaps", path: "/roadmaps" },
    { name: "Code-Lab", path: "/codelab" },
    { name: "Assignments", path: "/assignments" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <nav className="h-20 p-3 font-montserrat hidden lg:block fixed top-0 left-0 right-0 z-50 bg-background">
        <div className="bg-primary h-full rounded-xl flex justify-between items-center px-1.5 shadow-lg shadow-black/70">
          <div>
            <Link to="/" className="text-blue-50 text-xl flex items-center">
              <img src={logo1} alt="logo" className="h-12" />
              <h1>ZekiCoder's LMS</h1>
            </Link>
          </div>
          <div className="flex gap-8 font-semibold">
            {links.map((link, index) => (
              <NavLink
                to={link.path}
                key={index}
                className={({ isActive }) =>
                  `text-sm hover:scale-110 transition-all duration-100 hover:border-b-2 py-2.5 px-2 hover:border-accent flex items-center group gap-0.5 ${
                    isActive
                      ? "border-b-2 border-accent scale-110 text-accent"
                      : "text-blue-50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div>
            <Link
              to="/admin-panel"
              className="text-lg border-2 border-transparent hover:border-accent text-accent px-2 py-1.5 rounded-xl"
            >
              Admin
            </Link>
          </div>
        </div>
      </nav>

      {/* Navbar for mobile */}

      <nav className="h-20 p-3 font-montserrat lg:hidden block fixed top-0 left-0 right-0 z-50 bg-background">
        <div className="bg-primary h-full rounded-xl flex justify-between items-center px-3 shadow-lg shadow-black/70">
          <div>
            <Link to="/" className="text-blue-50 text-xl flex items-center">
              <img src={logo1} alt="logo" className="h-12" />
              <h1>ZekiCoder's LMS</h1>
            </Link>
          </div>
          <div className="">
            {isMenuOpen ? (
              <FaTimes
                onClick={handleMenuToggle}
                className="text-white text-3xl cursor-pointer"
              />
            ) : (
              <FaBars
                onClick={handleMenuToggle}
                className="text-white text-3xl cursor-pointer"
              />
            )}
          </div>
        </div>
        {isMenuOpen && (
          <div className="flex justify-center items-center flex-col gap-4 absolute right-3 top-18 z-50 bg-primary rounded-xl px-4 py-3">
            {links.map((link, index) => (
              <NavLink
                onClick={handleMenuToggle}
                to={link.path}
                key={index}
                className={({ isActive }) =>
                  `text-blue-50 px-3 mx-6 hover:scale-110 transition-all duration-100 hover:border-b-2 py-2.5 hover:border-accent flex items-center group gap-0.5 ${
                    isActive
                      ? "border-b-2 border-accent scale-110 text-accent"
                      : "text-blue-50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
      <div className="h-20"></div>
    </>
  );
}

export default Navbar;
