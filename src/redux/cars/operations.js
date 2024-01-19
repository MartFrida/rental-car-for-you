import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://65a98bd7219bfa37186970af.mockapi.io/'

export const fetchCarsDataThunk = createAsyncThunk('car/fetchAll', async (_, thunkApi) => {
	try {
		const { data } = await axios.get('car')
		console.log(data)
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

// export const addArticleThunk = createAsyncThunk('articles/add', async (body, thunkApi) => {
// 	try {
// 		const { data } = await axios.post('articles', body)
// 		return data
// 	} catch (error) {
// 		return thunkApi.rejectWithValue(error.message)
// 	}
// })

// export const deleteArticleThunk = createAsyncThunk('articles/delete', async (id, thunkApi) => {
// 	try {
// 		await axios.delete(`articles/${id}`)
// 		return id
// 	} catch (error) {
// 		return thunkApi.rejectWithValue(error.message)
// 	}
// })
