import React from 'react';

const HomeBanner = () => {
    return (
        <div>
            <div className='bg-slate-100 -mt-28'>
            <div className='lg:flex my-container gap-3'>
                <div className='w-full lg:w-1/2 mt-16'>
                    <h1 className='text-7xl font-semibold mb-7'>Discover Your <br /> <span className='my-text'>Dream Job</span> Today</h1>

                    <p className='font-medium text-[#757575] text-lg mb-7'>Ready to take the next step in your career? Look no further than our comprehensive job listings! With thousands of opportunities across industries and experience levels, we make it easy to find your dream job. Our user-friendly platform allows you to search by location, job title, and more, so you can quickly find the perfect match. Don't settle for just any job - discover the career you've always wanted today with our help. Start browsing now and take the first step towards a brighter future!</p>

                    <button className='btn-bg banner-btn btn-animation'>Get Started</button>
                </div>
                <div className='w-full lg:w-1/2'>
                    <img src="person.png" alt="" />

                </div>
            </div>
        </div>
        </div>
    );
};

export default HomeBanner;