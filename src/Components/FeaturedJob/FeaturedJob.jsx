import React, { useEffect, useState } from 'react';
import SingleFeaturedJob from '../SingleFeaturedJob/SingleFeaturedJob';

const FeaturedJob = () => {

    const [featuredJobs, setFeaturedJob] = useState([]);

    useEffect(() => {
        fetch('featured.json')
            .then(res => res.json())
            .then(data => setFeaturedJob(data));
    }, [])
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-5xl font-bold mb-4'>Featured Jobs</h1>
                <p className='text-[#757575] font-medium'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-container p-1 lg:p-0'>
                {
                    featuredJobs.map(featuredJob => <SingleFeaturedJob
                        key={featuredJob.id}
                        featuredJob={featuredJob}
                    ></SingleFeaturedJob>)
                }
            </div>
            <button>kk</button>
        </div>
    );
};

export default FeaturedJob;