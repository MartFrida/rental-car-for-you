import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://65a98bd7219bfa37186970af.mockapi.io/'

export const fetchCarsDataThunk = createAsyncThunk('car/fetchAll', async (configParams, thunkApi) => {
	try {
		const { data } = await axios.get('car/', {
			params: {
				limit: 12,
				...configParams,
			}
		})
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

export const fetchPostsByQueryThunk = createAsyncThunk('car/search', async (_, thunkApi) => {
	try {
		const { data } = await axios.get('car/search', async(_, thunkApi))
		return data

	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

export const toggleTodoThunk = createAsyncThunk('toggleTodo', async (todo, thunkAPI) => {
	try {
		const { data } = await axios.put(`todos/${todo.id}`, { ...todo, completed: !todo.completed })
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

