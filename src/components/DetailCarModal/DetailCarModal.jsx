import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

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

  const currentYear = new Date().getFullYear()
  return (
    // стилізувати
    <div className='fixed flex justify-center items-center inset-0 w-screen bg-neutral-800/60 z-50' onClick={clickOutside}>
      <div className='relative w-[500px] bg-white p-10 rounded-3xl'>
        <div>
          <img className='object-cover rounded-xl' src={img} alt='/buick_enclave' loading="lazy" />
        </div>
        <div className="flex flex-col justify-between ">
          <div className="text-base flex justify-between">
            <p>{make} <span>{model}, </span>{year}</p>
            <p>{rentalPrice}</p>
          </div>
          <div className="text-xs">
            <p className="text-left">city | country | {rentalCompany}
              {/* якщо в ацессорі є слово преміум, то вставляємо останнім, якщо ні-то нічого */}
              | {accessories[0]}</p>
            <p className="text-left">{type} | {model} | {id}
              {/* по масиву вибрати рандомно */}
              | {functionalities[0]}</p>
          </div>
          <p>{description}</p>
          <div>Accessories and functionalities:
            {/* роздільна риска */}
            <ul className='flex'>
              {accessories.map(item => <li>{item}</li>)}
            </ul>
            <ul className='flex'>{functionalities.map(item => <li>{item}</li>)}
            </ul>
          </div>
          <ul className='flex flex-wrap justify-between'>Rental Conditions:
            <li>Minimum age: <span>25</span></li>
            <li>Valid driver’s license</li>
            <li>Security deposite required</li>
            <li>Mileage: <span>{mileage}</span></li>
            <li>Price: <span>{rentalPrice}</span></li>
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