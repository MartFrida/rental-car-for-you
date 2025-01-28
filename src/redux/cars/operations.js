import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../configAxios/api'
import { CARS_PER_PAGE } from '../../data/constants'

export const fetchCarsDataThunk = createAsyncThunk('car/fetchAllByFilter', async ({ filters, page }, thunkApi) => {
	try {
		const queryOptions = {
			params: {
				// make: "Volvo",
				// year: 2020,
				...filters,
				limit: CARS_PER_PAGE,
				page,
			}
		}
		const { data } = await api.get('cars/filters', queryOptions)
		console.log(filters)
		console.log(data)
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})




