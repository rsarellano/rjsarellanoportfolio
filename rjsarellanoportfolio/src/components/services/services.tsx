import React, { useState } from "react";
import WebDevelopment from "./webDevelopment";

const Services = () => {
  const [moveLeft, setMoveLeft] = useState(false);

  return (
    <div className="flex justify-center h-[1600px] bg-sky-200">
      <div className="relative w-full h-[1600px] bg-gray-100">
        <div
          className={`
            absolute top-[100px] bottom-[50px] left-2/6 w-px bg-black
            transform transition-transform duration-700
            ${moveLeft ? "-translate-x-[300px]" : "-translate-x-1/2"}
          `}
        >
          <div className="absolute top-0 left-4 flex flex-col space-y-[150px]">
            <div className="h-[400px]">
              <button
                onClick={() => setMoveLeft(true)}
                className="px-4 py-2 bg-blue-600 text-black rounded shadow"
              >
                Web Development
              </button>
              <div className="absolute mt-[180px]">
                <WebDevelopment />
              </div>
            </div>
            <div>
              <button className="px-4 py-2 bg-blue-600 text-black rounded shadow">
                QA Automation
              </button>
            </div>
            <div>
              <button className="px-4 py-2 bg-blue-600 text-black rounded shadow">
                Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
