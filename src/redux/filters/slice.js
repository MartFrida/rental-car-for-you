import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  filters: {
    make: null,
    year: null,
    mileageFrom: null,
    mileageTo: null,
    price: null
  }
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setBrand: (state, { payload }) => {
      console.log(payload)
      state.make = payload
    },
    setYeaar: (state, { payload }) => {
      state.year = payload
    },
    setMileageFrom: (state, { payload }) => {
      state.mileageFrom = payload
    },
    setMileageTo: (state, { payload }) => {
      state.mileageTo = payload
    },
    setPrice: (state, { payload }) => {
      state.price = payload
    },
    resetFilters: () => {
      return initialState
    }
  }
})

export const { setBrand, setYeaar, setMileageFrom, setMileageTo, setPrice, resetFilters } = filtersSlice.actions
export const filterReducer = filtersSlice.reducer