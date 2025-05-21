import React from "react";

const cards = [
  "Information Gathering",
  "Planning",
  "Design",
  "Development",
  "Testing",
  "Maintenance and Update",
];

const webDevelopment = () => {
  return (
    <div className="flex justify-center gap-8 overflow-hidden">
      <div className=" webDevMainCard bg-red-500  p-4 w-[200px] rounded">
        <div>
          <h3>Planning Card</h3>
        </div>
        <div className="webDevelopmentCards h-[65px] w-[150px]  m-2  my-5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg overflow-hidden">
          <h3 className="">Planning</h3>
        </div>
      </div>

      <div className="webDevMainCard bg-red-500 p-4 w-[200px] rounded">
        <div className="webDevelopmentCards h-[65px] w-[150px]  m-2 my-5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg overflow-hidden">
          <h3>Information Gathering</h3>
        </div>

        <div>
          <h3>Information Gathering Card</h3>
        </div>
      </div>

      <div>
        <div>Design Card</div>
        <div className="webDevelopmentCards h-[65px] w-[150px] m-2 my-5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg overflow-hidden">
          <h3>Design</h3>
        </div>
      </div>

      <div>
        <div className="webDevelopmentCards h-[65px] w-[150px] m-2 my-5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg overflow-hidden">
          <h3>Development</h3>
        </div>
        <div>Development Card</div>
      </div>

      <div>
        <div>Testing Card</div>
        <div className="webDevelopmentCards h-[65px] w-[150px] m-2 my-5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg overflow-hidden">
          <h3>Testing</h3>
        </div>
      </div>

      <div>
        <div className="webDevelopmentCards h-[65px] w-[150px] m-2 my-5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg overflow-hidden">
          <h3>Deployment</h3>
        </div>
      </div>

      <div>
        <div>Maintenance Card</div>
        <div className="webDevelopmentCards h-[65px] w-[150px] m-2 my-5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg overflow-hidden">
          <h3>Maintenance and Updates</h3>
        </div>
      </div>
    </div>
  );
};

export default webDevelopment;
