import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../Utilites/fakeDb';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliledJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [featuredJobs, setFeaturedJobs] = useState([]);
    useEffect(() => {
        fetch('featured.json')
            .then(res => res.json())
            .then(data => setFeaturedJobs(data))
    }, [])

    useEffect(() => {
        const savedItem = getShoppingCart();

        const applied = [];

        for (const id in savedItem) {
            const added = featuredJobs.find(it => it.id == id);

            if (added) {
                applied.push(added);
            }
        }

        setAppliedJobs(applied);
    }, [featuredJobs])
    return (
        <div>

            <div className='bg-slate-100 pt-40 pb-16 -mt-40'>
                <h2 className='text-5xl font-bold text-center text-slate-600'>Applied Jobs</h2>
            </div>
            <div className='w-3/4 bg-green-500 mx-auto relative'>
                <div className='absolute top-0 right-0'>
                    <select>
                        <option value="Filter By" disabled selected>Filter By</option>
                        <option value="Remote">Remote</option>
                        <option value="Onsite">Onsite</option>
                    </select>
                </div>
            </div>
            <div className='w-3/4 mx-auto pt-5'>
                {
                    appliedJobs.map(job => <AppliedJob
                        key={job.id}
                        job={job}
                    ></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliledJobs;