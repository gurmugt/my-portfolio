import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-blue-600'>Hi, My name is</p>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>Gurmu Gessese</h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>I am a Full-Stack Developer.</h2>
        <p className='text-[#c3cee3] py-4 max-w-[700px]'>I am a full-stack developer specializing in building
          (and occasionally designing) exceptional digital experiences. Currently,
          I am focused on building responsive full-stack web applications.</p>
        <div>
          <button className='text-white group border-2 px-6 py-2 flex items-center hover:bg-purple-600 hover:border-purple-600'>
            View Works 
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home;
