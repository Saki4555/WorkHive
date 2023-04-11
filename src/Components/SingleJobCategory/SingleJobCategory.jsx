import React from 'react';

const SingleJobCategory = ({job}) => {
    console.log(job);
    return (
        <div>
            <div>
                <img src={job.logo} alt="" />
            </div>
        </div>
    );
};

export default SingleJobCategory;