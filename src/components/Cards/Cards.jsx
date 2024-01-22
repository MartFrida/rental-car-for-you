import { useEffect } from "react"
import CardItem from "../CardItem/CardItem"
import { useDispatch, useSelector } from "react-redux"
import { fetchCarsDataThunk } from "../../redux/cars/operations"
import { selectCars, selectFilter, selectFilterBrand, selectFilterMileageFrom, selectFilterMileageTo, selectFilterPrice, selectLimit, selectPage } from "../../redux/selectors"

const Cards = () => {
  const dispatch = useDispatch()
  const cars = useSelector(selectCars)
  const page = useSelector(selectPage)
  const limit = useSelector(selectLimit)
  const filter = useSelector(selectFilter)
  const filterBrand = useSelector(selectFilterBrand)
  const filterPrice = useSelector(selectFilterPrice)
  const filterMileageFrom = useSelector(selectFilterMileageFrom)
  const filterMileageTo = useSelector(selectFilterMileageTo)


  useEffect(() => {
    (filterBrand !== '') ? dispatch(fetchCarsDataThunk({ page: `${page}`, limit: `${limit}`, make: `${filterBrand}` })) : dispatch(fetchCarsDataThunk({ page: `${page}`, limit: `${limit}` }))
    // dispatch(fetchCarsDataThunk({ page: `${page}`, limit: 12, make: `${filterBrand}`, price: `${filterPrice}` }))
  }, [dispatch, filterBrand, filterPrice, limit, page])
  return (
    <>
      <ul className="grid gap-x-[29px] gap-y-[50px] grid-cols-4 grid-rows-3 mt-12">
        {cars.map(item => <CardItem key={item.id} {...item} />)}
      </ul>
    </>
  )
}
export default Cards

