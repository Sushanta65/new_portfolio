import React from 'react';
import HeroSection from '../HereSection/HeroSection';
import AboutMe from '../AboutMe.jsx/AboutMe';
import SkillsSection from '../SkillsSection/SkillsSection';
import Education from '../Educations/Education';
import ProjectsSection from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <AboutMe></AboutMe>
            <SkillsSection></SkillsSection>
            <Education></Education>
            <ProjectsSection></ProjectsSection>
        </div>
    );
};

export default Home;