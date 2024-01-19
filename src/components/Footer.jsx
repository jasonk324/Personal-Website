import React from 'react'
import Github from "../assets/Github.png"
import Linkedin from "../assets/Linkedin.png"
import Mail from "../assets/Mail.png"

const Footer = () => {
  return (
    <>
      <div className="my-12 w-full flex justify-between items-center flex-col gap-4 pt-6 border-t-[1px] border-t-[#afafaf]">

        <div className='flex flex-row justify-center items-end gap-6 z-10'>
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

        <div className="text-norm text-primary-200">
          Jason Khuu ©2024
        </div>

      </div>
    </>
  )
}

export default Footer