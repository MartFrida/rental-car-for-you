import React, { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import ReactSelect from "react-select"
import { setBrand } from "../../redux/filters/slice"
import { fetchCarsDataThunk } from '../../redux/cars/operations'
import brands from '../../data/brands.json'

const carsBrandFilter = brands.map(brand => {
  return { value: brand, label: brand }
})

const defaultValues = { value: "All brands", label: "All brands" }

const Filters = () => {
  const { handleSubmit, reset, register, control } = useForm();
  const dispatch = useDispatch()

  const getBrands = () => {
    const brands = defaultValues
    brands.push(...brands.map(brand => {
      return { value: brand, label: brand }
    }))
    return brands
  }

  const submit = formData => {
    console.log(formData)
    dispatch(setBrand(formData.CarBrand.value))
    dispatch(fetchCarsDataThunk({ page: 1, filters: { brand: formData.CarBrand.value } }))
  }

  return (
    <form onSubmit={handleSubmit(submit)} className="form mt-20">
      <section>
        <label>Car Brand</label>
        <Controller
          name="CarBrand"
          control={control}
          render={({ field }) => (
            <ReactSelect className='shadow-md '
              {...register('CarBrand')}
              {...field}
              defaultValue={defaultValues}
              options={carsBrandFilter}
            />
          )}
        />
      </section>
      <button className="text-white bg-gradient-to-r from-green-400 to-emerald-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-3 uppercase">Search</button>
    </form>
  )
}

export default Filters
