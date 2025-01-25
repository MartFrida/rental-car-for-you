import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, clearToken, setToken } from "../../configAxios/api";

export const registerThunk = createAsyncThunk('auth/register', async (credentials, thunkApi) => {
  try {
    const response = await api.post('auth/signup', credentials)
    console.log(response)
    return response.data
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
  }
})

export const loginThunk = createAsyncThunk('auth/signin', async (credentials, thunkApi) => {
  try {
    const response = await api.post('auth/signin', credentials)
    console.log(response)
    console.log(credentials)
    setToken(response.data.token)
    return response.data
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
  }
})

export const logoutThunk = createAsyncThunk('auth/signout', async (_, thunkApi) => {
  try {
    await api.post('auth/signout')
    clearToken()
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
  }
})

export const refreshThunk = createAsyncThunk('auth/current', async (_, thunkApi) => {
  const savedToken = thunkApi.getState().auth.token
  if (savedToken) {
    setToken(savedToken)
  } else {
    return thunkApi.rejectWithValue('Token is not exist')
  }
  try {
    const response = await api.get('auth/current')
    return response.data
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
  }
})