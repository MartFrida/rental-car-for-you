import { useEffect } from "react"
import CardItem from "../CardItem/CardItem"
import { useDispatch, useSelector } from "react-redux"
import { fetchCarsDataThunk } from "../../redux/cars/operations"
import { selectCars, selectError, selectFilter, selectLimit, selectLoading, selectPage } from "../../redux/selectors"
import { Loader } from "../Loader/Loader"

const Cards = () => {
  const dispatch = useDispatch()
  const cars = useSelector(selectCars)
  const page = useSelector(selectPage)
  const limit = useSelector(selectLimit)
  const filter = useSelector(selectFilter)
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)

  useEffect(() => {
    (filter !== '') ? dispatch(fetchCarsDataThunk({ page, limit, make: `${filter}` })) : dispatch(fetchCarsDataThunk({ page, limit }))
  }, [dispatch, filter, limit, page])

  return (
    <>
      <ul className="grid gap-x-[29px] gap-y-[50px] mt-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {cars.map(item => <CardItem key={item.id} {...item} />)}
      </ul>

      {loading && <Loader />}
      {error && <h1>{error}</h1>}
    </>
  )
}
export default Cards

