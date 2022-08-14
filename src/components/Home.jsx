import React, {useState} from 'react'
import {HiArrowNarrowRight} from "react-icons/hi";
import { Link } from 'react-scroll';

const Home = () => {
    var ReactRotatingText = require('react-rotating-text');

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-gray-400'> Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Daniel Morgan</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'><ReactRotatingText items={['I\'m a sysadmin',
                    'I\'m a Full stack Developer', 'I\'m a DevOps Engineer', 'I\'m a Systems Engineer',
                    'I\'m a Network Engineer', 'Next goal Cloud Engineer' ]} />
                </h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>I've worn many hats in my career, system administrator, Full Stack Developer, DevOps,
                    Systems Engineer, and Network Engineer. I'm passionate about technology and learning.
                    I'm looking for my next challenge focused on building robust infrastructure in the cloud</p>
                <div>
                    <Link onClick={handleClick} to='experience'>
                        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-gray-400 hover:border-gray-400'>
                            View Experience
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3 ' />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Home