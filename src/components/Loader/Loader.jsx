import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'

export const Loader = () => {
	return (
		<div className='flex justify-center items-center min-h-screen'>
			<ThreeCircles
				visible={true}
				height="100"
				width="100"
				color="#289638"
				ariaLabel="three-circles-loading"
				wrapperStyle={{}}
				wrapperClass=""
			/>

		</div>
	)
}
