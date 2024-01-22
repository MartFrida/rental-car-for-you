import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 w-100% max-w-7xl p-0 relative'>
      <img className='object-cover ' src={'https://img.freepik.com/free-photo/aerial-view-of-road-in-mountains_335224-809.jpg?w=996&t=st=1705885278~exp=1705885878~hmac=9d13b6afb73d57658b7f47d39aed23fdbd9fb55bf9a1d18bcbe9e36f8fefa227'} alt='/buick_enclave' loading="lazy" />
      <div className='absolute w-9/12 top-[12%] left-[12%] font-semibold bg-white/50 p-10 lg:text-4xl md:text-3xl sm:text-xl'>On this site you can rent a car</div>
      <Link to='/catalog' className='absolute top-[43%] left-[43%] bg-blue-700 text-white  hover:bg-blue-100  p-2 lg:p-5  rounded-xl'>Let's Go</Link>
    </div>
  )
}

export default Home