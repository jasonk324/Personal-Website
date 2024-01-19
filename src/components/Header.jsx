import React, { useState } from 'react';
import Linkedin from "../assets/Linkedin.png"
import Github from "../assets/Github.png"
import Menu from "../assets/Menu.png"
import Close from "../assets/Close.png"
import Mail from "../assets/Mail.png"
import { NavLinks } from './Variables';

const ItemTop = ({ title, icon, id, index }) => {
  return ( 
    <li
    key={id}
    className={`cursor-pointer text-subHeader font-bold text-white ${index === NavLinks.length - 1 ? 'mr-0' : 'mr-12'}`}
    >
      <a href={`#${id}`} className='flex justify-center items-center'>
        <img src={icon} className="mx-2 w-[20px] h-[20px]"/>
        {title}
      </a>
    </li>
  )
}

const ItemSide = ({ title, icon, id }) => {
  return ( 
    <li 
      key={id}
      className={`w-[90%] p-4 my-2 bg-primary-500 hover:bg-primary-400 transition-colors rounded-[20px] cursor-pointer`}
    >
      <a href={`#${id}`} className='flex justify-center items-center'>
        <img src={icon} className="mr-3 w-[20px] h-[20px]"/>
        <span class="text-subHeader text-white">{title}</span>
      </a>
    </li>
  )
}

const Header = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="fixed w-full z-[100] sm:px-16 px-6 py-4 flex justify-center item-center shadow-xl bg-navTop">
      <ul className="list-none md:flex hidden justify-end items-center flex-1 lg:mr-20">
        {NavLinks.map((nav, index) => (
          <ItemTop title={nav.title} icon={nav.icon} id={nav.id} index={index}/>
        ))}
      </ul>

      <div className="md:hidden flex flex-1 justify-end items-center">
        {!toggle && (
          <div className='rounded-lg hover:bg-[#535374] bg-[#5D5D76] w-[32px] h-[32px] p-2'>
            <img src={Menu} alt="menu" className="w-full h-full object-contain cursor-pointer" onClick={() => setToggle(!toggle)} />
          </div>
        )}

        {toggle && (
          <div className='rounded-lg hover:bg-[#535374] bg-[#5D5D76] w-[32px] h-[32px] p-2 z-10'>
            <img src={Close} className="`w-full h-full cursor-pointer" onClick={() => setToggle(!toggle)} />
          </div>
        )}
        <div className={`bg-navSide text-white h-screen w-[60%] fixed top-0 right-0 z-[5] transform ${toggle ? "translate-x-0" : "translate-x-full"} transition-all duration-300 ease-in-out flex flex-col`} style={{ transformOrigin: "top right" }}>
          <div className='upperSideBar flex-1'>
            <div className="py-10">
              <ul className="list-none flex flex-col justify-end items-center flex-1 mt-10">
                {NavLinks.map((nav, index) => (
                  <ItemSide title={nav.title} id={nav.id} icon={nav.icon}/>
                ))}
              </ul>
            </div>
          </div>
          <div className="mb-16 h-1/6 flex flex-col gap-3 items-center">
            <div className='flex flex-row gap-3'>
              <a href={`mailto:jasonkhuu.01@gmail.com`}>
                <img src={Mail} className='w-[24px] h-[24px] cursor-pointer'/>
              </a>
              <a href="https://github.com/jasonk324" target="_blank">
                <img src={Github} className='w-[24px] h-[24px] cursor-pointer'/>
              </a>
              <a href="https://www.linkedin.com/in/jasonkhuuee/" target="_blank">
                <img src={Linkedin} className='w-[24px] h-[24px] cursor-pointer'/>
              </a>
            </div>
            <div className='font-bold text-primary-200'>Jason Khuu ©2024</div>
          </div>
        </div>
      </div>
    </nav> 
  )
}

export default Header
