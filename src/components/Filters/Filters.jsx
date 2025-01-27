import React, { useEffect } from "react"
import { useForm, Controller } from "react-hook-form"
import { useDispatch } from "react-redux"
import { setBrand, setPrice, setMileageFrom, setMileageTo, resetFilters } from "../../redux/filters/slice"
import { resetCarsState } from '../../redux/cars/slice'
import makes from '../../data/brands.json'

const Filters = () => {
  const { handleSubmit, reset, register, control } = useForm();
  const dispatch = useDispatch()

  const getBrands = () => {
    const brands = [{ value: '', label: 'All brands' }]
    console.log(makes)
    brands.push(...makes.map(make => {
      return { value: make, label: make }
    }))

    return brands
  }

  function getPriceRange(maxPrice) {
    let range = [{ value: maxPrice, label: 'All' }]
    for (let i = 10; i <= maxPrice; i += 10) {
      range.push({ value: i, label: `${i} $` })
    }
    return range
  }

  function handleSearchClick(ev) {
    ev.currentTarget.blur()
  }

  const submit = formData => {
    console.log(formData)
    // dispatch(setBrand(formData.CarBrand || null))
    dispatch(setBrand(formData.make || null))
    dispatch(setPrice(formData.price || null))
    dispatch(setMileageFrom(formData.mileage_from))
    dispatch(setMileageTo(formData.mileage_to))
    dispatch(resetCarsState())
  }

  useEffect(() => {
    dispatch(resetFilters())
  }, [dispatch])


  return (
    <>

      <form onSubmit={handleSubmit(submit)} className="form mt-20">
        <section className="mt-8">
          <div>
            <label>Car Brand</label>
            <select {...register("make")}>
              {makes.map(brand => <option key={brand} value={brand}>{brand}</option>)}
            </select>
          </div>
          <div>
            <label>Price/ 1 hour</label>
            <input
              name="price"
              {...register('price')}
              control={control}
              dataset={getPriceRange(300)}
              placeholder='To $'
            />
          </div>
          <div>
            <label htmlFor='mileage_from'>Сar mileage From</label>
            <input
              id='mileage_from'
              name='mileage_from'
              {...register('mileage_from')}
              type='number'
              autoComplete='off'
            />
            <label htmlFor='mileage_to'>Сar mileage To</label>
            <input
              id='mileage_to'
              name='mileage_to'
              {...register('mileage_to')}
              type='number'
              autoComplete='off' />
          </div>
        </section>
        <button type='submit' onClick={handleSearchClick} className="text-white bg-gradient-to-r from-green-400 to-emerald-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-3 uppercase">Search</button>
      </form>

    </>

  )
}

export default Filters
