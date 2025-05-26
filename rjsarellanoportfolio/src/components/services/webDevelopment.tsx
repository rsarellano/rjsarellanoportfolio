import React, { useState, useEffect } from "react";

const cards = [
  "Information Gathering",
  "Planning",
  "Design",
  "Development",
  "Testing",
  "Maintenance and Update",
];

type WebDevProps = {
  triggerVisibleSubCards: boolean;
  triggerVisibleCards: boolean;
  triggerVisibleDiagonalLine: boolean;
};

const webDevelopment = ({
  triggerVisibleSubCards,
  triggerVisibleCards,
  triggerVisibleDiagonalLine,
}: WebDevProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVissibleMainCard, setIsVisibleMainCard] = useState(false);
  const [isVisibleDiagonalLine, isSetVisibleDiagonalLine] = useState(false);
  const [visibleCardCount, setIsVisibleCardCount] = useState(0);

  useEffect(() => {
    if (triggerVisibleSubCards) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [triggerVisibleSubCards]);

  useEffect(() => {
    if (triggerVisibleCards) {
      const timer = setTimeout(() => {
        setIsVisibleMainCard(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [triggerVisibleCards]);

  useEffect(() => {
    if (triggerVisibleCards) {
      cards.forEach((_, index) => {
        setTimeout(() => {
          setIsVisibleCardCount((prev) => prev + 1);
        }, 500 * index);
      });
    }
  }, [triggerVisibleCards]);

  useEffect(() => {
    if (triggerVisibleDiagonalLine) {
      const timer = setTimeout(() => {
        isSetVisibleDiagonalLine(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [triggerVisibleDiagonalLine]);

  return (
    <div className="flex justify-center gap-8 overflow-hidden">
      <div className=" webDevMainCard bg-red-500 h-[260px]  p-4 w-[200px] rounded">
        <div className="h-[24px]">{isVisible && <h3>Planning Card</h3>}</div>
        {isVisibleDiagonalLine && (
          <div className="diagonalLine w-px h-12 bg-black absolute top-20 left-24 transform rotate-[220deg] origin-top z-0"></div>
        )}

        <div className="webDevelopmentCards h-[65px] w-[150px]  m-2 mt-[63px]  my-5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg overflow-hidden">
          
          {isVissibleMainCard && <h3>Planning </h3>}
        </div>
      </div>

      <div className="webDevMainCard bg-red-500 p-4 w-[200px] rounded">
        <div className="webDevelopmentCards h-[65px] w-[150px]  m-2 mt-[85px]  my-5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg overflow-hidden">
        {isVisibleDiagonalLine && (
          <div className="diagonalLine w-px h-12 bg-black absolute top-20 left-24 transform rotate-[220deg] origin-top z-0"></div>
        )}
          <div>{isVissibleMainCard && <h3>Information Gathering</h3>}</div>
        </div>

        <div>
          {isVisible && <h3>Information Gathering Card</h3>}
        </div>
      </div>

      <div className="webDevMainCard  bg-red-500 p-4 w-[200px] rounded ">
        <div>Design Card</div>
        <div className="webDevelopmentCards h-[65px] w-[150px] m-2 mt-[63px] my-5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg overflow-hidden">
          <h3>Design</h3>
        </div>
      </div>

      <div className="webDevMainCard  bg-red-500 p-4 w-[200px] rounded " >
        <div className="webDevelopmentCards h-[65px] w-[150px] m-2 mt-[85px] my-5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg overflow-hidden">
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
