import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../../img/car-leaving-smartphone.jpg'

const Home = () => {
  return (
    <div className='bg-gradient-to-r from-blue-950 from-20%  to-cyan-400 to-80% h-[100vh] w-[100vw] p-0 relative font-semibold text-white overflow-hidden text-wrap'>
      <img className='absolute top-0 left-0 object-cover w-[100%] ' src={heroImg} alt='/buick_enclave' loading="lazy" />
      <div className=' absolute top-10 right-0 '>
        <h1 className='uppercase m-20 z-20'>Best CAR FOR RENT TODAY</h1>
      </div>

      <Link to='/catalog' className='absolute bottom-5 right-5  bg-blue-950 text-white  hover:bg-blue-200  p-4 lg:p-5 font-semibold text-2xl rounded-xl'>Let's Go</Link>
    </div>
  )
}

export default Home