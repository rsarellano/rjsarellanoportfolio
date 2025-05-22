import React, { useState } from "react";
import WebDevelopmentContent from "./webDevelopment";
import QaContent from "./qa";

const Services = () => {
  const [moveLeft, setMoveLeft] = useState(false);
  const [qaMoveleft, setQaMoveLeft] = useState(false);
  const [supportMoveLeft, setSupportMoveLeft] = useState(false);

  return (
    <div className="flex justify-center h-[1600px] bg-sky-200 overflow-hidden">
      <div className=" relative w-full  h-[1600px] bg-gray-100">
        <div className=" absolute top-0 ml-[600px]  left-4 flex  flex-col space-y-[150px]">
          <div
            className={` webDevelopment h-[400px]  
            absolute top-[100px] bottom-[50px] left-[25%] w-px bg-black
            transform transition-transform duration-700
            ${moveLeft ? "-translate-x-[600px]" : "-translate-x-1/2"}
          `}
          >
            <button
              onClick={() => setMoveLeft(true)}
              className="px-4 py-2 ml-[20px] bg-blue-600 text-black rounded shadow"
            >
              Web Development
            </button>
            <div className="absolute mt-[55px] w-auto ">
              <WebDevelopmentContent
                triggerVisibleSubCards={moveLeft}
                triggerVisibleCards={moveLeft}
                triggerVisibleDiagonalLine={moveLeft}
              />
            </div>
          </div>
          <div
            className={` qa h-[400px] absolute top-[500px] bottom-[50px] left-[25%] w-px bg-black transform transition-transform duration-700
            ${qaMoveleft ? "-translate-x-[600px]" : "-translate-x-1/2"}`}
          >
            <button
              onClick={() => setQaMoveLeft(true)}
              className="px-4 ml-[20px] py-2 bg-blue-600 text-black rounded shadow"
            >
              QA
            </button>
            <div className="absolute mt-[180px]">
              <QaContent />
            </div>
          </div>
          <div
            className={` support h-[400px] absolute top-[900px] bottom-[50px] left-[25%] w-px bg-black transform transition-transform duration-700
            ${supportMoveLeft ? "-translate-x-[600px]" : "-translate-x-1/2"}`}
          >
            <button
              onClick={() => setSupportMoveLeft(true)}
              className="px-4 py-2 ml-[20px] bg-blue-600 text-black rounded shadow"
            >
              Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
