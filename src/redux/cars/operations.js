import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../configAxios/api'
import { CARS_PER_PAGE } from '../../data/constants'

export const fetchCarsDataThunk = createAsyncThunk('car/fetchAllByFilter', async ({ filters, page }, thunkApi) => {
	try {
		const queryOptions = {
			params: {
				...filters,
				limit: CARS_PER_PAGE,
				page,
			}
		}
		const { data } = await api.get('cars/filters', queryOptions)
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})





