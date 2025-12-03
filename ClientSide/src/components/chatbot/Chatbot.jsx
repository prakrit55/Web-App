import { useState } from "react";
import ChatBotLogo from "../../assets/logo/chatbot.png";
import ChatBotBackLogo from "../../assets/logo/chatbotback.png";
import { FaCaretDown } from "react-icons/fa";
import Chats from "./Chats";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div
        className={`h-120 w-70 bg-white fixed right-16 bottom-20 z-50 overflow-hidden rounded shadow-2xl ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between text-blue-950 font-semibold bg-[#36BCFF] px-3 py-2">
          <h2>ZekiBot</h2>
          <button onClick={() => setIsOpen(!isOpen)} className="text-xl">
            <FaCaretDown />
          </button>
        </div>
        <div className="h-106"><Chats /></div>
        <p className="text-xs text-center">ChatBots can make Mistakes</p>
      </div>
      <button
        className="fixed bottom-5 right-5 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={isOpen ? ChatBotBackLogo : ChatBotLogo}
          alt=""
          className="h-19 hover:scale-110 duration-200"
        />
      </button>
    </div>
  );
};

export default Chatbot;
