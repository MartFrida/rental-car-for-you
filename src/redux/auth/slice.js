import { createSlice } from "@reduxjs/toolkit"
import { loginThunk, logoutThunk, registerThunk } from "./operations"

const initialState = {
  user: {
    email: '',
    username: '',
  },
  token: '',
  isLoggedIn: false,
  isRefresh: false,
  isError: false,
  isLoading: false,
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(registerThunk.fulfilled, (state, { payload }) => {
      console.log(payload)
      state.user = payload
    })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token
        state.user.email = payload.email
        state.isLoggedIn = true
      })
      .addCase(logoutThunk.fulfilled, state => {
        state.user = initialState.user
        state.isLoggedIn = false
        state.token = ''
      })

  }
})

export const authReducer = slice.reducer