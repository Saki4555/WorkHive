import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const assignments = [
    { id: 1, name: "A-1", marks: 57 },
    { id: 2, name: "A-2", marks: 60 },
    { id: 3, name: "A-3", marks: 59 },
    { id: 4, name: "A-4", marks: 60 },
    { id: 5, name: "A-5", marks: 58 },
    { id: 6, name: "A-6", marks: 52 },
    { id: 7, name: "A-7", marks: 60 },
    { id: 8, name: "A-8", marks: 60 },
];




const Statistics = () => {
    return (
        <div>
            <div className='bg-slate-100 pt-40 pb-16 -mt-40 flex'>
                <div className='-mb-16'>
                    <img src="/Vector.png" alt="" />
                </div>
                <div className='flex items-center mx-auto'>
                    <h2 className='text-4xl font-bold text-center text-slate-600'>Assignment Marks</h2>
                </div>
                <div className='-mt-24'>
                    <img src="/job-details.png" alt="" />
                </div>
            </div>

            <div className='my-container'>
                <AreaChart width={700} height={400} data={assignments}
                >
                    <CartesianGrid strokeDasharray="12 12" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#AF7AC5 "></Area>
                </AreaChart>
            </div>

        </div>
    );
};

export default Statistics;