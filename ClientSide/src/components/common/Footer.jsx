import { FaWhatsapp, FaGithub, FaInstagram } from "react-icons/fa";
import { BsLaptop } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logobgless3.svg";

function Footer() {
  return (
    <footer className="p-3 text-blue-50">
      <div className="w-full bg-primary rounded-xl">
        <h3 className="text-xl font-semibold text-center flex justify-center items-center gap-2 py-2 border-b-2 border-blue-50">
          Made with <BsLaptop className="mt-0.5" /> by a Dev, for Devs
        </h3>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 px-4 md:px-16 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col justify-center items-center text-center">
            <img src={logo} alt="" className="h-20 mb-2" />
            <h1 className="text-xl">ZekiCoder's LMS</h1>
            <p className="text-sm">Learn. Build. Conquer.</p>
          </div>

          {/* Useful Links */}
          <div>
            <h1 className="text-lg font-bold mb-3">USEFUL LINKS</h1>
            <div className="flex flex-col gap-2 text-lg font-semibold">
              <Link
                to="/"
                className="flex items-center text-slate-400 gap-2 hover:text-blue-50"
              >
                Courses
              </Link>
              <Link
                to="/"
                className="flex items-center text-slate-400 gap-2 hover:text-blue-50"
              >
                Help
              </Link>
              <Link
                to="/"
                className="flex items-center text-slate-400 gap-2 hover:text-blue-50"
              >
                About
              </Link>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h1 className="text-lg font-bold mb-3">CONTACT US</h1>
            <div className="flex flex-col gap-2 text-lg font-semibold">
              <a
                href="https://wa.me/916350511150"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-slate-400 gap-2 hover:text-blue-50"
              >
                <FaWhatsapp /> WhatsApp
              </a>
              <a
                href="https://github.com/Ashfaq-AK"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-slate-400 gap-2 hover:text-blue-50"
              >
                <FaGithub /> Github
              </a>
              <a
                href="https://www.instagram.com/ashfaq_a.k_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-slate-400 gap-2 hover:text-blue-50"
              >
                <FaInstagram /> Instagram
              </a>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h1 className="text-lg font-bold mb-3">TECHNOLOGIES</h1>
            <div className="flex flex-col gap-2 text-lg font-semibold">
              <Link
                to="/"
                className="flex items-center text-slate-400 gap-2 hover:text-blue-50"
              >
                MERN
              </Link>
              <Link
                to="/"
                className="flex items-center text-slate-400 gap-2 hover:text-blue-50"
              >
                Chatbase
              </Link>
              <Link
                to="/"
                className="flex items-center text-slate-400 gap-2 hover:text-blue-50"
              >
                Animate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
