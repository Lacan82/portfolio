import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8' >
          <div className='sm:text-left pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#64fcda]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-left text-3xl font-bold'>
              <p>Hi. I'm Daniel, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about building robust systems. I specialize in network engineering and
                able to troubleshoot complex systems. I'm self-motivated and self taught. I'm passionate about all
                aspects of technology, and enjoy AWS deepracer in my free time. I'm first place winner of the AWS
                deepracer DC Summit in 2022. Plan, design and deploy complex network infrastructure for fast paced
                business environments while building trust and team work among departments.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
