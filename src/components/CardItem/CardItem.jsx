import { useEffect, useState } from 'react'
import DetailCarModal from '../DetailCarModal/DetailCarModal'
import FavoriteCheckbox from '../FavoriteCheckbox/FavoriteCheckbox'



const CardItem = ({ id, year, make, model, type, img, description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, rentalCompany, address, rentalConditions, mileage }) => {

  const car = { id, year, make, model, type, img, description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, rentalCompany, address, rentalConditions, mileage }

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [currentCar, setCurrentCar] = useState(null)
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    isOpenModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'
  }, [isOpenModal])

  const handleShowModal = () => setIsOpenModal(true)
  const handleCloseModal = () => setIsOpenModal(false)
  const handleClickLearnMore = car => {
    setCurrentCar(car)
    setIsOpenModal(true)
  }

  // const handleAddToFavorite = (currentCar) => {
  //   setIsFavorite(true)
  // }

  // const handleDelFromFavorite = (currentCar) => {
  //   setIsFavorite(false)
  // }

  return (
    <>
      <li className="flex flex-col justify-between">
        <div className="hover:scale-105 duration-100 relative pt-0 ">
          <FavoriteCheckbox car={car} />
          <img className='object-cover h-[268px] rounded-xl' src={img} alt={model} loading="lazy" />
        </div>
        <div className="flex flex-col justify-between mt-1">
          <div className="text-base flex justify-between">
            <p>{make} <span className='text-blue-700'>{model}, </span>{year}</p>
            <p>{rentalPrice}</p>
          </div>
          <div className="text-xs">
            <p className="text-left"> {(address?.split(',')[1])} |{address?.split(',')[2] || 'Ukraine'} | {rentalCompany}
              | {accessories[0]}</p>
            <p className="text-left">{type} | {model} | {id}
              | {functionalities[0]}</p>
          </div>
        </div>
        <button className="bg-butprimary text-white w-[100%] hover:bg-blue-500 p-3" onClick={() => handleClickLearnMore(car)}>Learn more</button>
      </li>
      {isOpenModal ? <DetailCarModal handleCloseModal={handleCloseModal} {...car} /> : null}
    </>
  )
}

export default CardItem