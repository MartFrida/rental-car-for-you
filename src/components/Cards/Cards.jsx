import { useEffect } from "react"
import CardItem from "../CardItem/CardItem"
import { useDispatch, useSelector } from "react-redux"
import { fetchCarsDataThunk } from "../../redux/cars/operations"
import { selectCars, selectError, selectFavorites, selectFilter, selectPage, selectLimit, selectLoading } from "../../redux/selectors"
import { Loader } from "../Loader/Loader"

const Cards = ({ onlyFavorites = false }) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const page = useSelector(selectPage);
  const cars = useSelector(selectCars)
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)
  const favoriteCars = useSelector(selectFavorites)

  const carsNew = onlyFavorites ? favoriteCars : cars

  useEffect(() => {
    dispatch(fetchCarsDataThunk({ page }));
  }, [dispatch, page]);

  return <div> <ul className="grid gap-x-[29px] gap-y-[50px] mt-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">

    {carsNew?.map(item => <CardItem key={item._id} {...item} />)}
  </ul>

    {loading && <Loader />}
    {error && <h1>{error}</h1>}</div>;


















  // const dispatch = useDispatch()
  // const cars = useSelector(selectCars)
  // const favoriteCars = useSelector(selectFavorites)
  // const page = useSelector(selectPage)
  // const limit = useSelector(selectLimit)
  // const currentFilters = useSelector(selectFilter)
  // const loading = useSelector(selectLoading)
  // const error = useSelector(selectError)

  // const carsNew = onlyFavorites ? favoriteCars : cars

  // useEffect(() => {
  //   console.log('currentFilters', currentFilters)
  //   dispatch(fetchCarsDataThunk({ currentFilters, page: 1 }))
  //   // (filter !== '') ? dispatch(fetchCarsDataThunk({ filter, page, limit })) : dispatch(fetchCarsDataThunk({ page, limit }))
  // }, [dispatch, currentFilters, page])

  // return (
  //   <>
  //     <ul className="grid gap-x-[29px] gap-y-[50px] mt-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
  //       {carsNew?.map(item => <CardItem key={item._id} {...item} />)}
  //     </ul>

  //     {loading && <Loader />}
  //     {error && <h1>{error}</h1>}
  //   </>
  // )
}
export default Cards

