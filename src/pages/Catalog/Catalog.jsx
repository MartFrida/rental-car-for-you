import { useDispatch, useSelector } from "react-redux"
import Cards from "../../components/Cards/Cards"
import Filters from "../../components/Filters/Filters"
import { selectCars, selectSkip } from '../../redux/selectors'
import { fetchCarsDataThunk } from "../../redux/cars/operations"
import { setSkip } from "../../redux/cars/slice"

const Catalog = () => {
  const dispatch = useDispatch()
  const cars = useSelector(selectCars)
  const skip = useSelector(selectSkip)

  const handleLoadMore = () => {
    dispatch(setSkip())
    dispatch(fetchCarsDataThunk({ page: 1, limit: skip }))

  }
  return (
    <>
      <Filters />
      <Cards />
      {cars.length >= 12 ? <button className="my-24 text-blue-700 bg-transparent hover:text-blue-900" onClick={handleLoadMore}>Load more</button> : null}
    </>
  )
}

export default Catalog