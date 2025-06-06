import React, { useEffect, useState } from "react";

type QaProps = { 
  triggerVisibleSubCardsQa: boolean;
  triggerVisibleCardsQa: boolean;
  triggerVisibleDiagonalLineQa: boolean;
}




const Qa = ({triggerVisibleCardsQa,triggerVisibleSubCardsQa,triggerVisibleDiagonalLineQa}: QaProps ) => {
  
  const[isVisibleMainCard, setIsVisibleMainCard] = useState(false)
  const [visibleCardCount, setIsVisibleCardCount] = useState(0)
  
  useEffect(() => {
  if(triggerVisibleCardsQa) {
    setTimeout(() => setIsVisibleCardCount((prev) => Math.max(prev,1)), 550 )
    setTimeout(() => setIsVisibleCardCount((prev) => Math.max(prev,1)), 590 )
  }
  },[triggerVisibleCardsQa]
  
  )
  
  
  return (
    <div className="flex justify-center gap-1 overflow-hidden ml-[20px]">
      <div className="webDevMainCard  bg-gray-500 w-[180px] h-[220px] rounded ">
        <div>Design Card</div>
        <div className="webDevelopmentCards h-[49px] w-[150px] m-2 mt-[63px] my-5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg overflow-hidden">
          <div className=" h-[24px]">{visibleCardCount >= 1 && <h3>Manual QA</h3>}</div>
        </div>
      </div>


      <div className="webDevMainCard  bg-gray-500 w-[180px] rounded ">
       
        <div className="webDevelopmentCards h-[49px] w-[150px] m-2 mt-[87px] my-5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg overflow-hidden">
          <div>{ visibleCardCount >= 2 && <h3>QA Automation</h3> } </div>
          
        </div>
        <div>Design Card</div>
      </div>
    </div>
  );
};

export default Qa;
