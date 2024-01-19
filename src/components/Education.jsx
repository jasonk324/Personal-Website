import React from 'react'
import TMU from "../assets/TMU.png"

const Education = () => {
  return (
    <section id="Education" className='mt-32'>
      <div className="absolute w-[40%] lg:w-[20%] lg:h-[30%] h-[80%] left-[10%] lg:top-[95%] top-140 white__gradient" />

      <div className='w-full h-full flex lg:flex-row flex-col items-center'>

        <div className='lg:w-[50%] lg:order-1 order-2'>
          <div className='p-8 flex item-center justify-center'>
            <img src={TMU} className='lg:w-[80%] w-[90%] sm:w-[50%] z-20'/>
          </div>
        </div>

        <div className='lg:w-[50%] p-8 flex flex-col z-20 lg:order-2 order-1'>
          <div className='text-title font-bold text-gradient-yellow lg:text-start text-center'>Education</div>
          <div className='text-title font-bold lg:text-start text-center'>B.Eng - Electrial Engineering (Co-op)⚡🖥️</div>
          <div className='text-subHeader lg:text-start text-center'>
            September 2019 - May 2024 (5 Years) | CGPA: 3.73/4.33
          </div>
          <div className='text-norm lg:text-start text-center mt-2'>
            <span className='font-bold'>Undergraduate Research Opportunity Award (2021):</span> Granted $10,500 as a result of academic achievements by the vice-president, research & innovation office to conduct research under a faculty supervior.  
          </div>
          <div className='text-norm lg:text-start text-center mt-2'>
            <span className='font-bold'>Relevant courses:</span> Optical Communication Systems, Electric Networks, Eletronic Circuits, Energy Conversion, Microwave Engineering, Computer Networks, Embedded Systems, Data Structures and Algorithms, Object Oriented Programming, Digital Signal Processing, Intelligent Systems, Discrete Math, Probability
          </div>
        </div>

      </div>
    </section>
  )
}

export default Education