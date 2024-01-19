import React from 'react';
import Button from './Button';
import AMD from "../assets/AMD.png"
import TmuFeas from "../assets/TmuFeas.png"
import RuHacks from "../assets/RuHacks.png"
import Certificate from "../files/AMD_Recognition.pdf"
import Reference from "../files/AMD_Reference_Letter.pdf"
import Presentation from "../files/URO_Presentation.pdf"

const Experience = () => {
  return (
    <section id="Experience" className='lg:mt-36 mt-12'>
      <div className='experience__section z-40 rounded-lg flex flex-col lg:gap-6 gap-2 justify-center items-center w-full'>
        <div className='text-title font-bold text-gradient-yellow lg:mt-12 mt-8'>Experiences</div>
        <div className='w-full flex lg:flex-row flex-col items-center justify-center'>
          <div className='lg:w-[65%] p-8 flex flex-col'>
          <div className='text-header font-bold'>Advanced Micro Devices (AMD)</div>
            <div className='text-title font-bold'>Software Developer & Program Management Intern 🖥️</div>
            <div className='text-subHeader'>May 2022 - August 2023 (16 Months)</div>
            <div className='text-subHeader mt-2'>
              During my time as apart of the Software Engineering Program Management Department within the User Expereince Group, I had pioneered and lead the develomenet of several projects to generate better data driven decision making within the company, while also assisted with program managing the delivery of <span className='underline text-blue-200'><a href='https://gpuopen.com/introducing-adlx/'>AMD's public C/C++ SDK ADLX</a></span>. During this time, I had the opportunity to create various full stack data dashboards and company websites, that I personally presented to Vice Presidents and 100+ Managers & Engineers at the company.  
            </div>
            <div className='text-norm mt-2'>
              <span className='font-bold'>Skills:</span> Python, JavaScript, C/C++, React, Tailwind, Django, Plotly, Pandas, NumPy, PostgreSQL, AWS, Linux, Bash, Confluence, Sharepoint, Leadership & Program Mangement  
            </div>
            <div className='mt-6 flex sm:flex-row flex-col gap-4'>
              <Button Title={"Reference Letter"} PdfPath={Reference}/>
              <Button Title={"Certificate"} PdfPath={Certificate}/>
            </div>
          </div>
          <div className='lg:w-[40%] w-[80%]'>
            <div className='flex item-center justify-center'>
              <img src={AMD} className='w-[60%] rounded-2xl'/>
            </div>
          </div>
        </div>

        <div className='w-full flex lg:flex-row flex-col items-center justify-center'>
          <div className='lg:w-[40%] w-[80%] lg:order-1 order-2'>
            <div className='flex item-center justify-center'>
              <img src={TmuFeas} className='w-[60%] rounded-2xl'/>
            </div>
          </div>
          <div className='lg:w-[65%] p-8 flex flex-col lg:order-2 order-1'>
          <div className='text-header font-bold'>TMU Faculty of Electrial Engineering</div>
            <div className='text-title font-bold'>Hardware Research Assistant 📡</div>
            <div className='text-subHeader'>May 2021 - August 2021 (4 Months)</div>
            <div className='text-subHeader'>
              Having won Toronto Metropolitan University's competitive University Opportunity Award as a result of personal Academic Achievements, I was provided a grant of $10,500 to be selected to work on the research project - Compact Metamaterial Antenna Array for Wirelessly Powering Implanted Biomedical Devices, under the supervision of a <span className='underline text-blue-200'><a href='https://www.torontomu.ca/electrical-computer-biomedical/people/faculty/marco-a-antoniades/'>Dr. Marco Antoniades</a></span>. Presenting the final product at the Office of the Vice-President, Research and Innovation research showcase.
            </div>
            <div className='text-norm mt-2'>
              <span className='font-bold'>Skill:</span> MATLAB (Scripting & RF Antenna Toolbox), HFSS, ADS & Technical Documentation
            </div>
            <div className='mt-6 flex sm:flex-row flex-col gap-4'>
              <Button Title={"Presentation"} PdfPath={Presentation}/>
              <Button Title={"Award Information"} LinkPath={"https://www.torontomu.ca/research/news-events/2021/11/students-showcase-their-undergraduate-research-opportunities-projects/"}/>
            </div>
          </div>
        </div>

        <div className='w-full flex lg:flex-row flex-col items-center justify-center'>
          <div className='lg:w-[65%] p-8 flex flex-col'>
            <div className='text-header font-bold'>TMU's Official Major League Hackathon</div>
            <div className='text-title font-bold'>Co-Chair & Vice President of Development 👑</div>
            <div className='text-subHeader'>September 2020 - Present (3+ Years)</div>
            <div className='text-subHeader'>
              I personally lead a team of 20+ students to plan and execute the delivery of the University's 800+ person Major Laague Hackathon, overseeing all logistical, financial, corporate and development relations within the organizations to host the $30,000+ event. In addition, I was the lead in developing all full stack web infrastructure related to the event, including the landing page, admin port and hacker portal, that was used by more than 2000+ people for the event.
            </div>
            <div className='text-norm mt-2'>
              <span className='font-bold'>Skills:</span> React, Tailwind, Firebase, Digital Ocean, Google Drive, Leadership & Product/Program Mangement  
            </div>
            <div className='mt-6 flex sm:flex-row flex-col gap-4'>
              <Button Title={"Devpost 2021"} LinkPath={"https://ru-hacks-2021.devpost.com/"}/>
              <Button Title={"Devpost 2022"} LinkPath={"https://ru-hacks-2022-digital-15171.devpost.com/"}/>
            </div>
          </div>
          <div className='lg:w-[40%] w-[80%]'>
            <div className='flex item-center justify-center'>
              <img src={RuHacks} className='w-[60%] bg-primary-600 rounded-2xl p-6'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience