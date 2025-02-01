import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../../img/home-cars.png'

const Home = () => {
  return (
    <div className='bg-gradient-to-r from-[#162556]  via-sky-500 via-70% to-[#162556]  h-[100vh] w-[100vw] relative font-semibold text-white overflow-hidden text-wrap p-4'>
      <img className='absolute top-[30%] left-0 object-cover w-[100%] ' src={heroImg} alt='/buick_enclave' loading="lazy" />
      <div className='w-full my-20 top-10 '>
        <h1 className='uppercase z-20 text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 drop-shadow-lg'>Best CAR FOR RENT TODAY</h1>
        <p className="hidden md:flex text-lg text-gray-200 mb-8 justify-center ">
          Find the perfect car for your next adventure. Affordable, reliable, and ready to go!
        </p>
      </div>

      <Link to='/catalog' className='absolute bottom-5 right-5 bg-sky-500 text-white transition duration-300 ease-in-out p-4 lg:p-5 font-semibold text-2xl rounded-lg hover:bg-blue-950  transition-colors'>Browse Cars</Link>
      {/* bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors */}
    </div>
  )
}

export default Home