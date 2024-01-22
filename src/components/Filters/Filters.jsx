import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilter, selectFilterBrand, selectFilterMileageFrom, selectFilterMileageTo, selectFilterPrice } from '../../redux/selectors'
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
const price = [30, 40, 50, 60, 70, 80]

const Filters = () => {
  const filter = useSelector(selectFilter)
  const filterBrand = useSelector(selectFilterBrand)
  const filterMileageFrom = useSelector(selectFilterMileageFrom)
  const filterMileageTo = useSelector(selectFilterMileageTo)
  const filterPrice = useSelector(selectFilterPrice)

  const dispatch = useDispatch()

  const { register, handleSubmit, reset } = useForm()
  const submit = data => {
    console.log(data)
    // brand:""
    // mileageFrom:0
    // mileageTo:1000
    // price:""
    dispatch(setFilter(data))
    // reset()
  }
  console.log(filter)
  return (
    <form onSubmit={handleSubmit(submit)} className='mt-20 flex justify-between items-end w-[90%] mx-auto gap-4'>
      <label className='flex flex-col items-start text-sm'>Car brand
        <select className='bg-zinc-100 text-base p-4 rounded-xl' {...register('brand')} >
          {brands.map(brand => <option key={brand}>{brand}</option>)}
        </select>
      </label>
      <label className='flex flex-col items-start text-sm'>Price/ 1 hour
        <select className='bg-zinc-100 text-base p-4 rounded-xl' {...register('price')} >
          {price.map(pr => <option key={pr}>${pr}</option>)}
        </select>
      </label>
      <label className='flex flex-col items-start text-sm'>Сar mileage / km
        <div className='flex bg-zinc-100 text-base p-4 rounded-xl gap-1 leading-4' >
          <input type="number" step="10" placeholder='From' {...register('mileageFrom')} />
          <input type="number" step="10" placeholder='To' {...register('mileageTo')} />
        </div>
      </label>
      <button className="bg-blue-700 text-white  hover:bg-blue-500 p-3">Search</button>
    </form>
  )
}

export default Filters


// brand:""
// mileageFrom:0
// mileageTo:1000
// price:""