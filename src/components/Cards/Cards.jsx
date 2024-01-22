import { useEffect } from "react"
import CardItem from "../CardItem/CardItem"
import { useDispatch, useSelector } from "react-redux"
import { fetchCarsDataThunk } from "../../redux/cars/operations"
import { selectCars, selectFilter, selectLimit, selectPage } from "../../redux/selectors"

const Cards = () => {
  const dispatch = useDispatch()
  const cars = useSelector(selectCars)
  const page = useSelector(selectPage)
  const limit = useSelector(selectLimit)
  const filter = useSelector(selectFilter)

  useEffect(() => {
    (filter !== '') ? dispatch(fetchCarsDataThunk({ page, limit, make: `${filter}` })) : dispatch(fetchCarsDataThunk({ page, limit }))
  }, [dispatch, filter, limit, page])

  return (
    <>
      <ul className="grid gap-x-[29px] gap-y-[50px] mt-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {cars.map(item => <CardItem key={item.id} {...item} />)}
      </ul>
    </>
  )
}
export default Cards

