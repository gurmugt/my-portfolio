import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import {Link } from 'react-scroll';
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-blue-600'>Hi, My name is</p>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>Gurmu Gessese</h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>I am a Front-End Developer.</h2>
        <p className='text-[#c3cee3] py-4 max-w-[700px]'>I am a front-end developer specializing in building
          (and occasionally designing) exceptional digital experiences. Currently,
          I am focused on building responsive front-end websites.</p>
        <div>
          <Link to='projects' smooth duration={500}  className='text-white w-fit group border-2 px-6 py-3 my-2
           flex items-center rounded-md hover:bg-purple-600 hover:border-purple-600'>
            View Works 
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-1'/>
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;
