import { useState } from "react";
import Seo from "../components/Seo.jsx";
import CodeEditor from "../components/codelab/CodeEditor.jsx";
import WebDev from "../components/codelab/WebDev.jsx";
function CodeLab() {
  const [activeTab, setActiveTab] = useState("code");

  return (
    <>
      <Seo />
      <div className="w-full px-4 flex flex-col justify-center">
        <div className="my-3">
          <div className="md:hidden block text-2xl text-purple-50 text-center font-semibold mb-4">
            Better experience on Desktop
          </div>
          <div className="flex flex-row items-center gap-4 w-80 mb-2 md:mb-[-40px]">
            <button
              onClick={() => setActiveTab("code")}
              className={`flex justify-center items-center text-xl z-20 bg-blue-50 border-2 border-primary font-bold px-4 py-2 rounded-md ${
                activeTab === "code"
                  ? "bg-primary text-blue-50"
                  : "bg-blue-50 text-primary"
              }`}
            >
              Code Lab
            </button>
            <button
              onClick={() => setActiveTab("web")}
              className={`flex justify-center items-center text-xl bg-blue-50 z-20 border-2 border-primary font-bold px-4 py-2 rounded-md ${
                activeTab === "web"
                  ? "bg-primary text-blue-50"
                  : "bg-blue-50 text-primary"
              }`}
            >
              Web Lab
            </button>
          </div>
          <div className="">
            {activeTab === "code" && <CodeEditor />}
            {activeTab === "web" && <WebDev />}
          </div>
        </div>
        <div className="text-center text-lg text-gray-700 py-2">
          If any of these languages not working, please contact us at{" "}
          <a
            href="mailto:contact.zekicoder@gmail.com"
            className="text-blue-500"
          >
            support.zekicoder@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}

export default CodeLab;
