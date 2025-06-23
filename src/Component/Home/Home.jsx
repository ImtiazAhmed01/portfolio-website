import React from 'react';
import Banner from './Banner';
import About from './About';
import Skills from './skills';

const Home = () => {
    return (
        <div className='bg-[#FAF6F0]'>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
        </div>
    );
};

export default Home;