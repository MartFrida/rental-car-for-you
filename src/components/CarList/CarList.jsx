import { useState, useEffect } from "react"
import { fetchAllCars } from "../../configAxios/api"

const CarList = () => {
  const [cars, setCars] = useState([])

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await fetchAllCars()
        setCars(data)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchCars()
  }, [])

  const elements = cars.map(({ id, make }) => <li>{make}</li>)

  return (
    <ul>
      {elements}
    </ul>
  )
}

export default CarList