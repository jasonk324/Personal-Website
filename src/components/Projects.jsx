import React, { useState } from 'react'
import { ProjectArray } from "./Variables"
import COE718 from './Projects/COE718'
import COE768 from './Projects/COE768'
import Default from './Projects/Default'

const Project = ({Title, Lang, Tech, Link, Type, Img}) => {
  if (Type === 1) {
    return ( 
      <Default Title={Title} Lang={Lang} Tech={Tech} Link={Link} Img={Img}/>
    )
  } else if (Type === 2) {
    return (
      <COE768 Title={Title} Lang={Lang} Tech={Tech} Link={Link} Img={Img}/>
    ) 
  } else if (Type === 3) {
    return (
      <COE718 Title={Title} Lang={Lang} Tech={Tech} Link={Link} Img={Img}/>
    )
  }
}

const Projects = () => {

  return (
    <section id="Projects" className=' lg:my-24 my-8'>

			<div className="absolute z-10 left-1/2 lg:top-[50] top-[200] lg:w-[50%] w-[50%] lg:h-[50%] h-[100%] rounded-full blue__gradient" />
    	<div className="absolute z-10 right-1/2 top-[100] lg:w-[30%] w-[50%] lg:h-[30%] h-[80%] rounded-full white__gradient" />

      <div className='flex flex-col gap-6 justify-center items-center w-full'>
				<div className='flex flex-col items-center justify-center gap-4'>
        	<div className='text-title font-bold text-gradient-yellow'>Projects</div>
					<div className='text-header font-bold text-center'>Hover over each Project for More Information 😉</div>
				</div>

				<div className="w-full flex flex-wrap justify-center items-center">
					{ProjectArray.map((item, index) => (
						<div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-4">
							<Project Title={item.Title} Lang={item.Lang} Tech={item.Tech} Link={item.Link} Type={item.Type} Img={item.Image}/>
						</div>
					))}
				</div>
			</div>

			<div className="absolute w-[50%] h-[20%] pink__gradient" />

    </section>
  )
}

export default Projects