import React from 'react'

const Default = ({Title, Lang, Tech, Link, Img}) => {
  return (
		<div className='z-30 group relative overflow-hidden box-shadow rounded-xl hover:cursor-pointer'>
			<a href={Link} target="_blank">
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
			</a>
		</div>
  )
}

export default Default