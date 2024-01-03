import React, { useState } from "react";
import { MediaCenterLCD } from "../Variables.jsx"
import Close from "../../assets/Close.png"
import Joystick from "../../assets/MediaCenter/Joystick.png"

const Popup = ({isOpen, onClose}) => {
	return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed inset-0 bg-gray-900 bg-opacity-90 z-[110] flex items-center justify-center`}
    >
      <div className="bg-primary-800 rounded-3xl shadow-lg h-[90%] w-[90%] p-4">
        
				<div className="flex items-center justify-center my-4">
          <button type="button" class="hover:bg-[#535374] bg-[#5D5D76] rounded-full p-3" onClick={onClose}>
            <img src={Close} className="w-[15px] h-[15px]"/>
          </button>
        </div>

				<div className="w-full h-[90%] overflow-auto">

					<div className='flex flex-col gap-4 w-[80%] lg:mx-16 mx-6 lg:my-8 my-4'>
						<div className="text-title font-extrabold mt-3 ss:p-0 pt-5">
							Peer to Peer Computer Network Application</div>
						<div className='text-norm text-gradient-yellow'>As an academic project for COE768 - Computer Network my Code is avalible only upon Request</div>


						<div>
							Updates in Progress...
						</div>

					</div>
      	</div>
      </div>
    </div>
	)
}

const COE768 = ({Title, Lang, Tech, Img}) => {
	const [popup, setPopup] = useState(false)

	const handleClosePopup = () => {
    setPopup(false)
  }

  return (
		<>
			<div onClick={() => {setPopup(true)}} className='z-30 group relative overflow-hidden box-shadow rounded-xl hover:cursor-pointer'>
				<div className='group-hover:bg-black/70 bg-primary-600/50 w-full h-full absolute z-40 transition-all duration-300'></div>
				<img src={Img} className='group-hover:scale-125 transition-all duration-500'/>
				<div className='absolute -bottom-full left-12 group-hover:bottom-40 transition-all duration-500 z-50'>
					<span className='text-bigHeader font-bold'>{Title}</span>
				</div>
				<div className='absolute -bottom-full left-12 group-hover:bottom-[7.7rem] transition-all duration-700 z-50'>
					<span className='text-subHeader font-bold'>{Lang}</span>
				</div>
				<div className='absolute -bottom-full left-12 group-hover:bottom-[5.2rem] transition-all duration-700 z-50'>
					<span className='text-subHeader font-bold'>{Tech}</span>
				</div>
				<div className='absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-700 z-50'>
					<span className='text-bigHeader font-bold'>See Details</span>
				</div>
			</div>
			<Popup isOpen={popup} onClose={handleClosePopup}/>
		</>
  )
}

export default COE768;
