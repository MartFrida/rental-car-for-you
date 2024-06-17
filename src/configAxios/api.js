import axios from "axios"

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_MOCKAPI

})

export const carInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

export const fetchAllCars = async () => {
  const { data } = await carInstance.get('/')
  return data
}