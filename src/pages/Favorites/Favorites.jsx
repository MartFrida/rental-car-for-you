import { useDispatch, useSelector } from "react-redux"
import { selectFavorites } from "../../redux/selectors"
import CardItem from "../../components/CardItem/CardItem"
import { useEffect } from "react"
import { setFavorites } from "../../redux/cars/slice"


const Favorites = () => {
  const favoritesAr = useSelector(selectFavorites)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(setFavorites())
  // }, [dispatch])
  return (
    <>
      <ul className="grid gap-x-[29px] gap-y-[50px] grid-cols-4 grid-rows-3 mt-12">
        {favoritesAr?.map(item => <CardItem key={item.id} {...item} />)}
      </ul>
    </>
  )
}

export default Favorites