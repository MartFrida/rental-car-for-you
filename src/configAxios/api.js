import axios from "axios"

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_MOCKAPI

})

export const carInstance = axios.create({
  baseURL: import.meta.env.VITE_FILE_URL
})

// export const fetchAllCars = async () => {
//   const { data } = await carInstance.get('/')
//   return data
// }