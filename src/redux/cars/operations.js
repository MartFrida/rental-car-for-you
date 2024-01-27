import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://65a98bd7219bfa37186970af.mockapi.io/'

export const fetchCarsDataThunk = createAsyncThunk('car/fetchAll', async (configParams, thunkApi) => {
	try {
		const { data } = await axios.get('cars', {
			params: {
				...configParams,
			}
		})
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})



