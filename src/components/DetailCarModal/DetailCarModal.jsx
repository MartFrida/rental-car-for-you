import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsX } from "react-icons/bs";

const DetailCarModal = ({ handleCloseModal, id, year, make, model, type, img, description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, rentalCompany, address, rentalConditions, mileage }) => {
  const clickOutside = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal()
    }
  }
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleCloseModal()
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return (() =>
      document.removeEventListener('keydown', handleKeyDown)
    )
  }, [handleCloseModal])

  return (
    <div className='fixed flex justify-center items-center inset-0 w-screen bg-neutral-800/60 z-50 backdrop-blur-sm' onClick={clickOutside}>
      <div className='relative w-[500px] h-[95vh] bg-white p-6 rounded-3xl overflow-auto'>
        <BsX className='absolute top-1 right-1 w-8 h-8 cursor-pointer' onClick={handleCloseModal} />
        <div >
          <img className='object-contain w-[100%] h-[250px] rounded-xl' src={img} alt='/buick_enclave' loading="lazy" />
        </div>
        <div className="flex flex-col justify-between ">
          <div className="text-base flex justify-between my-2">
            <p>{make} <span className='text-blue-700'>{model}, </span>{year}</p>
            <p>{rentalPrice}</p>
          </div>
          <div className="text-xs mb-2 text-gray-500 ">
            <p className="text-left tracking-wider leading-4"> {address?.split(',')[1]} |  {address?.split(',')[2] || 'Ukraine'} | Id:{id} | Year:{year} | Type:{type}</p>
            <p className="text-left tracking-wider leading-4"> FuelConsumption: {fuelConsumption} | EngineSize:{engineSize}</p>
          </div>
          <p className='text-left mb-4 font-normal '>{description}</p>
          <div >
            <p className='font-medium leading-7 text-left text-black'>Accessories and functionalities:</p>
            <ul className='flex flex-row'>
              {accessories.map(item => <li className='text-xs mb-2 text-gray-500 tracking-wider' key={item}> {item} |</li>)}
            </ul>
            <ul className='flex flex-row flex-wrap '>{functionalities.map(item => <li className='text-xs mb-2 text-gray-500 tracking-wider' key={item}> {item} |</li>)}
            </ul>
          </div>
          <p className='font-medium leading-7 text-left text-black'>Rental Conditions:</p>
          <ul className='flex flex-wrap justify-between'>
            {rentalConditions?.split('\n').map(item => <li key={item} className='bg-zinc-100 text-base p-2 rounded-xl m-1'>{item}</li>)}
            <li className='bg-zinc-100 text-base p-2 rounded-xl'>Mileage: <span className='text-blue-700'>{mileage}</span></li>
            <li className='bg-zinc-100 text-base p-2 rounded-xl'>Price: <span className='text-blue-700'>{rentalPrice}</span></li>
          </ul>

        </div>
        <Link to="tel:+380730000000" onClick={handleCloseModal}>
          <button className="bg-blue-700 text-white w-[30%] hover:bg-blue-500 p-3 mt-7" onClick={() => handleClickLearnMore(car)}>Rental car</button>
        </Link>
      </div>
    </div>
  )
}

export default DetailCarModal