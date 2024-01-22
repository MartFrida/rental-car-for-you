import { useEffect, useState } from 'react'
import icon from '../../img/icons.svg#icon-heart'
import DetailCarModal from '../DetailCarModal/DetailCarModal'
import { useDispatch, useSelector } from 'react-redux'
import { selectFavorites } from '../../redux/selectors'
import { setFavorites } from '../../redux/cars/slice'
import { saveToLocalStorage } from '../../storage'


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
          {/* svg move in dif file */}
          <svg onClick={() => handleAddToFavorite(car)} className='absolute top-3.5 right-3.5 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M15.6301 3.45753C15.247 3.07428 14.7922 2.77026 14.2916 2.56284C13.791 2.35542 13.2545 2.24866 12.7126 2.24866C12.1707 2.24866 11.6342 2.35542 11.1336 2.56284C10.633 2.77026 10.1782 3.07428 9.79509 3.45753L9.00009 4.25253L8.20509 3.45753C7.43132 2.68376 6.38186 2.24906 5.28759 2.24906C4.19331 2.24906 3.14386 2.68376 2.37009 3.45753C1.59632 4.2313 1.16162 5.28075 1.16162 6.37503C1.16162 7.4693 1.59632 8.51876 2.37009 9.29253L3.16509 10.0875L9.00009 15.9225L14.8351 10.0875L15.6301 9.29253C16.0133 8.90946 16.3174 8.45464 16.5248 7.95404C16.7322 7.45345 16.839 6.91689 16.839 6.37503C16.839 5.83316 16.7322 5.2966 16.5248 4.79601C16.3174 4.29542 16.0133 3.84059 15.6301 3.45753Z" stroke="white" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
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
        </div>
        <button className="bg-blue-700 text-white w-[100%] hover:bg-blue-500 p-3" onClick={() => handleClickLearnMore(car)}>Learn more</button>
      </li>
      {isOpenModal ? <DetailCarModal handleCloseModal={handleCloseModal} {...car} /> : null}
    </>
  )
}

export default CardItem