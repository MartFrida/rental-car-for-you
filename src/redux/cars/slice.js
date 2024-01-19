import { createSlice } from '@reduxjs/toolkit'
import { fetchCarsDataThunk } from './operations'

const initialState = {
	items: [],
	loading: false,
	error: null,
}

const slice = createSlice({
	name: 'cars',
	initialState,
	// reducers: {
	// 	addArticle: (state, { payload }) => {
	// 		state.items.push(payload)
	// 	},
	// },
	extraReducers: builder => {
		builder
			.addCase(fetchCarsDataThunk.fulfilled, (state, { payload }) => {
				state.items = payload
			})

	},
})

export const carReducer = slice.reducer
