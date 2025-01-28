import { createSlice } from '@reduxjs/toolkit'
import { fetchCarsDataThunk } from './operations'

const initialState = {
	items: [],
	favoriteItems: [],
	filter: {
		// make: 'Volvo',
		// year: 2020,
		make: null,
		year: null,
		mileageFrom: null,
		mileageTo: null,
		price: null
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
		updateFilter(state, action) {
			state.filter = { ...state.filter, ...action.payload };
		},
		updatePage(state, action) {
			state.page = action.payload;
		},

		// setBrand: (state, { payload }) => {
		// 	console.log(payload)
		// 	state.filter.make = payload
		// },
		// setYeaar: (state, { payload }) => {
		// 	state.filter.year = payload
		// },
		// setMileageFrom: (state, { payload }) => {
		// 	state.filter.mileageFrom = payload
		// },
		// setMileageTo: (state, { payload }) => {
		// 	state.filter.mileageTo = payload
		// },
		// setPrice: (state, { payload }) => {
		// 	state.filter.price = payload
		// },
		resetFilters: () => {
			return initialState
		},
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
		},
		resetCarsState: (state) => {
			state.items = []
			state.page = 0
		},
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
				state.error = null
			})
			.addCase(fetchCarsDataThunk.rejected, (state, { payload }) => {
				state.loading = false
				state.error = payload
			})
	},
})

export const { updateFilter, updatePage, resetFilters, setSkip, setToFavorites, deleteFromFavorites, resetCarsState } = carsSlice.actions
export const carReducer = carsSlice.reducer