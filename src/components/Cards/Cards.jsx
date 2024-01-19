import { useEffect } from "react"
import CardItem from "../CardItem/CardItem"
import { useDispatch, useSelector } from "react-redux"
import { fetchCarsDataThunk } from "../../redux/cars/operations"
import { selectCars } from "../../redux/selectors"

const Cards = () => {
  const dispatch = useDispatch()
  const cars = useSelector(selectCars)
  console.log(cars)
  useEffect(() => {
    dispatch(fetchCarsDataThunk())

  }, [dispatch])
  return (
    <>
      <ul className="grid gap-4 grid-cols-4 grid-rows-3 my-32">
        {cars.map(item => <li key={item.id}><CardItem /></li>)}
        {/* <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem /> */}
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