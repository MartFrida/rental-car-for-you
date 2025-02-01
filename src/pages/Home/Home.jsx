import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../../img/home-cars.png'


const Home = () => {
  return (
    <div className='bg-gradient-to-r from-[#162556]  via-sky-500 via-70% to-[#162556]  h-[100vh] w-[100vw] relative font-semibold text-white overflow-hidden text-wrap p-4'>
      <img className='absolute top-[30%] left-0 object-cover w-[100%] ' src={heroImg} alt='/buick_enclave' loading="lazy" />
      <div className=' absolute  my-20 top-10 right-0 flex p-4'>
        <h1 className='uppercase text-center z-20 text-4xl ]'>Best CAR FOR RENT TODAY</h1>
      </div>

      <Link to='/catalog' className='absolute bottom-5 right-5  bg-blue-950 text-white    transition  duration-300 ease-in-out hover:bg-butprimary  p-4 lg:p-5 font-semibold text-2xl rounded-xl'>Let's Go</Link>

    </div>
  )
}

export default Home