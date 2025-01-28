import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectFilter, selectPage } from '../../redux/selectors'
import { updateFilter, resetFilters } from '../../redux/cars/slice'
import { fetchCarsDataThunk } from "../../redux/cars/operations"

import makes from '../../data/brands.json'

const Filters = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const page = useSelector(selectPage);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFilter({ [name]: value }));
  };

  const handleSubmit = (e) => {
    dispatch(fetchCarsDataThunk({ filters: filter, page }));
  };

  const handleReset = (e) => {
    dispatch(resetFilters());
    dispatch(fetchCarsDataThunk({ filters: filter, page }))
  };

  return (
    <form className="form mt-20 flex flex-col items-center">
      <section className="mt-8 inline-flex justify-center gap-4">
        <div>
          <label className="block text-sm/6 font-medium text-gray-900">Car Brand</label>
          <select name="make"
            value={filter.make || ''}
            onChange={handleInputChange}
            className="col-start-1 row-start-1 w-48 appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
            <option value="">All Brands</option>
            {makes.map(brand => <option key={brand} value={brand}>{brand}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm/6 font-medium text-gray-900">Year </label>
          <input
            type="number"
            name="year"
            value={filter.year || ''}
            onChange={handleInputChange}
            placeholder="Year"
            className="col-start-1 row-start-1 w-48 appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </section>
      <section className=" inline-flex justify-center gap-4">
        <button type="button"
          onClick={handleSubmit}
          className="w-48 text-white bg-gradient-to-r from-green-400 to-emerald-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2 mt-3 uppercase">Apply Filters</button>
        <button type="button"
          onClick={handleReset}
          className="w-48 text-white bg-gradient-to-r from-green-400 to-emerald-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2 mt-3 uppercase">Reset Filters</button>
      </section>

    </form>
  );
}

export default Filters
