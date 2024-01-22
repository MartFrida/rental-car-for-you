import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilter } from '../../redux/selectors'
import { setFilter } from '../../redux/cars/slice'
import { useForm } from 'react-hook-form'

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

const Filters = () => {
  const filter = useSelector(selectFilter)
  const dispatch = useDispatch()

  const { register, handleSubmit, reset } = useForm()
  const submit = data => {
    // brand:""
    // mileageFrom:0
    // mileageTo:1000
    // price:""
    (data.brand === 'All brands') ? dispatch(setFilter('')) : dispatch(setFilter(data.brand))
    // reset()
  }

  return (
    <form onSubmit={handleSubmit(submit)} className='mt-20 flex justify-center items-end w-[90%] mx-auto gap-4'>
      <label className='flex flex-col items-start text-sm'>Car brand
        <select className='bg-zinc-100 text-base p-4 rounded-xl' {...register('brand')} >
          {brands.map(brand => <option key={brand}>{brand}</option>)}
        </select>
      </label>
      <button className="bg-blue-700 text-white  hover:bg-blue-500 p-3 px-11">Search</button>
    </form>
  )
}

export default Filters


// brand:""
// mileageFrom:0
// mileageTo:1000
// price:""