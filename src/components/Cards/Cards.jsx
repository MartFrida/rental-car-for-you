import { useEffect } from "react"
import CardItem from "../CardItem/CardItem"
import { useDispatch, useSelector } from "react-redux"
import { fetchCarsDataThunk } from "../../redux/cars/operations"
import { selectCars } from "../../redux/selectors"

const Cards = () => {
  const dispatch = useDispatch()
  const cars = useSelector(selectCars)

  useEffect(() => {
    dispatch(fetchCarsDataThunk({ page: 1 }))
  }, [dispatch])
  return (
    <>
      <ul className="grid gap-x-[29px] gap-y-[50px] grid-cols-4 grid-rows-3 mt-12">
        {cars.map(item => <CardItem key={item.id} {...item} />)}
      </ul>
    </>
  )
}
export default Cards

