import Seo from "../components/Seo";

function About() {
  return (
    <>
      <Seo />
      <div className="text-blue-50 min-h-screen py-10 px-6 md:px-20">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">
            Welcome to ZekiCoder's LMS
          </h1>
          <p className="text-lg text-gray-300">
            Learn. Build. Conquer. – A beginner-friendly platform built with
            passion.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-2">
            🎯 Our Mission
          </h2>
          <p className="text-gray-300 leading-relaxed">
            ZekiCoder LMS is designed to empower aspiring developers by
            providing an intuitive and structured learning environment. With a
            clear focus on simplicity and functionality, we aim to make
            programming less intimidating and more practical for beginners.
          </p>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            🚀 Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "Video Lectures", emoji: "🎥" },
              { title: "Roadmaps", emoji: "🗺️" },
              { title: "Live Code Editor", emoji: "💻" },
              { title: "AI Chatbot", emoji: "🤖" },
              { title: "Assignments", emoji: "📄" },
              { title: "Beginner Focused", emoji: "🧑‍💻" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1D2B45] rounded-xl p-4 shadow-md hover:scale-105 transition-all"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {item.emoji} {item.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            🛠️ Tech Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[
              {
                name: "React",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              },
              {
                name: "Tailwind CSS",
                icon: "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000",
              },
              {
                name: "Node.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
              },
              {
                name: "Express",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
              },
              {
                name: "MongoDB",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
              },
              {
                name: "Motion.dev",
                icon: "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png",
              },
            ].map((tech, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-[#1D2B45] p-4 rounded-xl shadow-md hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-10 h-10 mb-2"
                />
                <p className="text-sm text-gray-300">{tech.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About the Creator */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-2">
            👨‍💻 About the Creator
          </h2>
          <p className="text-gray-300">
            Created by{" "}
            <span className="text-cyan-300 font-bold">Zeki Coder</span>, a
            20-year-old developer passionate about open learning, clean code,
            and building powerful web apps for students just like you.
          </p>
        </section>

        {/* Future Plans */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-2">
            🔮 What's Next?
          </h2>
          <p className="text-gray-300">
            Future plans include profile systems, user progress tracking,
            leaderboards, and collaborative coding rooms. This LMS is just
            getting started 🚀
          </p>
        </section>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/roadmaps"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-full transition-all"
          >
            Explore Roadmaps
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
