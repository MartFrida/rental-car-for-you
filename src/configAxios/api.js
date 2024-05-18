import axios from "axios"

export const api = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/'
})

const carInstance = axios.create({
  baseURL: 'http://localhost:3000/api/cars/'
})

export const fetchAllCars = async () => {
  const { data } = await carInstance.get('/')
  return data
}