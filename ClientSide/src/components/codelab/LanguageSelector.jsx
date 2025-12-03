import { IoMdArrowDropdown } from "react-icons/io";

import { languages } from "./data";
import { useState } from "react";

function LanguageSelector({ language, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col relative">
      <div className="flex">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-56 justify-between items-center gap-2 bg-primary text-blue-50 rounded-md p-2"
        >
          Languages: {language.charAt(0).toUpperCase() + language.slice(1)}{" "}
          <IoMdArrowDropdown />
        </button>
      </div>
      <div
        className={`flex absolute top-10.5 left-17 z-10 overflow-y-auto max-h-60 bg-primary ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col  text-slate-400 font-semibold rounded">
          {Object.entries(languages).map(([lang, version]) => (
            <li
              onClick={() => {
                onSelect(lang);
                setIsOpen(false);
              }}
              key={lang}
              className={`hover:bg-slate-700 hover:text-blue-50 px-10 ${
                language === lang ? "bg-slate-700 text-blue-50" : ""
              }`}
            >
              <button>{lang.charAt(0).toUpperCase() + lang.slice(1)}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LanguageSelector;
