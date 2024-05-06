import React, { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import ReactSelect from "react-select"
import { setFilter } from "../../redux/cars/slice"
import { selectFilter } from "../../redux/selectors"

const makes = [
  { value: "All brands", label: "All brands" },
  { value: "Buick", label: "Buick" },
  { value: "Volvo", label: "Volvo" },
  { value: "HUMMER", label: "HUMMER" },
  { value: "Subaru", label: "Subaru" },
  { value: "Mitsubishi", label: "Mitsubishi" },
  { value: "Nissan", label: "Nissan" },
  { value: "Lincoln", label: "Lincoln" },
  { value: "GMC", label: "GMC" },
  { value: "Hyundai", label: "Hyundai" },
  { value: "MINI", label: "MINI" },
  { value: "Bentley", label: "Bentley" },
  { value: "Mercedes-Benz", label: "Mercedes-Benz" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "Pontiac", label: "Pontiac" },
  { value: "Lamborghini", label: "Lamborghini" },
  { value: "BMW", label: "BMW" },
  { value: "Chevrolet", label: "Chevrolet" },
  { value: "Chrysler", label: "Chrysler" },
  { value: "Kia", label: "Kia" },
  { value: "Land", label: "Land" },
]

const defaultValues = {
  brandFilter: { value: "All brands", label: "All brands" },
}

const FiltersL = () => {
  const { handleSubmit, reset, register, control } = useForm();
  const filter = useSelector(selectFilter)
  const dispatch = useDispatch()
  const submit = data => {
    return (data.CarBrand.value === 'All brands') ? dispatch(setFilter('')) : dispatch(setFilter(data.CarBrand.value))
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
              options={makes}
            />
          )}
        />
      </section>
      <button className="bg-butprimary text-white hover:bg-blue-500 p-3 px-11 mt-4">Search</button>
    </form>
  )
}

export default FiltersL

// brand:""
// mileageFrom:0
// mileageTo:1000
// price:""