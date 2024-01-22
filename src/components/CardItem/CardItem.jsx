import { useEffect, useState } from 'react'
import DetailCarModal from '../DetailCarModal/DetailCarModal'
import { useDispatch, useSelector } from 'react-redux'
import { selectFavorites } from '../../redux/selectors'
import { setFavorites } from '../../redux/cars/slice'
import { saveToLocalStorage } from '../../storage'
import { BsHeart } from 'react-icons/bs'

const CardItem = ({ id, year, make, model, type, img, description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, rentalCompany, address, rentalConditions, mileage }) => {

  const car = { id, year, make, model, type, img, description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, rentalCompany, address, rentalConditions, mileage }

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [currentCar, setCurrentCar] = useState(null)
  const dispatch = useDispatch()
  const favoritesAr = useSelector(selectFavorites)

  useEffect(() => {
    isOpenModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'
  }, [isOpenModal])

  const handleShowModal = () => setIsOpenModal(true)
  const handleCloseModal = () => setIsOpenModal(false)
  const handleClickLearnMore = car => {
    console.log(car)
    setCurrentCar(car)
    setIsOpenModal(true)
  }

  const handleAddToFavorite = (currentCar) => {
    setCurrentCar(car)
    dispatch(setFavorites(currentCar))
    console.log(car)
    saveToLocalStorage(currentCar.id, currentCar)
    console.log(localStorage)
  }


  return (
    <>
      <li className="h-[426px] flex flex-col justify-between ">
        <div className="hover:scale-105 duration-100 relative">
          <img className='object-cover h-[268px] rounded-xl' src={img} alt={model} loading="lazy" />
          <BsHeart onClick={() => handleAddToFavorite(car)} className='absolute top-3.5 right-3.5 cursor-pointer text-white' />
          {/* <BsHeartFill /> */}
        </div>
        <div className="flex flex-col justify-between ">
          <div className="text-base flex justify-between">
            <p>{make} <span className='text-blue-700'>{model}, </span>{year}</p>
            <p>{rentalPrice}</p>
          </div>
          <div className="text-xs">
            <p className="text-left"> {(address?.split(',')[1])} |{address?.split(',')[2] || 'Ukraine'} | {rentalCompany}
              {/* якщо в ацессорі є слово преміум, то вставляємо останнім, якщо ні-то нічого */}
              | {accessories[0]}</p>
            <p className="text-left">{type} | {model} | {id}
              {/* по масиву вибрати рандомно */}
              | {functionalities[0]}</p>
          </div>
        </div>
        <button className="bg-blue-700 text-white w-[100%] hover:bg-blue-500 p-3" onClick={() => handleClickLearnMore(car)}>Learn more</button>
      </li>
      {isOpenModal ? <DetailCarModal handleCloseModal={handleCloseModal} {...car} /> : null}
    </>
  )
}

export default CardItem