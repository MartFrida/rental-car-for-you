import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilter } from '../../redux/selectors'
import { setFilter } from '../../redux/cars/slice'

const brands = [
  "All brands",
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
const price = [30, 40, 50, 60, 70, 80]

const Filters = () => {
  const filter = useSelector(selectFilter)
  const dispatch = useDispatch()
  const handleChangeValue = (e) => {
    (e.target.value === 'Enter the text') ? dispatch(setFilter('')) :
      dispatch(setFilter(e.target.value))
  }
  return (
    // <div className='mt-20 flex flex-col items-center w-[224px] mx-auto'>
    //   <label >Car brand
    //     <select onChange={handleChangeValue}>
    //       {brands.map(brand => <option key={brand}>{brand}</option>)}
    //     </select>
    //   </label>
    // </div>
    <form className='mt-20 flex justify-between items-end w-[90%] mx-auto gap-4'>
      <label className='flex flex-col items-start text-sm'>Car brand
        <select className='bg-zinc-100 text-base p-4 rounded-xl' onChange={handleChangeValue}>
          {brands.map(brand => <option key={brand}>{brand}</option>)}
        </select>
      </label>
      <label className='flex flex-col items-start text-sm'>Price/ 1 hour
        <select className='bg-zinc-100 text-base p-4 rounded-xl' onChange={handleChangeValue}>
          {price.map(pr => <option key={pr}>{pr} $</option>)}
        </select>
      </label>
      <label className='flex flex-col items-start text-sm'>Сar mileage / km
        <div className='flex bg-zinc-100 text-base p-4 rounded-xl gap-1 leading-4'>
          <input placeholder='From' />
          <input placeholder='To' />
        </div>
      </label>
      <button className="bg-blue-700 text-white  hover:bg-blue-500 p-3">Search</button>
    </form>
  )
}

export default Filters

