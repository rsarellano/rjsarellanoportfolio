import React from "react";

const Qa = () => {
  return (
    <div className="flex justify-center gap-1 overflow-hidden ml-[20px]">
      <div className="webDevMainCard  bg-gray-500 w-[180px] rounded ">
        <div>Design Card</div>
        <div className="webDevelopmentCards h-[49px] w-[150px] m-2 mt-[63px] my-5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg overflow-hidden">
          <div><h3>Manual QA</h3>  </div>
        </div>
      </div>


      <div className="webDevMainCard  bg-gray-500 w-[180px] rounded ">
        <div>Design Card</div>
        <div className="webDevelopmentCards h-[49px] w-[150px] m-2 mt-[63px] my-5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg overflow-hidden">
          <div><h3>QA Automation</h3>  </div>
        </div>
      </div>
    </div>
  );
};

export default Qa;
