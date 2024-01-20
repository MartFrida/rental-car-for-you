import React from 'react'

const brands = [
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
  "Mercedes-Benz",
  "Chrysler",
  "Kia",
  "Land"
]

const Filters = () => {
  return (
    <div className='mt-20 flex flex-col items-center w-[224px] mx-auto'>
      <label for='idBrand'>Car brand</label>
      <select id='idBrand'>
        {brands.map(brand => <option>{brand}</option>)}
      </select>

    </div>
  )
}

export default Filters

