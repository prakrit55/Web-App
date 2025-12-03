import { useState } from "react";
import Editor from "@monaco-editor/react";
import { useEffect } from "react";

function WebDev() {
  const [tabOpen, setTabOpen] = useState("html");
  const [isFullScreen, setIsFullScreen] = useState(false);

  const [htmlCode, setHtmlCode] = useState(
    `<!-- This is React based CDE, So you've to write your HTML tags directly, No need for Boilerplate code. Boilerplate will be added on execution automatically --> 

<marquee>
  <h1>Welcome to ZekiCoder's LMS</h1>
</marquee>`
  );
  const [cssCode, setCssCode] = useState(
    "body { \n  background: linear-gradient(135deg, #0C7BB1, #F2B5E7); \n  height: 100vh; \n} \nh1 { \n  color: #00072D \n}"
  );
  const [jsCode, setJsCode] = useState("console.log('Hello World');");
  const [srcDoc, setSrcDoc] = useState("");
  const [jsRun, setJsRun] = useState(false);

  useEffect(() => {
    setSrcDoc(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
          ${cssCode}
        </style>
      </head>
      <body>
        ${htmlCode}
        <script>
          ${jsCode}
        </script>
      </body>
      </html>
    `);
  }, [htmlCode, cssCode, jsRun]);

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

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row gap-4 w-1/2 justify-end pr-1.5">
        <button
          onClick={() => setTabOpen("html")}
          className={`bg-[#1E1E1E] text-blue-50 px-4 mt-2 py-1 border-1 ${
            tabOpen === "html" ? "border-b-transparent" : ""
          }`}
        >
          HTML
        </button>
        <button
          onClick={() => setTabOpen("css")}
          className={`bg-[#1E1E1E] text-blue-50 px-4 mt-2 py-1 border-1 ${
            tabOpen === "css" ? "border-b-transparent" : ""
          }`}
        >
          CSS
        </button>
        <button
          onClick={() => setTabOpen("javascript")}
          className={`bg-[#1E1E1E] text-blue-50 px-4 mt-2 py-1 border-1 ${
            tabOpen === "javascript" ? "border-b-transparent" : ""
          }`}
        >
          JavaScript
        </button>
        <div className="hidden md:flex absolute right-20 z-10">
            <label className="flex gap-2 items-center cursor-pointer">
              <span className="text-black ml-3 font-bold text-lg">
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
          onClick={() => setJsRun((jsRun) => !jsRun)}
          className="absolute right-7 bg-primary text-blue-50 font-bold py-1 px-2 h-9 flex justify-center items-center rounded hover:bg-accent hover:text-primary transition duration-200"
        >
          Run
        </button>

      </div>
      <div className="flex flex-row gap-3 w-full">
        <div className="h-150 w-1/2 bg-[#1E1E1E] p-3 text-blue-50 rounded-b rounded-tl">
          {tabOpen === "html" && (
            <Editor
              language="html"
              value={htmlCode}
              theme="vs-dark"
              onChange={(value) => setHtmlCode(value)}
              options={{
                fontSize: 16,
                wordWrap: "on",
                minimap: {
                  enabled: false,
                },
                automaticLayout: true,
              }}
            />
          )}
          {tabOpen === "css" && (
            <Editor
              language="css"
              value={cssCode}
              theme="vs-dark"
              onChange={(value) => setCssCode(value)}
              options={{
                fontSize: 16,
                wordWrap: "on",
                minimap: {
                  enabled: false,
                },
                automaticLayout: true,
              }}
            />
          )}
          {tabOpen === "javascript" && (
            <Editor
              language="javascript"
              value={jsCode}
              theme="vs-dark"
              onChange={(value) => setJsCode(value)}
              options={{
                fontSize: 16,
                wordWrap: "on",
                minimap: {
                  enabled: false,
                },
                automaticLayout: true,
              }}
            />
          )}
        </div>

        <div className="h-150 w-1/2 rounded overflow-hidden">
          <iframe
            srcDoc={srcDoc}
            frameborder="0"
            title="Live Preview"
            sandbox="allow-scripts allow-modals allow-forms allow-popups allow-same-origin"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default WebDev;
