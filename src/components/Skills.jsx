import React from 'react'
import { SkillsArray } from "./Variables"

const Skill = ({Title, SubIcons}) => {
  return ( 
		<div className="z-50 mt-12 pb-8 box-shadow bg-primary-600 rounded-2xl relative flex flex-col gap-6">
			<div className='mt-[-20px] flex flex-row justify-center items-center'>
				<div className='rounded-full bg-[#384c96] p-2 ml-2 text-header font-bold'>{Title}</div>
			</div>
			<div className="w-full flex flex-wrap justify-center">
				{SubIcons.map((icon, index) => (
          <div
            key={index}
            className={`w-16 h-16 p-1 flex flex-col ${index === 0 ? 'mb-12' : 'mb-0'}`}
          >
						<img src={icon.Image}className="w-full h-auto" />
						<div className='text-center mt-1 text-[14px]'>{icon.Title}</div>
					</div>
				))}
    	</div>
		</div>
  )
}

const Skills = () => {
  return (
    <section id="Skills">
      <div className='lg:mt-32 lg:mb-24 flex flex-col gap-6 justify-center items-center w-full'>
				<div className="w-full flex flex-wrap justify-center items-center">
					{SkillsArray.map((item, index) => (
						<div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-4">
							<Skill Title={item.Title} SubIcons={item.SubIcons}/>
						</div>
					))}
				</div>
			</div>
    </section>
  )
}

export default Skills