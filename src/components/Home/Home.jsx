import React from 'react';
import HeroSection from '../HereSection/HeroSection';
import AboutMe from '../AboutMe.jsx/AboutMe';
import SkillsSection from '../SkillsSection/SkillsSection';
import Education from '../Educations/Education';
import ProjectsSection from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div id="home">
            <HeroSection></HeroSection>
            <AboutMe></AboutMe>
            <SkillsSection></SkillsSection>
            <Education></Education>
            <ProjectsSection></ProjectsSection>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;