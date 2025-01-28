import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'
import Cards from "../../components/Cards/Cards"
import Filters from "../../components/Filters/Filters"
import { Loader } from "../../components/Loader/Loader"
import { selectCars } from '../../redux/selectors'
import { fetchCarsDataThunk } from "../../redux/cars/operations"
import { setSkip } from "../../redux/cars/slice"
import { selectIsLoadingUserData, selectIsLoadingCarsData, selectFilter, selectPage } from '../../redux/selectors'
import { Container } from "@mui/material"

const Catalog = () => {
  const dispatch = useDispatch()
  const isLoadingUser = useSelector(selectIsLoadingUserData)
  const isLoadingCars = useSelector(selectIsLoadingCarsData)
  const filter = useSelector(selectFilter);
  const page = useSelector(selectPage);
  const cars = useSelector(selectCars)

  useEffect(() => {
    dispatch(fetchCarsDataThunk({ filter, page }));
  }, [dispatch, filter, page]);

  const handleLoadMore = (ev) => {
    dispatch(setSkip())
    dispatch(fetchCarsDataThunk({ page: page + 1 }))
    ev.target.blur()
  }
  return (
    <Container>
      <Filters />
      <Cards />
      {cars?.length >= 12 ? <button type="button" onClick={handleLoadMore} className="animate-bounce text-white bg-gradient-to-r from-green-400 to-emerald-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm p-5 text-center ml-[45%] my-8 uppercase tracking-widest">Load more</button> : null}

      {!(isLoadingCars || isLoadingUser) && <Loader />}
    </Container>
  )
}

export default Catalog