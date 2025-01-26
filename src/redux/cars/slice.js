import { createSlice } from '@reduxjs/toolkit'
import { fetchCarsDataThunk } from './operations'

const initialState = {
	items: [],
	favoriteItems: [],
	// filter: '',
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
		// setFilter: (state, { payload }) => {
		// 	console.log(payload)
		// 	// state.filter = payload
		// },
		setSkip: (state) => {
			state.skip += state.limit
		},
		setToFavorites: (state, { payload }) => {
			state.favoriteItems.push(payload)
		},
		deleteFromFavorites: (state, { payload }) => {
			const index = state.favoriteItems.findIndex(car => car._id === payload._id)
			state.favoriteItems.splice(index, 1)
			// state.favoriteItems = state.favoriteItems.filter(item => item._id !== payload)
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchCarsDataThunk.fulfilled, (state, { payload }) => {
				console.log(payload)
				state.items = payload
				state.loading = false
			})
			.addCase(fetchCarsDataThunk.pending, state => {
				state.loading = true
			})
			.addCase(fetchCarsDataThunk.rejected, (state, { payload }) => {
				state.loading = false
				state.error = payload
			})
	},
})

export const { setSkip, setToFavorites, deleteFromFavorites } = carsSlice.actions
export const carReducer = carsSlice.reducer