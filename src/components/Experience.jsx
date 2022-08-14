import React from 'react';
import WorkImg from '../assets/NPR.jpg';
import consulting from '../assets/consulting.jpg';
import datacenter from '../assets/datacenter.jpg';
import development from '../assets/development.jpg';
import MSP from '../assets/MSP.jpg';
import helpdesk from '../assets/helpdesk.jpg';

const Experience = () => {
  return (
    <div name='experience' className='w-full text-gray-300 bg-[#0a192f] py-10'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#64fcda]'>
            Experience
          </p>
          <p className='py-6'>// Check out some of my recent experience! More details in resume</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#087e8b] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                System Engineer
              </span>
              <div className='pt-8 text-center'>
                System Engineer/Network Engineer for Satellite Audio distribution @ NPR
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${consulting})` }}
            className='shadow-lg shadow-[#087e8b] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Consultant
              </span>
              <div className='pt-8 text-center'>
                AWS and datacenter consultant on various projects. Developed web application within AWS infrastructure
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${datacenter})` }}
            className='shadow-lg shadow-[#087e8b] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Datacenter Technician
              </span>
              <div className='pt-8 text-center'>
                Managed Service Provider for datacenter infrastructure. Equipment install in guidance with ticketing queue @ Datapipe
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${development})` }}
            className='shadow-lg shadow-[#087e8b] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                DevOps
              </span>
              <div className='pt-8 text-center'>
                Managed IT Operations, and build out data collection within AWS for IoT Devices. @ Hyperwave
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${MSP})` }}
            className='shadow-lg shadow-[#087e8b] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Network Engineer @ C & J Computing
              </span>
              <div className='pt-8 text-center'>
                Provided Managed service support and network support to small businesses
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${helpdesk})` }}
            className='shadow-lg shadow-[#087e8b] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                SysAdmin
              </span>
              <div className='pt-8 text-center'>
               <p> Manage North America IT service for manufacturing company @ National Optronics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
