import React from "react";
import {Avatar } from "flowbite-react";

export default function Chat() {
  return (
    <div>
      <div className="h-screen bg-gray-100">
        <div className="flex justify-center items-center h-screen">
          <div className="w-3/4 h-96 bg-white rounded shadow-2xl flex flex-col justify-between">
            <nav className="w-full h-12 bg-gray-900 rounded-tr rounded-tl flex justify-between items-center">
              <div className="flex justify-center items-center">
                <i className="mdi mdi-arrow-left font-normal text-gray-300 ml-1"></i>
                <Avatar rounded={true} />
                <span className="text-xs font-medium text-gray-300 ml-1">
                  Alex cairo
                </span>
              </div>
            </nav>

            <div className="flex items-center justify-center w-full px-3 md:px-10">
              <div className="relative w-3/4">
                <input
                  type="text"
                  className=" pl-6 pr-12 py-2 focus:outline-none  h-auto placeholder-gray-100 bg-gray-900 text-white w-full"
                  placeholder="Type a message..."
                  id="typemsg"
                />
                <i className="mdi mdi-paperclip absolute right-8 top-1 transform -rotate-45 text-gray-400"></i>
                <i className="mdi mdi-camera absolute right-2 top-1 text-gray-400"></i>
              </div>
              <div className="h-7 text-center items-center flex justify-center">
                <button
                  className="h-[2.6rem] w-12 bg-blue-400 text-center items-center flex justify-center focus:outline-none hover:bg-gray-900 hover:text-white"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
