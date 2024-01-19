import React, { useState } from "react";
import Close from "../../assets/Close.png"
import ProjectDemo from "../../assets/PeerToPeer/ProjectDemo.mov"
import IndexServer from "../../assets/PeerToPeer/IndexServer.png"
import Peer from "../../assets/PeerToPeer/Peer.png"
import DemoRequirements from "../../assets/PeerToPeer/DemoRequirements.png"

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
							The goal of this project was to create a peer-to-peer application that consisted of a number of peers, where each peer could act as one of two modes when interacting with each other.
							<ul className="list-disc my-2">
								<li><span className="font-bold">Content Server</span> - Peer that contains the content to be downloaded from</li>
								<li><span className="font-bold">Content Client</span> - Peer that wants to download the content from the other peer</li>
							</ul>
							Peers used the index server as a moderator to help with the content exchange between each other, this was accomplished using a mix of UDP and TCP request.
						</div>

						<div>
							Each Peer has its own UDP socket used specifically for communicating with the index server. Each time a peer registers a piece of content to the index server it also opens a TCP socket. When a different peers wants to download content, it will make a search request to the index server, which if the content exist will respond will the socket address of the content, which the peer then uses to open a TCP connection with. Afterwards, this socket will be used to transfer the data and the peer will then also register its new content to the index server.
						</div>

						{/* <div className="flex md:flex-row flex-col gap-4 w-full items-center">
							<img src={IndexServer} className="md:h-48 md:w-auto w-[70%]" />
							<img src={Peer} className="md:h-48 md:w-auto w[70%]"/>
						</div> */}

						<div>
							In addition, the index server is responsible for load balencing, meaning when a request to the server is made to download a piece of content. If multiple peers contain that content, then the peer with the current least amount of downloads will be the address location that the server sends to fulfill the request. As well, a peer should be able to when requested to quit will deregister all of its content from the server.
						</div>

						<div>
							All communications were conducted through using Protocol Data Units (PDUs), where each type contains its own functionality mentioned in the table below:
						</div>

						<div className="w-full my-2">
							<table className="w-full border">
								<thead>
									<tr className="font-bold">
										<th className="border p-2">PDU Type</th>
										<th className="border p-2">Function</th>
										<th className="border p-2">Direction</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="border p-2 text-center">R</td>
										<td className="border p-2">Content Registration</td>
										<td className="border p-2">Peer to Index Server</td>
									</tr>
									<tr>
										<td className="border p-2 text-center">D</td>
										<td className="border p-2">Context Download Request</td>
										<td className="border p-2">Content Client to Content Server</td>
									</tr>
										<tr>
										<td className="border p-2 text-center">S</td>
										<td className="border p-2">Search for Content and Associated Content Server</td>
										<td className="border p-2">Between Peer and Index Server</td>
									</tr>
									<tr>
										<td className="border p-2 text-center">T</td>
										<td className="border p-2">Content De-registration</td>
										<td className="border p-2">Peer to Index Server</td>
									</tr>
									<tr>
										<td className="border p-2 text-center">C</td>
										<td className="border p-2">Content Data</td>
										<td className="border p-2">Content Server to Content Client</td>
									</tr>
									<tr>
										<td className="border p-2 text-center">O</td>
										<td className="border p-2">List On-Line Registered Content</td>
										<td className="border p-2">Between Peer and Index Server</td>
									</tr>
									<tr>
										<td className="border p-2 text-center">A</td>
										<td className="border p-2">Awknowledgement</td>
										<td className="border p-2">Index Server to Peer</td>
									</tr>
									<tr>
										<td className="border p-2 text-center">E</td>
										<td className="border p-2">Error</td>
										<td className="border p-2">Between Peer or between Peer and Index Server</td>
									</tr>
									<tr>
										<td className="border p-2 text-center">Q</td>
										<td className="border p-2">Quit Peer, De-register all Content and Remove from Server</td>
										<td className="border p-2">Peer to Index Server</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div>
							A demonstration of the project can be seen illustrated below:
							<img src={DemoRequirements} className="mt-2"/>
						</div>

						<div>
							<ul className="list-decimal my-2">
								<li>Peer 1 wants to register content so create a passive TCP socket S1.</li>
								<li>Peer 1 uses its UDP socket S2 to send the IP address and port number associated with S1 to the index server's UDP Port S3.</li>
								<li>Peer 2 makes a request to the index server to download the piece of content that peer 1 registered. Using its S4 socket to make a UDP request to the index server to obtain the IP address and port number of S1.</li>
								<li>Peer 2 creates a TCP socket S6 to connect to the server at S1 and downloads the file.</li>
								<li>Peer 2 then automatically registers its newly aquired content to the server, creating S5.</li>
								<li>Peer 2 uses its UDP socket S4 to send the IP address and port number associated with S5 to the index server.</li>
								<li>Peer 3 makes a UDP request using S7 looking download the same file. After checking for the port with the least amount of vists (S5 in this case), the index server sends the IP address and port number.</li>
								<li>Peer 3 creates a TCP client socket S9 to connect to S5 and downalods the file.</li>
								<li>Peer 3 creates a TCP socket S8 with the newly aquired file.</li>
								<li>Peer 3 then automatically registers the new port S8 to the index server using a UDP request.</li>
							</ul>
						</div>

						<div>
							A a video demonstration of this project can be seen in the video below:
						</div>

						<div>
							<video src={ProjectDemo} type="video/quicktime" className="w-full" controls/>
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
