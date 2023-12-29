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

					<div className='flex flex-col gap-4 w-[90%] lg:mx-16 mx-6 lg:my-8 my-4'>
						<div className="text-title font-extrabold mt-3 ss:p-0 pt-5">ARM Cortex-M4 Media Center</div>
						<div className='text-norm text-gradient-yellow'>As an academic project for COE718 - Embedded Systems my Code is avalible only upon Request</div>

						<div className="text-norm">For the end of the Fall 2023 semester at Toronto Metropolitan University as apart of the course COE718 - Embedded Systems. Instructions for the major project were to create a media center using the MCB1700 board, the uVision IDE and programming techniques learned throughout the semester. This project required utilizing different hardware features of the board to preform different functions. Specifically, this includes creating a main menu for users to navigate to different functionalities, an photo gallery, an mp3 player and a game of choice. The game that was chosen to be developed was the 1997 invented game of snake. The primary hardware components used for this project were the joystick on the board, the LCD screen and speaker on the board. Using these components an easy to interact with media center was developed for the specified requirements.</div>

						<div className="text-norm">
							There were 4 main components that made up this project:
							<ul className="list-disc list-outside">
								<li><span className="font-bold">Main Menu:</span> Hub for the media center allowed to the user to navigate to all other functionalities.</li>
								<li><span className="font-bold">Game Center:</span> Allow the user to play Snake</li>
								<li><span className="font-bold">Audio Center:</span> Plays PC audio from the board</li>
								<li><span className="font-bold">Photo Gallery:</span> Display bmp images (.c file images) on the LCD</li>
							</ul>
						</div>

						<div className="text-norm">Using a polling based project, user inputs are continuously collected and store using "buttonUpdate = get_button();" and based on another variable called "currentMode", a switch condition is used to apply a different action based on the user's input.</div>

						<div className="text-norm flex lg:flex-row flex-col gap-4 items-center">
							<div className="lg:w-[30%] w-full">
								<table className="w-full border">
									<thead>
										<tr className="">
											<th className="border p-2">currentMode</th>
											<th className="border p-2">Value</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="border p-2">0</td>
											<td className="border p-2">Main Menu</td>
										</tr>
										<tr>
											<td className="border p-2">1</td>
											<td className="border p-2">Snake Difficulty Select</td>
										</tr>
										<tr>
											<td className="border p-2">2</td>
											<td className="border p-2">Audio Center</td>
										</tr>
										<tr>
											<td className="border p-2">3</td>
											<td className="border p-2">Photo Gallery</td>
										</tr>
										<tr>
											<td className="border p-2">4</td>
											<td className="border p-2">Game Over</td>
										</tr>
										<tr>
											<td className="border p-2">5</td>
											<td className="border p-2">Snake Game Play</td>
										</tr>
									</tbody>
								</table>
							</div>
							<img src={Joystick} className="lg:w-[40%] w-full my-2"/>
						</div>

						<div className="text-header font-bold">
							LCD Display
						</div>

						<div className="text-norm">
							The result of each LCD display was as follow:
						</div>

						<div className="w-full flex flex-wrap justify-center items-center">
							{MediaCenterLCD.map((item, index) => (
								<div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-4">
									<img src={item.Image}/>
									<div className="text-center text-norm mt-2">{item.Caption}</div>
								</div>
							))}
						</div>

						<div>
							Updates in Progress...
						</div>

					</div>
      	</div>
      </div>
    </div>
	)
}

const COE718 = ({Title, Lang, Tech, Img}) => {
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

export default COE718;
