import { useEffect } from "react"
import CardItem from "../CardItem/CardItem"
import { useDispatch, useSelector } from "react-redux"
import { fetchCarsDataThunk } from "../../redux/cars/operations"
import { selectCars } from "../../redux/selectors"

const Cards = () => {
  const dispatch = useDispatch()
  const cars = useSelector(selectCars)
  useEffect(() => {
    dispatch(fetchCarsDataThunk())
  }, [dispatch])
  return (
    <>
      <ul className="grid gap-x-[29px] gap-y-[50px] grid-cols-4 grid-rows-3 mt-12">
        {cars.map(item => <CardItem key={item.id} {...item} />)}
      </ul>
    </>
  )
}
export default Cards

// display: grid;
//   max-width: calc(100vw - 48px);
//   grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
//   grid-gap: 16px;
//   margin-top: 0;
//   margin-bottom: 0;
//   padding: 0;
//   list-style: none;
//   margin-left: auto;
//   margin-right: auto;