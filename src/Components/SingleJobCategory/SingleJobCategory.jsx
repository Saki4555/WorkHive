import React from 'react';

const SingleJobCategory = ({ job }) => {
    const { id, jobs, logo, name } = job;
    return (
        <div className='p-2 lg:p-0'>
            <div className='bg-slate-50 pl-9 pt-9 pb-9 pr-24 rounded-lg'>
                <div className='p-3 bg-slate-100 rounded-lg mb-5 w-1/4 lg:w-1/2'>
                    <img src={logo} alt="" />
                </div>
                <h3 className='mb-2 font-semibold text-lg'>{name}</h3>
                <p className='text-base text-[#A3A3A3]'>{jobs}</p>
            </div>
        </div>
    );
};

export default SingleJobCategory;