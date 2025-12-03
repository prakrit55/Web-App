import { Link } from "react-router-dom";
import { motion } from "motion/react";

function HomeCard(props) {
  return (
      <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="h-90 bg-zekiBlue text-blue-50 rounded-xl overflow-hidden flex flex-col transition-transform duration-200 ease-in-out hover:scale-105 will-change-transform"
      >
        <div className="bg-primary h-2/3 w-full overflow-hidden">
          <img src={props.image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="h-1/2 w-full flex flex-col justify-center gap-2 px-4 py-3 bg-primary">
          <h3 className="text-xl font-montserrat">{props.title}</h3>
          <p className="font-montserrat text-sm">{props.description}</p>

          {props.to ? (
              <Link
                  to={props.to}
                  className="h-1/3 mt-2 w-full flex justify-end"
              >
                <button
                    className="bg-cyan-500 text-black hover:bg-cyan-700 px-4 py-2 rounded-md"
                >
                  {props.buttonText}
                </button>
              </Link>
          ) : (
              <button
                  onClick={props.onClick}
                  className="h-1/3 mt-2 w-full flex justify-end bg-cyan-500 text-black hover:bg-cyan-700 px-4 py-2 rounded-md"
              >
                {props.buttonText}
              </button>
          )}
        </div>
      </motion.div>
  );
}

export default HomeCard;
