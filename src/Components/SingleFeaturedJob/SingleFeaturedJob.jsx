import React from 'react';
import { Link } from 'react-router-dom';

const SingleFeaturedJob = ({ featuredJob }) => {

    const { company_logo, id, company_name, contact_information, job_title, remote_or_onsite, fulltime_or_parttime, location, salary } = featuredJob;


    return (
        <div>
            <div className='py-9 pl-9 bg-slate-50 rounded-lg shadow-md'>
                <div>
                    <img className='object-cover w-32 h-10' src={company_logo} alt="" />
                </div>
                <h3 className='text-2xl font-bold text-[#474747] mb-2 mt-5'>{job_title}</h3>
                <p className='text-[#757575] mb-2'>{company_name}</p>
                <div className='flex gap-2 mb-2'>
                    <div className='p-2 border border-[#7E90FE] rounded'>
                        <p className='text-[#7E90FE]'>{remote_or_onsite}</p>
                    </div>
                    <div className='p-2 border border-[#7E90FE] rounded'>
                        <p className='text-[#7E90FE]'>{fulltime_or_parttime}</p>
                    </div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div>
                        <p className='text-[#757575]'>{location}</p>
                    </div>
                    <div>
                        <p className='text-[#757575]'>Salaray: {salary}</p>
                    </div>
                </div>

                <Link to={`/job/${id}`}><button className='btn-bg text-white px-3 py-2 rounded font-medium btn-animation'>View Details</button></Link>
                
            </div>
        </div>
    );
};

export default SingleFeaturedJob;