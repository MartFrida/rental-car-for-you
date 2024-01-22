import { createSlice } from '@reduxjs/toolkit'
import { fetchCarsDataThunk } from './operations'

const initialState = {
	items: [],
	favoriteItems: [],
	filter: '',
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
			state.filter = payload
		},
		setSkip: (state) => {
			state.skip += state.limit
		},
		setFavorites: (state, { payload }) => {
			state.favoriteItems.push(payload)
		},

	},
	extraReducers: builder => {
		builder
			.addCase(fetchCarsDataThunk.fulfilled, (state, { payload }) => {
				state.items = payload
			})
	},
})

export const { setFilter, setSkip, setFavorites } = carsSlice.actions
export const carReducer = carsSlice.reducer