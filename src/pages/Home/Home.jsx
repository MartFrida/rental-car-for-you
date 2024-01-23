import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../../img/pexels-kelly-2876511.jpg'

const Home = () => {
  return (
    <div className='bg-gradient-to-r from-blue-950 from-20%  to-green-700 to-80%  w-100% max-w-7xl p-0 relative font-semibold text-white'>
      <img className='object-cover ' src={heroImg} alt='/buick_enclave' loading="lazy" />
      On this site you can rent a car
      <Link to='/catalog' className='absolute top-[43%] left-[43%] bg-blue-900/80 text-white  hover:bg-blue-100  p-4 lg:p-5 font-semibold text-2xl rounded-xl'>Let's Go</Link>
    </div>
  )
}

export default Home