import { useDispatch, useSelector } from "react-redux"
import Cards from "../../components/Cards/Cards"
import Filters from "../../components/Filters/Filters"
import { selectCars, selectSkip } from '../../redux/selectors'
import { fetchCarsDataThunk } from "../../redux/cars/operations"
import { setSkip } from "../../redux/cars/slice"
import { Container } from "@mui/material"


const Catalog = () => {
  const dispatch = useDispatch()
  const cars = useSelector(selectCars)
  const skip = useSelector(selectSkip)

  const handleLoadMore = (ev) => {
    dispatch(setSkip())
    dispatch(fetchCarsDataThunk({ page: 1, limit: skip }))
    ev.target.blur()
  }
  return (
    <Container>
      <Filters />
      <Cards />
      {cars.length >= 12 ? <button type="button" onClick={handleLoadMore} className="animate-bounce text-white bg-gradient-to-r from-green-400 to-emerald-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm p-5 text-center ml-[45%] my-8 uppercase tracking-widest">Load more</button> : null}
    </Container>
  )
}

export default Catalog