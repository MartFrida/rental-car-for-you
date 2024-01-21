import { createSlice } from '@reduxjs/toolkit'
import { fetchCarsDataThunk } from './operations'

const initialState = {
	items: [],
	filter: '',
	page: 1,
	limit: 12,
	loading: false,
	error: null,
}

const carsSlice = createSlice({
	name: 'cars',
	initialState,
	reducers: {
		setFilter: (state, { payload }) => {
			state.filter = payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchCarsDataThunk.fulfilled, (state, { payload }) => {
				state.items = payload
			})


	},
})
export const { setFilter } = carsSlice.actions
export const carReducer = carsSlice.reducer
