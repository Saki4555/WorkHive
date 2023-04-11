import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const Home = () => {
    return (
        <div className=''>
            <HomeBanner></HomeBanner>
            <JobCategory></JobCategory>
            <FeaturedJob></FeaturedJob>
        </div>
    );
};

export default Home;