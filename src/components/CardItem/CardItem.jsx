import { useEffect, useState } from 'react'
import DetailCarModal from '../DetailCarModal/DetailCarModal'
import FavoriteCheckbox from '../FavoriteCheckbox/FavoriteCheckbox'

const CardItem = ({ _id, year, make, model, type, img, description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, rentalCompany, address, rentalConditions, mileage }) => {

  const car = { _id, year, make, model, type, img, description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, rentalCompany, address, rentalConditions, mileage }

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [currentCar, setCurrentCar] = useState(null)

  useEffect(() => {
    isOpenModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'
  }, [isOpenModal])

  const handleCloseModal = () => setIsOpenModal(false)
  const handleClickLearnMore = car => {
    setCurrentCar(car)
    setIsOpenModal(true)
  }

  return (
    <>
      <li className="flex flex-col justify-between bg-white rounded-xl p-1 shadow-md">
        <div className="h-[268px] w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none hover:scale-105 duration-100 relative shadow-md">
          <img className='absolute top-0 left-0 object-cover h-[268px] rounded-xl ' src={img} alt={model} loading="lazy" />
          <FavoriteCheckbox car={car} />
        </div>
        <div className="flex flex-col justify-between m-2">
          <div className="text-base flex justify-between">
            <p>{make} <span className='text-blue-700'>{model}, </span>{year}</p>
            <p>{rentalPrice}</p>
          </div>
          <div className="text-xs">
            <p className="text-left"> {(address?.split(',')[1])} |{address?.split(',')[2] || 'Ukraine'} | {rentalCompany}
              | {accessories[0]}</p>
            <p className="text-left">{type} | {model} | {_id}
              | {functionalities[0]}</p>
          </div>
        </div>
        <button type="button" onClick={() => handleClickLearnMore(car)} className="text-white uppercase bg-gradient-to-r from-green-300 via-green-400 to-emerald-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center tracking-wider mt-5">Details</button>
      </li>
      {isOpenModal ? <DetailCarModal handleCloseModal={handleCloseModal} {...car} /> : null}
    </>
  )
}

export default CardItem