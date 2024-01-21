import { useDispatch, useSelector } from "react-redux"
import Cards from "../../components/Cards/Cards"
import Filters from "../../components/Filters/Filters"
import { selectCars, selectLimit } from '../../redux/selectors'
import { fetchCarsDataThunk } from "../../redux/cars/operations"

const Catalog = () => {
  // переписати через догрузку pages

  const dispatch = useDispatch()
  const cars = useSelector(selectCars)
  const limit = useSelector(selectLimit)

  const handleLoadMore = () => {
    dispatch(fetchCarsDataThunk({ limit: limit + 12 }))
  }
  return (
    <>
      <Filters />
      <Cards />
      {cars.length ? <button onClick={handleLoadMore}>Load more</button> : null}
    </>
  )
}

export default Catalog