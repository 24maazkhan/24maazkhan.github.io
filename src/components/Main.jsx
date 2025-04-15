import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-center' src='./bkg-image.jpg'/>
        <div className='w-full h-screen absolute top-0 left-0 bg-white opacity-50'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Hi, I'm Maaz!</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a
            <TypeAnimation
                sequence={[
                    'Developer',
                    1000,
                    'Tech Enthusiast',
                    1000,
                    'CAD Designer',
                    1000,
                    'Aviation Enthusiast',
                    1000
                ]}
                wrapper="div"
                speed={25}
                style={{ fontSize: '1em', paddingLeft: "6px" }}
                repeat={Infinity}
                />
            </h2>
            <p className='flex sm:text-2xl text-xl pt-4 text-gray-800 text-center'>
                Currently studying Systems Design Engineering at the University of Waterloo.
            </p>
            <div className='flex justify-between pt-6 max-w-[80px] w-full'>
                <a href='https://www.linkedin.com/in/maazkhan4' className='cursor-pointer' target='_blank'>
                    <FaLinkedinIn size={25}/>
                </a>
                <a href='https://github.com/24maazkhan' className='cursor-pointer' target='_blank'>
                    <FaGithub size={25}/>
                </a>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Main