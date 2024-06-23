import { createAsyncThunk } from "@reduxjs/toolkit";
import { carInstance, clearToken, setToken } from "../../configAxios/api";

export const registerThunk = createAsyncThunk('auth/register', async (credentials, thunkApi) => {
  try {
    const response = await carInstance.post('auth/signup', credentials)
    console.log(response)
    return response.data
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
  }
})

export const loginThunk = createAsyncThunk('auth/signin', async (credentials, thunkApi) => {
  try {
    const response = await carInstance.post('auth/signin', credentials)
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
    await carInstance.post('auth/signout')
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
    const response = await carInstance.get('users/current')
    return response.data
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
  }
})