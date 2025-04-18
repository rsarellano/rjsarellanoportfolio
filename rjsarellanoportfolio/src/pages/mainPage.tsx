import React, { useState } from 'react';
import CorporateProjects from '../components/projects/corporate/corporateProjects';
import PersonalProjects from '../components/projects/personal/personalProjects';
import Header from '../components/header/header';

const MainPage = () => {

  const [showCorporateProjects, setShowCorporateProjects] = useState(false)
  const [showPersonalProjects, setShowPersonalProjects] = useState(false)

  const toggleCorporateProjects = () => {
    setShowCorporateProjects(!showCorporateProjects);
  };





  return (
    <div>
      <div><Header /></div>

      <div className='container bg-sky-600'>
       
        <button 
          className='m-5 w-[120px] h-[80px]' 
          onClick={toggleCorporateProjects}
        >
          {showCorporateProjects }
          Corporate Projects
        </button>


        {showCorporateProjects && <CorporateProjects />}
      </div>
    </div>
  );
};

export default MainPage;