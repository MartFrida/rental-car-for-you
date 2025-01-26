import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../configAxios/api'
import { CARS_PER_PAGE } from '../../data/constants'

export const fetchCarsDataThunk = createAsyncThunk('car/fetchAll', async ({ page, filters }, thunkApi) => {
	try {
		const queryOptions = {
			params: {
				limit: CARS_PER_PAGE,
				page,
				...filters
			}
		}
		const { data } = await api.get('cars', queryOptions)
		console.log(data)
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})




