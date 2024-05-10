import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../configAxios/api'

export const fetchCarsDataThunk = createAsyncThunk('car/fetchAll', async (configParams, thunkApi) => {
	try {
		const { data } = await api.get('cars', {

			params: {
				...configParams,
			}
		})
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})



