import React, { useState, useEffect } from 'react';
import Github from "../assets/Github.png"
import Linkedin from "../assets/Linkedin.png"
var ReactRotatingText = require("react-rotating-text");

const About = () => {
  return (
    <>
      <div className="absolute w-[50%] h-[50%] left-[-700px] top-0 pink__gradient" />
      <div className="absolute w-[30%] h-[50%] left-[80px] bottom-20 blue__gradient" />
      <div className="absolute w-[30%] h-[30%] left-[1000px] top-[1200px] white__gradient" />
      <div className="flex flex-col md:flex-row w-full justify-between gap-12">
        <div className='w-[10%] flex flex-col justify-center items-end gap-10 z-10'>
          <a href="https://github.com/jasonk324" target="_blank">
            <img src={Github} className='w-[36px] h-[36px] cursor-pointer'/>
          </a>
          <a href="https://www.linkedin.com/in/jasonkhuuee/" target="_blank">
            <img src={Linkedin} className='w-[36px] h-[36px] cursor-pointer'/>
          </a>
        </div>

        <div className="w-[40%] text-title font-bold flex flex-col items-start justify-center z-10">
          <div>Hello 😁</div>
          <div>My name is Jason Khuu</div>
          <div className="my-2">
            and I am a 
            <ReactRotatingText
              items={[
                " Software Engineer ",
                " Electrial Engineer ",
                " Program Manager "
              ]}
              color="#eeea00"
            />
          </div>

          <div className='text-subHeader font-normal'>
           I am going to be graduating in May 2024 with a degree with Electrical Engineering from Toronto Metropolitan University, am am currently looking for newg graduate roles. I have a proven track record in Software, Hardware and Management 👨‍💻 and am passionate in exploring all new opprotunities in technology. 
          </div>

          <div>
            Learn more about me below
          </div>
          
          <div className='mt-6'>
            <a href="#_" class="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
              <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#6C7BB2] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
              <span class="absolute inset-0 w-full h-full bg-white rounded-md "></span>
              <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#6C7BB2] rounded-md opacity-0 group-hover:opacity-100 "></span>
              <span class="relative text-[#6C7BB2] transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Download Resume</span>
            </a>
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-center mt-10">
          <div className='profile__img'/>
        </div>
        <div className='space__img ml-[-800px]'/>
      </div>
    </>
  )
}

export default About