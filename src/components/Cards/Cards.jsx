import { useEffect } from "react"
import CardItem from "../CardItem/CardItem"
import { useDispatch, useSelector } from "react-redux"
import { fetchCarsDataThunk } from "../../redux/cars/operations"
import { selectCars, selectError, selectFavorites, selectPage, selectLoading } from "../../redux/selectors"
import { Loader } from "../Loader/Loader"
import { resetFilters } from "../../redux/cars/slice"

const Cards = ({ onlyFavorites = false }) => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const cars = useSelector(selectCars)
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)
  const favoriteCars = useSelector(selectFavorites)

  const carsNew = onlyFavorites ? favoriteCars : cars

  useEffect(() => {
    dispatch(resetFilters())
    dispatch(fetchCarsDataThunk({ page }));
  }, [dispatch, page]);

  return <div> <ul className="grid gap-x-[29px] gap-y-[50px] mt-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">

    {carsNew?.map(item => <CardItem key={item._id} {...item} />)}
  </ul>

    {loading && <Loader />}
    {error && <h1>{error}</h1>}</div>;

}
export default Cards

