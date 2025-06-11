import React, { useEffect, useState } from "react";

type QaProps = { 
  triggerVisibleSubCardsQa: boolean;
  triggerVisibleCardsQa: boolean;
  triggerVisibleDiagonalLineQa: boolean;
}




const Qa = ({triggerVisibleCardsQa,triggerVisibleSubCardsQa,triggerVisibleDiagonalLineQa}: QaProps ) => {
  


  const[isVisibleMainCard, setIsVisibleMainCard] = useState(false)
  const [visibleCardCount, setIsVisibleCardCount] = useState(0)
  const [visibleSubCardCount, setIsVisibleSubCardCount] = useState(0)
  
  useEffect(() => {
  if(triggerVisibleCardsQa) {
    setTimeout(() => setIsVisibleCardCount((prev) => Math.max(prev,1)), 550 )
    setTimeout(() => setIsVisibleCardCount((prev) => Math.max(prev,2)), 590 )
  }
  },[triggerVisibleCardsQa]
  
  )
  
  useEffect(() => {
    if(triggerVisibleSubCardsQa) {
      setTimeout(() => {setIsVisibleSubCardCount((prev) => Math.max(prev,1) )}, 640)
      setTimeout(() => setIsVisibleSubCardCount((prev) => Math.max(prev,2) ), 740)

    }
  })
  

  
  return (
    <div className="flex justify-center gap-1 overflow-hidden ml-[20px]">
      <div className="QA Cards  bg-gray-500 w-[180px] h-[220px] rounded ">
        <div><h3>Manual Testing sub Card</h3></div>
        <div className="qaMainCards h-[49px] w-[150px] m-2 mt-[63px] my-5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg overflow-hidden">
          <div className=" h-[24px]">{visibleCardCount >= 1 && <h3>Manual QA</h3>}</div>
        </div>
      </div>


      <div className="QA Cards  bg-gray-500 w-[180px] rounded ">
       
        <div className=" h-[49px] w-[150px] m-2 mt-[87px] my-5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg overflow-hidden">
        { visibleCardCount >= 2 &&  <div><h3>QA Automation</h3></div> } 
          
        </div>
        <div>QA Automation sub Card</div>
      </div>
    </div>
  );
};

export default Qa;
