import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  filters: {
    brand: null,
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
      state.filters.brand = payload
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
  }
})

export const { setBrand, setMileageFrom, setMileageTo, setPrice } = filtersSlice.actions
export const filterReducer = filtersSlice.reducer