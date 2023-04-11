import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJob = ({ job }) => {

    const { company_logo, id, company_name, contact_information, job_title, remote_or_onsite, fulltime_or_parttime, location, salary } = job;
    return (
        <div>
           
            <div className="flex items-center border rounded-lg overflow-hidden p-3 mb-4 shadow-sm">
                <div className='bg-slate-100 px-5 py-14 shadow-md rounded-lg'>
                    <img src={company_logo} alt="image" className="object-cover w-32 h-10" />
                </div>
                <div className="px-4 py-2">
                    <h3 className='text-2xl font-bold text-[#474747] mb-2'>{job_title}</h3>
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
                        <div className='flex gap-2 mr-3'>
                            <MapPinIcon className="h-6 w-6 text-violet-200" />
                            <p className='text-[#757575]'>{location}</p>
                        </div>
                        <div className='flex gap-2'>
                            <CurrencyDollarIcon className='h-6 w-6 text-violet-200' />
                            <p className='text-[#757575]'>Salaray: {salary}</p>
                        </div>
                    </div>
                </div>
                <div className="flex-grow"></div>
                <Link to={`/job/${id}`}><button className='btn-bg text-white px-3 py-2 rounded font-medium btn-animation'>View Details</button></Link>
            </div>
        </div>
    );
};

export default AppliedJob;