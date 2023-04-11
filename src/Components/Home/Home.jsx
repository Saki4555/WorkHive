import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import JobCategory from '../JobCategory/JobCategory';

const Home = () => {
    return (
        <div className=''>
            <HomeBanner></HomeBanner>
            <JobCategory></JobCategory>
        </div>
    );
};

export default Home;