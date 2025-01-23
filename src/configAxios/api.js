import axios from "axios"

// //DB on MOCKAPI
// export const api = axios.create({
//   baseURL: import.meta.env.VITE_BASE_MOCKAPI

// })

// DB on MongoDB
export const api = axios.create({
  baseURL: import.meta.env.VITE_FILE_URL
})

export const setToken = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const clearToken = () => {
  api.defaults.headers.common.Authorization = ''
}