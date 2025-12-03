import { IoIosSend } from "react-icons/io";

const Chats = () => {
  return (
    <div className="h-full w-full px-1 overflow-y-auto flex items-end">
      <div className="flex justify-center w-full">
        <input
          type="text"
          placeholder="Ask Anything..."
          className=" bg-slate-300 py-1 px-1.5 w-full rounded-l-lg outline-none"
        />
        <button className="bg-blue-500 text-white p-2 hover:bg-blue-600 transition duration-200 rounded-r-lg">
          <IoIosSend />
        </button>
      </div>
    </div>
  );
};

export default Chats;
