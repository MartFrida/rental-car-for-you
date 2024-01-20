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
  "Chrysler",
  "Kia",
  "Land"
]

const Filters = () => {
  return (
    <div className='mt-20 flex flex-col items-center w-[224px] mx-auto'>
      <label >Car brand
        <select>
          {brands.map(brand => <option key={brand}>{brand}</option>)}
        </select>
      </label>
    </div>
  )
}

export default Filters

