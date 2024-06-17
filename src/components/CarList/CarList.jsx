import { useState, useEffect } from "react"
import { fetchAllCars } from "../../configAxios/api"

const CarList = () => {
  const [cars, setCars] = useState([])

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const { result } = await fetchAllCars()
        setCars(result)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchCars()
  }, [])
  console.log(cars)
  const elements = cars.map(({ id, make }) => <li key={id}>{make}</li>)

  return (
    <ul>
      {elements}
    </ul>
  )
}

export default CarList