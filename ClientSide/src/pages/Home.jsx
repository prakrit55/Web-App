import { useState } from "react";
import { motion } from "motion/react";

import HomeCard from "../components/home/HomeCard";
import Carousel from "../components/home/Carousel";
import SuggestionForm from "../components/home/SuggestionForm";
import Seo from "../components/Seo";
import course from "../assets/HomeImages/course.jpg";
import notes from "../assets/HomeImages/notes.jpg";
import challenge from "../assets/HomeImages/challenge.jpg";
import community from "../assets/HomeImages/community.avif";
import suggestions from "../assets/HomeImages/suggestions.avif";
import ai from "../assets/HomeImages/ai.avif";

const HomeCardData = [
  {
    title: "COURSES",
    description: "Start Your Journey Now",
    buttonText: "Explore Courses",
    to: "/courses",
    image: course,
  },
  {
    title: "NOTES",
    description: "Easy to understand notes",
    buttonText: "Start Learning Notes",
    to: "/notes",
    image: notes,
  },
  {
    title: "CHALLENGES",
    description: "Solve Coding challenges",
    buttonText: "Start Solving",
    to: "/assignments",
    image: challenge,
  },
  {
    title: "COMMUNITY",
    description: "Join the community",
    buttonText: "Join Community",
    image: community,
  },
  {
    title: "SUGGESTIONS",
    description: "Suggestions for the website",
    buttonText: "Write Suggestions",
    image: suggestions,
  },
  {
    title: "AI VERSE",
    description: "Universe of AI Tools",
    buttonText: "Discover AI Tools",
    to: "/aiverse",
    image: ai,
  },
];

function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (card) => {
    if (card.title === "SUGGESTIONS") {
      setShowModal(true);
    }
  };

  return (
    <>
      <Seo />
      <main className="w-full flex justify-center items-start gap-4 px-4 py-3">
        <div className="h-full w-full">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="h-3/6 w-full overflow-hidden shadow-lg shadow-black/70 bg-primary rounded-2xl flex justify-center items-center mb-4"
          >
            <Carousel />
          </motion.div>
          <div className=" rounded-2xl flex flex-col justify-center items-center p-4">
            <div className="h-12 md:flex hidden w-full border-b-[1px] border-slate-500 justify-center items-center mb-5">
              <h1 className="text-2xl  text-zekifont font-montserrat">
                “Learn. Build. Conquer. Your dev journey starts here.”
              </h1>
            </div>
            <div className="rounded-2xl w-full grid lg:grid-cols-3 grid-cols-1 gap-7 p-2">
              {HomeCardData.map((card, index) => (
                <HomeCard
                  key={index}
                  title={card.title}
                  description={card.description}
                  buttonText={card.buttonText}
                  image={card.image}
                  to={card.to}
                  onClick={() => handleCardClick(card)}
                />
              ))}
            </div>
          </div>
        </div>
        <div
          className={`h-full w-full rounded-xl fixed left-0 top-20 p-4 ${
            showModal ? "inset-0 backdrop:blur-md bg-black/50" : "hidden"
          }`}
          onClick={() => setShowModal(false)}
        >
          {showModal && (
            <SuggestionForm
              onclose={() => setShowModal(false)}
              onSuccess={() => setShowModal(false)}
            />
          )}
        </div>
      </main>
    </>
  );
}

export default Home;
