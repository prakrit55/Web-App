import { Editor } from "@monaco-editor/react";
import { useState, useRef, useEffect } from "react";
import LanguageSelector from "./LanguageSelector.jsx";
import { languageBoilerplate } from "./data.js";
import Output from "./Output.jsx";
import { executeCode } from "./api";

function CodeEditor() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [isLoading, setIsLoading] = useState(false);
  const [output, setOutput] = useState([]);
  const [error, setError] = useState(false);
  const editorRef = useRef(); // Used for Focus on Editor

  const toggleFullScreen = () => {
    const element = document.documentElement;
    // window.scrollTo({ top: 0, behavior: "smooth" });

    if (!document.fullscreenElement) {
      element
        .requestFullscreen()
        .then(() => setIsFullScreen(true))
        .catch((error) =>
          console.log(`Error while entering Full Screen Mode ${error}`)
        );
    } else {
      document
        .exitFullscreen()
        .then(() => setIsFullScreen(false))
        .catch((error) =>
          console.log(`Error while exiting Full Screen Mode ${error.message}`)
        );
    }
  };

  const onSelect = (lang) => {
    setLanguage(lang);
    setCode(languageBoilerplate[lang]);
  };

  useEffect(() => {
    // Used for Default Language
    setCode(languageBoilerplate[language]);
  }, [language]);

  const runCode = async () => {
    // Used for Run Code
    const code = editorRef.current.getValue();
    if (!code) return;

    try {
      setIsLoading(true);
      const { run } = await executeCode(code, language);
      setOutput(run.output.split("\n"));
      setError(!!run.stderr);
    } catch (err) {
      setError(true);
      setOutput(["Something went wrong"]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full h-70vh ">
        <div className="flex flex-row justify-end">
          <LanguageSelector language={language} onSelect={onSelect} />

          <div className="hidden md:flex">
            <label className="flex gap-2 items-center cursor-pointer">
              <span className="text-blue-50 ml-3 font-bold text-lg">
                Focus Mode
              </span>
              <div className="relative">
                <input
                  type="checkbox"
                  checked={isFullScreen}
                  onChange={toggleFullScreen}
                  className="sr-only"
                />
                <div className="w-10 h-5 bg-primary rounded-full shadow-inner"></div>
                <div
                  className={`dot absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition ${
                    isFullScreen ? "translate-x-5" : ""
                  }`}
                ></div>
              </div>
              <span className="text-black"></span>
            </label>
          </div>

          <button
            onClick={runCode}
            className="bg-primary text-blue-50 font-bold py-2 px-4 rounded hover:bg-accent hover:text-primary transition duration-200"
          >
            {isLoading ? (
              <div className="flex justify-center items-center gap-2 w-7.5 h-6">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              </div>
            ) : (
              "Run"
            )}
          </button>
        </div>

        <div className="rounded-t-xl overflow-hidden mt-1 p-2 bg-[#1E1E1E]">
          <Editor
            height="55vh"
            theme="vs-dark"
            language={language.toLowerCase()}
            value={code}
            onMount={(editor) => (editorRef.current = editor)}
            onChange={(value) => setCode(value)}
          />
        </div>
      </div>
      <div className="w-full">
        <Output output={output} error={error} />
      </div>
    </div>
  );
}

export default CodeEditor;
