import { createSlice } from '@reduxjs/toolkit'
import { fetchCarsDataThunk } from './operations'

const initialState = {
	items: [],
	favoriteItems: [],
	filter: {
		brand: '',
		price: '',
		mileageFrom: 0,
		mileageTo: 1000,
	},
	page: 1,
	limit: 12,
	skip: 24,
	loading: false,
	error: null,
}

const carsSlice = createSlice({
	name: 'cars',
	initialState,
	reducers: {
		setFilter: (state, { payload }) => {
			state.filter.brand = payload.brand
			state.filter.price = payload.price
			state.filter.mileageFrom = payload.mileageFrom
			state.filter.mileageTo = payload.mileageTo
		},
		setSkip: (state) => {
			state.skip += state.limit
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchCarsDataThunk.fulfilled, (state, { payload }) => {
				state.items = payload
			})


	},
})
export const { setFilter, setSkip } = carsSlice.actions
export const carReducer = carsSlice.reducer
