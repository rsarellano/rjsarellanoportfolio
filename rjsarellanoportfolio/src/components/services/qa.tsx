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
    setTimeout(() => setIsVisibleCardCount((prev) => Math.max(prev,1)), 520 )
    setTimeout(() => setIsVisibleCardCount((prev) => Math.max(prev,2)), 620 )
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
      <div className="QA Cards  w-[180px] h-[220px] rounded ">
       <div className="h-[24px]"> {visibleSubCardCount >= 1 && <h3>Manual Testing sub Card</h3> }</div> 
        {visibleCardCount >= 1 &&  <div className="qaMainCards h-[49px] w-[150px] m-2 mt-[63px] my-5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg overflow-hidden">
        Manual Testing <div className=" h-[34px]"><h3>Manual QA</h3></div>
        </div>}
      </div>


      <div className="QA Cards  w-[180px] rounded ">
       
      { visibleCardCount >= 2 &&  <div className=" h-[49px] w-[150px] m-2 mt-[87px] my-5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg overflow-hidden">
       <div><h3>QA Automation</h3></div> 
          
        </div>} 
        {visibleSubCardCount >= 2 && <div><h3>QA Automation subcard</h3></div>}
      </div>

      
    </div>
  );
};

export default Qa;
