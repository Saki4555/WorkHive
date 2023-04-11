import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { CurrencyDollarIcon, EnvelopeIcon, IdentificationIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import JobDetailsBanner from '../JobDetailsBanner/JobDetailsBanner';

const JobDetails = () => {

    const featuredJobs = useLoaderData();

    console.log(featuredJobs);

    const { id } = useParams();


    const [job, setJob] = useState([]);
    useEffect(() => {
        const jobData = featuredJobs.find(fj => fj.id == id);
        setJob(jobData);
    }, [])


    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information, location } = job;

    return (
        <div>
            <JobDetailsBanner></JobDetailsBanner>
            <div className='my-container'>
                <div className='flex gap-4'>
                    <div className='w-8/12'>
                        <p className='text-[#757575] mb-4'><span className='text-lg font-semibold text-[#1A1919]'>Job Description:</span>{job_description}</p>

                        <p className='text-[#757575] mb-4'><span className='text-lg font-semibold text-[#1A1919]'>Job Responsibility:</span> {job_responsibility}</p>

                        <h3 className='text-lg font-semibold text-[#1A1919]'>Educational Requirements:</h3>
                        <p className='text-[#757575] mb-4'>{educational_requirements}</p>

                        <h3 className='text-lg font-semibold text-[#1A1919]'>Experiences:</h3>
                        <p className='text-[#757575] mb-4'>{experiences}</p>
                    </div>

                    <div className='w-4/12 bg-violet-50 rounded-lg pl-7 pr-7 pt-7'>
                        <div>
                            <h3 className='text-lg font-semibold mb-5'>Job Details <hr /> </h3>

                            <div className='flex gap-1 mb-3'>
                                <CurrencyDollarIcon className="h-6 w-6 text-violet-400 mr-2" />
                                <p className='text-[#757575]'><span className='font-semibold text-[#1A1919] mr-2'>Salary:</span>{salary}</p>
                            </div>

                            <div className='flex gap-1 mb-8'>
                                <IdentificationIcon className="h-6 w-6 text-violet-400 mr-2" />
                                <p className='text-[#757575]'><span className='font-semibold text-[#1A1919] mr-2'>Job Title:</span>{job_title}</p>
                            </div>

                            <div>
                                <div>
                                    <h3 className='font-semibold mb-4'>Contact Information <hr /></h3>

                                    <div className='flex gap-1 mb-3'>
                                        <PhoneIcon className="h-6 w-6 text-violet-400 mr-2" />
                                        <p className='text-[#757575]'><span className='font-semibold text-[#1A1919] mr-2'>Phone:</span>{contact_information?.phone}</p>
                                    </div>

                                    <div className='flex gap-1 mb-3'>
                                        <EnvelopeIcon className="h-6 w-6 text-violet-400 mr-2" />
                                        <p className='text-[#757575]'><span className='font-semibold text-[#1A1919] mr-2'>Email:</span>{contact_information?.email}</p>
                                    </div>

                                    <div className='flex gap-1 mb-3'>
                                        <MapPinIcon className="h-6 w-6 text-violet-400 mr-2" />
                                        <p className='text-[#757575]'><span className='font-semibold text-[#1A1919] mr-2'>Address:</span>{location}</p>
                                    </div>

                                    <button className='w-full btn-bg btn-animation mt-8 py-4 rounded-lg text-white font-semibold text-lg'>Apply Now</button>

                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default JobDetails;