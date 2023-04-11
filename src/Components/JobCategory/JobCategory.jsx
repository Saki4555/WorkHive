import React, { useEffect, useState } from 'react';

const JobCategory = () => {

    const [jobs, setJobs] = useState([]);
    useEffect(()=>{
        fetch('job.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h2>job category</h2>
        </div>
    );
};

export default JobCategory;