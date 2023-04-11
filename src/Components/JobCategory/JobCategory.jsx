import React, { useEffect, useState } from 'react';
import SingleJobCategory from '../SingleJobCategory/SingleJobCategory';

const JobCategory = () => {

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('job.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div className='text-center mt-10 lg:mt-24 p-1 lg:p-0'>
                <h1 className='text-5xl font-bold mb-4'>Job Category List</h1>
                <p className='text-[#757575] font-medium'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='my-container lg:flex justify-between'>
                {
                    jobs.map(job => <SingleJobCategory
                        key={job.id}
                        job={job}
                    ></SingleJobCategory>)
                }
            </div>
        </div>
    );
};

export default JobCategory;