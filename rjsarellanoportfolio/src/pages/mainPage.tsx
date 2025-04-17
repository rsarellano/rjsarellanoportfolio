import React from 'react'

import CorporateProjects from '../components/projects/corporate/corporateProjects'
import PersonalProjects from '../components/projects/personal/personalProjects'
import Header from '../components/header/header'
const mainPage = () => {
  return (
    <div>mainPage
        <div><Header/></div>
        <div><div><CorporateProjects/> </div>
        <div><PersonalProjects/></div></div>
    </div>

    
  )
}

export default mainPage