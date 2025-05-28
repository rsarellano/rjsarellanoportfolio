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
  const [isVisibleMainCard, setIsVisibleMainCard] = useState(false);
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

  // useEffect(() => {
  //   if (triggerVisibleCards) {
  //     cards.forEach((_, index) => {
  //       setTimeout(() => {
  //         setIsVisibleCardCount((prev) => prev + 1);
  //       }, 500 * index);
  //     });
  //   }
  // }, [triggerVisibleCards]);



  useEffect(() => {
    if(triggerVisibleCards) {
      setTimeout(() => setIsVisibleCardCount((prev) => Math.max(prev,1)), 450 )
      setTimeout(() => setIsVisibleCardCount((prev) => Math.max(prev,2)), 490 )
      setTimeout(() => setIsVisibleCardCount((prev) => Math.max(prev,3)), 530 )
      setTimeout(() => setIsVisibleCardCount((prev) => Math.max(prev,4)), 570 )
      setTimeout(() => setIsVisibleCardCount((prev) => Math.max(prev,5)), 610 )
      setTimeout(() => setIsVisibleCardCount((prev) => Math.max(prev,6)), 650 )
      setTimeout(() => setIsVisibleCardCount((prev) => Math.max(prev,7)), 700 )

    }
  }, [triggerVisibleCards])

  useEffect(() => {
    if (triggerVisibleDiagonalLine) {
      const timer = setTimeout(() => {
        isSetVisibleDiagonalLine(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [triggerVisibleDiagonalLine]);

  return (
    <div className="flex justify-center gap-1 overflow-hidden ml-[20px]">

      {/* Planning */}
      <div className=" webDevMainCard bg-gray-500 h-[260px]  w-[180px] rounded">
        <div className="h-[24px]">{visibleCardCount >= 1 && <h3>Planning Card</h3>}</div>
        {isVisibleDiagonalLine && (
          <div className="diagonalLine w-px h-7 bg-black absolute top-20 left-24 transform rotate-[234deg] origin-top z-0"></div>
        )}

        <div className="webDevelopmentCards h-[49px] w-[150px]  m-2 mt-[63px]  my-5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg overflow-hidden">
          
          {visibleCardCount >= 1 &&  <h3>Planning </h3>}
        </div>
      </div>



{/* Information Gathering */}
      <div className="webDevMainCard bg-gray-500 w-[180px] rounded">
        <div className="webDevelopmentCards h-[49px] w-[150px]  m-2 mt-[87px]  my-5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg overflow-hidden">
        {/* {isVisibleDiagonalLine && (
          <div className="diagonalLine w-px h-12 bg-black absolute top-20 left-24 transform rotate-[220deg] origin-top z-0"></div>
        )} */}
          <div>{visibleCardCount >= 2 &&  <h3>Information Gathering</h3>}</div>
        </div>

        <div>
          {isVisible && <h3>Information Gathering Card</h3>}
        </div>
      </div>

{/* Design */}
      <div className="webDevMainCard  bg-gray-500 w-[180px] rounded ">
        <div>Design Card</div>
        <div className="webDevelopmentCards h-[49px] w-[150px] m-2 mt-[63px] my-5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg overflow-hidden">
          <div>{ visibleCardCount >= 3 &&   <h3>Design</h3>  }</div>
        </div>
      </div>

{/* Information Gathering */}
      <div className="webDevMainCard  bg-gray-500 w-[180px] rounded " >
        <div className="webDevelopmentCards h-[49px] w-[150px] m-2 mt-[87px] my-5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg overflow-hidden">
         <div>{visibleCardCount >= 4 && <h3>Development</h3> }</div>
        </div>
        <div>Development Card</div>
      </div>

      <div className="webDevMainCard  bg-gray-500 w-[180px] rounded ">
        <div className="">Testing Card</div>
        <div className="webDevelopmentCards h-[49px] w-[150px] m-2 mt-[63px] my-5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg overflow-hidden">
        <div>{visibleCardCount >= 5 && <h3>Testing</h3>}</div>
        </div>
      </div>

      <div className="webDevMainCard  bg-gray-500 w-[180px] rounded ">
        <div className="webDevelopmentCards h-[49px] w-[150px] m-2 mt-[87px] my-5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg overflow-hidden">
          <div>{visibleCardCount >= 6 && <h3>Deployment</h3>}</div>
        </div>
      </div>

      <div className="webDevMainCard  bg-gray-500 w-[180px] rounded ">
        <div>Maintenance Card</div>
        <div className="webDevelopmentCards h-[49px] w-[150px] m-2 mt-[63px] my-5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg overflow-hidden">
         <div>{visibleCardCount >= 7 && <h3>Maintenance and Updates</h3>}</div>
        </div>
      </div>
    </div>
  );
};

export default webDevelopment;
