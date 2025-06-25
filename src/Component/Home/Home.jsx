import React from 'react';
import Banner from './Banner';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Achievements from './Achievements';
import Contact from './Contact';

const Home = () => {
    return (
        <div className='bg-[#FAF6F0]'>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Achievements></Achievements>
            <Contact></Contact>
        </div>
    );
};

export default Home;