import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilter } from '../../redux/selectors'
import { setFilter } from '../../redux/cars/slice'

const brands = [
  "Enter the text",
  "Buick",
  "Volvo",
  "HUMMER",
  "Subaru",
  "Mitsubishi",
  "Nissan",
  "Lincoln",
  "GMC",
  "Hyundai",
  "MINI",
  "Bentley",
  "Mercedes-Benz",
  "Aston Martin",
  "Pontiac",
  "Lamborghini",
  "Audi",
  "BMW",
  "Chevrolet",
  "Chrysler",
  "Kia",
  "Land"
]

const Filters = () => {
  const filter = useSelector(selectFilter)
  const dispatch = useDispatch()
  const handleChangeValue = (e) => {
    (e.target.value === 'Enter the text') ? dispatch(setFilter('')) :
      dispatch(setFilter(e.target.value))
  }
  return (
    <div className='mt-20 flex flex-col items-center w-[224px] mx-auto'>
      <label >Car brand
        <select onChange={handleChangeValue}>
          {brands.map(brand => <option key={brand}>{brand}</option>)}
        </select>
      </label>
    </div>
  )
}

export default Filters

