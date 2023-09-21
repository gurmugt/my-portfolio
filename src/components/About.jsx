import React from 'react';
const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-blue-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-1 gap-7 px-4'>
            <div className='text-3xl font-bold'>
              <p>Hi. I'm Gurmu Gessese, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I'm a Computer Engineering student, Website 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫, 𝐔𝐗 & 𝐔𝐈 𝐃𝐞𝐬𝐢𝐠𝐧𝐞𝐫.
                With a strong foundation in both development and design, I bring a unique perspective to creating
                seamless user experiences. My expertise lies in developing robust and scalable web applications, 
                utilizing a range of technologies such as<strong> HTML, CSS, Javascript, React Js, Node JS. </strong>
                I am eager to leverage my skills and contribute to dynamic projects that push the boundaries of 
                technology and design. let's connect and explore opportunities to collaborate!</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;