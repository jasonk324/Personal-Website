import React from 'react';
import Resume from "../files/Jason_Khuu_Resume.pdf"
import Button from './Button';
import Github from "../assets/Github.png"
import Linkedin from "../assets/Linkedin.png"
import Mail from "../assets/Mail.png"
var ReactRotatingText = require("react-rotating-text");

const About = () => {
  return (
    <>
      <div className="absolute w-[50%] h-[50%] left-[-70%] top-0 pink__gradient" />
      <div className="absolute w-[30%] h-[50%] left-[8%] bottom-20 blue__gradient" />

      <div className="flex lg:flex-row flex-col items-center w-full lg:justify-between lg:gap-12 gap-6">
        <div className='xl:w-[10%] lg:w-[5%] flex lg:flex-col flex-row lg:justify-center justify-start items-center lg:gap-10 gap-4 z-10'>
          <a href={`mailto:jasonkhuu.01@gmail.com`}>
            <img src={Mail} className='w-[36px] h-[36px] cursor-pointer'/>
          </a>
          <a href="https://github.com/jasonk324" target="_blank">
            <img src={Github} className='w-[36px] h-[36px] cursor-pointer'/>
          </a>
          <a href="https://www.linkedin.com/in/jasonkhuuee/" target="_blank">
            <img src={Linkedin} className='w-[36px] h-[36px] cursor-pointer'/>
          </a>
        </div>

        <div className="lg:w-[40%] text-title font-bold flex flex-col lg:items-start items-center justify-center z-10">
          <div>Hello 😁</div>
          <div>My name is Jason Khuu</div>
          <div>
            and I am a 
          </div>
          <ReactRotatingText
              items={[
                "Software Engineer",
                "Electrial Engineer",
                "Program Manager"
              ]}
              color="#eeea00"
              className="mb-2"
            />

          <div className='text-subHeader font-normal lg:text-start text-center'>
            Currently in search of 2024 new graduate roles! In May 2024, I'll be graduating from Toronto Metropolitan University with a degree in Electrical Engineering. I have a proven track record in Software, Hardware and Management 👨‍💻 and am passionate in exploring all new opprotunities in technology. 
          </div>

          <div className='lg:text-start text-center'>
            Learn more about me below
          </div>
          
          <div className='mt-6'>
            <Button Title={"Download Resume"} PdfPath={Resume}/> 
          </div>

        </div>

        <div className="lg:w-[50%] w-full flex items-center justify-center mt-10">
          <div className='profile__img'/>
          <div className='space__img lg:ml-[-300px]'/>
        </div>

      </div>
    </>
  )
}

export default About