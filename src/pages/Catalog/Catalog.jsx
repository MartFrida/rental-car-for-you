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

  const handleLoadMore = () => {
    dispatch(setSkip())
    dispatch(fetchCarsDataThunk({ page: 1, limit: skip }))

  }
  return (
    <Container>
      <Filters />
      <Cards />
      {cars.length >= 12 ? <button className="my-20 bg-butprimary bg-transparent hover:text-blue-900 p-5 " onClick={handleLoadMore}>Load more</button> : null}
    </Container>
  )
}

export default Catalog