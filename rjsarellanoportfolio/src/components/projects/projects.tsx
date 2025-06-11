import React, { useState } from 'react'


const [showCorporateProjects, setShowCorporateProjects] = useState(false);
const [showPersonalProjects, setShowPersonalProjects] = useState(false);

const toggleCorporateProjects = () => {
    setShowCorporateProjects(!showCorporateProjects)
    setShowPersonalProjects(false)
}

const togglePersonalProjects = () => {
    setShowPersonalProjects(!showPersonalProjects)
    setShowCorporateProjects(false)
}

const projects = () => {
  return (
    <div className='container bg-sky-600 mb-2 position: relative'>
<div className='h-[900px]'>

    <button className='m-5 w-[120px] h-[80px]'
    onClick={toggleCorporateProjects}>
        {showCorporateProjects}
        Corporate Projects
    </button>
</div>



    </div>
  )
}

export default projects