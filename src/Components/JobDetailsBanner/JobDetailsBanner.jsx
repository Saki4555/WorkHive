import React from 'react';

const JobDetailsBanner = () => {
    return (
        <div className='bg-slate-100 pt-40 pb-16 -mt-40 flex'>
            <div className='-mb-16'>
                <img src="/Vector.png" alt="" />
            </div>
            <div className='flex items-center mx-auto'>
                <h2 className='text-4xl font-bold text-center text-slate-600'>Job Details</h2>
            </div>
            <div className='-mt-24'>
                <img src="/job-details.png" alt="" />
            </div>
        </div>
    );
};

export default JobDetailsBanner;