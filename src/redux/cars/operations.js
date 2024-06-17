import { createAsyncThunk } from '@reduxjs/toolkit'
import { api, carInstance } from '../../configAxios/api'

export const fetchCarsDataThunk = createAsyncThunk('car/fetchAll', async (configParams, thunkApi) => {
	try {
		const { data } = await carInstance.get('cars', {

			params: {
				...configParams,
			}
		})
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})




