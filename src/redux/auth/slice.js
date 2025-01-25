import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { loginThunk, logoutThunk, registerThunk, refreshThunk } from "./operations"

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
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.username
        state.user.email = payload.email
        state.isLoggedIn = true
        state.isRefresh = false
      })
      .addCase(refreshThunk.pending, state => {
        state.isRefresh = true
      })
      .addCase(refreshThunk.rejected, state => {
        state.isRefresh = false
      })
      .addMatcher(isAnyOf(loginThunk.pending, registerThunk.pending, logoutThunk.pending), state => {
        state.isLoading = true
        state.isError = null
      })
      .addMatcher(isAnyOf(loginThunk.rejected, registerThunk.rejected, logoutThunk.rejected), (state, { payload }) => {
        state.isLoading = false
        state.isError = payload
      })
  }
})

export const authReducer = slice.reducer