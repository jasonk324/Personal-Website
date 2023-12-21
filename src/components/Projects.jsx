import React from 'react'
import PathMaker from "../assets/PathMaker.png"
import ToyStory from "../assets/ToyStory.png"
import MediaCenter from "../assets/MediaCenter.png"
import Capstone from "../assets/Capstone.png"
import MetHacksPortal from "../assets/MetHacksPortal.png"
import HearMe from "../assets/HearMe.png"
import PersonalWebsite from "../assets/PersonalWebsite.png"
import TcpNetworks from "../assets/TcpNetworks.png"
import Pokedex from "../assets/Pokedex.png"

const Project = ({Img}) => {
  return ( 
		<div className='z-30 group relative overflow-hidden border-2 border-white/50 rounded-xl'>
			<div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
			<img src={Img} className='group-hover:scale-125 transition-all duration-500'/>
			<div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
				<span className='text-header font-bold'>React & Django</span>
			</div>
			<div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
				<span className='text-bigHeader font-bold'>Path Maker</span>
			</div>
		</div>
  )
}

const Projects = () => {
  return (
    <section id="Projects" className='mt-24'>

			<div className="absolute z-10 left-1/2 top-[50] w-[50%] h-[50%] rounded-full blue__gradient" />
      <div className="absolute z-10 right-1/2 top-[100] w-[50%] h-[50%] rounded-full white__gradient" />

      <div className='flex flex-col gap-6 justify-center items-center w-full'>
				<div className='flex flex-col items-center justify-center gap-4'>
        	<div className='text-title font-bold text-gradient-yellow'>Projects</div>
					<div className='text-header font-bold'>Click on each Project for More Information 😉</div>
				</div>

				<div className="flex flex-wrap">
					<div className="w-full md:w-1/2 lg:w-1/3 p-4">
						<Project Img={PathMaker}/>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 p-4">
						<Project Img={ToyStory}/>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 p-4">
						<Project Img={MediaCenter}/>
					</div>

					<div className="w-full md:w-1/2 lg:w-1/3 p-4">
						<Project Img={Capstone}/>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 p-4">
						<Project Img={MetHacksPortal}/>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 p-4">
						<Project Img={HearMe}/>
					</div>

					<div className="w-full md:w-1/2 lg:w-1/3 p-4">
						<Project Img={PersonalWebsite}/>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 p-4">
						<Project Img={TcpNetworks}/>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 p-4">
						<Project Img={Pokedex}/>
					</div>
				</div>

			</div>
    </section>
  )
}

export default Projects