import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='bg-slate-100 pt-40 pb-16 -mt-40'>
                <h2 className='text-2xl font-bold text-center text-slate-600'>Frequently Asked Questions</h2>
            </div>
            <div className='my-container'>
                <div className='bg-slate-50 px-3 py-5 border shadow rounded-lg mb-3'>
                    <h3 className='text-lg font-semibold mb-2'>When should you use context API?</h3>
                    <p>when some data needs to be accessible by many components at different nesting levels. React Context provides a way to pass data through the components from parent to child components, without passing props manually at each level.</p>
                </div>

                <div className='bg-slate-50 px-3 py-5 border shadow rounded-lg mb-3'>
                    <h3 className='text-lg font-semibold mb-2'>What is a custom hook?</h3>
                    <p>Custom React hooks are reusable functions that a React software developer can use to add special and unique functionality to the React applications.Meaning a mechanism to reuse stateful logic</p>
                </div>

                <div className='bg-slate-50 px-3 py-5 border shadow rounded-lg mb-3'>
                    <h3 className='text-lg font-semibold mb-2'>What is useRef?</h3>
                    <p>useRef is a built-in React hook that accepts one argument as the initial value and returns a reference</p>
                </div>

                <div className='bg-slate-50 px-3 py-5 border shadow rounded-lg mb-3'>
                    <h3 className='text-lg font-semibold mb-2'>What is useMemo?</h3>
                    <p>useMemo is a built-in React hook  that allows to memoize expensive functions to avoid calling them on every render.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;