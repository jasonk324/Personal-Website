import React from 'react'
import TMU from "../assets/TMU.png"

const Education = () => {
  return (
    <section id="Education" className='mt-12'>
      <div className='w-full flex flex-row'>
        <div className='w-[50%]'>
          <div className='p-8 flex item-center justify-center'>
            <img src={TMU} className='w-[80%]'/>
          </div>
        </div>
        <div className='w-[50%] p-8 flex flex-col'>
          <div className='text-title font-bold text-gradient-yellow'>Education</div>
          <div className='text-title font-bold'>Electrial Engineering Co-op (B.Eng)⚡🖥️</div>
          <div className='text-subHeader'>
            I was born and raise in Toronto all my life and attended a school in the heart of it all - Toronto Metropolitan University for Electrial Engineering. During my 5 years, I completed a 16 months co-op at AMD working as a Software Developer for the GPU and Engineering Program Management Department. In addition, I worked for 4 months as a Hardware Research Assistant after recieve my school's Undergraduate Research Opprotunity (URO) Award. 
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education