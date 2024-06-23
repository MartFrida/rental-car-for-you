import axios from "axios"

//DB on MOCKAPI
export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_MOCKAPI

})

// DB on MongoDB
export const carInstance = axios.create({
  baseURL: import.meta.env.VITE_FILE_URL
})

export const setToken = token => {
  carInstance.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const clearToken = () => {
  console.log(carInstance.defaults.headers.common.Authorization)
  carInstance.defaults.headers.common.Authorization = ''
  console.log(carInstance.defaults.headers.common.Authorization)
}