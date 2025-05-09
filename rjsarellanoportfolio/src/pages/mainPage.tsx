import React, { useState, useRef } from "react";
import CorporateProjects from "../components/projects/corporate/corporateProjects";
import PersonalProjects from "../components/projects/personal/personalProjects";
import Header from "../components/header/header";
import Services from "../components/services/services";
import AboutMe from "../components/aboutMe/aboutMe";

const MainPage = () => {
  const [showCorporateProjects, setShowCorporateProjects] = useState(false);
  const [showPersonalProjects, setShowPersonalProjects] = useState(false);

  const toggleCorporateProjects = () => {
    setShowCorporateProjects(!showCorporateProjects);
    setShowPersonalProjects(false);
  };

  const togglePersonalProjects = () => {
    setShowPersonalProjects(!showPersonalProjects);
    setShowCorporateProjects(false);
  };

  const aboutMe = useRef(null);
  const services = useRef(null);
  const projects = useRef(null);

  const scrollToSection = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-[1400px]">
      <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[1000px] bg-gray-800 my-2 text-black py-4 z-50 flex justify-center space-x-6">
        <button
          onClick={() => scrollToSection(aboutMe)}
          className="hover:underline"
        >
          About Me
        </button>

        <button
          onClick={() => scrollToSection(services)}
          className="hover:underline"
        >
          Services
        </button>

        <button
          onClick={() => scrollToSection(projects)}
          className="hover:underline"
        >
          Projects
        </button>
      </nav>
      <div>
        <Header />
      </div>
      <section ref={aboutMe}>
        <AboutMe />
      </section>
      <section ref={services}>
        <Services />
      </section>

      <section ref={projects}>
        <div className="container bg-sky-600 mb-2 position: relative">
          <div className="h-[900px] ">
            <button
              className="m-5 w-[120px] h-[80px]"
              onClick={toggleCorporateProjects}
            >
              {showCorporateProjects}
              Corporate Projects
            </button>
            <button
              className="m-5 w-[120px] h-[80px]"
              onClick={togglePersonalProjects}
            >
              Personal Projects
            </button>

            {showPersonalProjects && <PersonalProjects />}
            {showCorporateProjects && <CorporateProjects />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
