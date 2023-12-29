import React from 'react'
import TMU from "../assets/TMU.png"

const Education = () => {
  return (
    <section id="Education" className='mt-32'>
      <div className="absolute w-[40%] lg:w-[20%] lg:h-[30%] h-[80%] left-[10%] lg:top-[95%] top-140 white__gradient" />

      <div className='w-full flex lg:flex-row flex-col'>

        <div className='lg:w-[50%] lg:order-1 order-2'>
          <div className='p-8 flex item-center justify-center'>
            <img src={TMU} className='lg:w-[80%] w-[90%] sm:w-[50%] z-20'/>
          </div>
        </div>

        <div className='lg:w-[50%] p-8 flex flex-col z-20 lg:order-2 order-1'>
          <div className='text-title font-bold text-gradient-yellow lg:text-start text-center'>Education</div>
          <div className='text-title font-bold lg:text-start text-center'>Electrial Engineering Co-op (B.Eng)⚡🖥️</div>
          <div className='text-subHeader lg:text-start text-center'>
            September 2019 - May 2024 (5 Years) | CGPA: 3.73/4.33
          </div>
          <div className='text-subHeader lg:text-start text-center mt-2'>
            I was born and raise in Toronto all my life and attended a school in the heart of it all - Toronto Metropolitan University for Electrial Engineering. During my 5 years, I completed a 16 months co-op at AMD working as a Software Developer for the GPU and Engineering Program Management Department. In addition, I worked for 4 months as a Hardware Research Assistant after recieve my school's Undergraduate Research Opprotunity (URO) Award. 
          </div>
        </div>

      </div>
    </section>
  )
}

export default Education