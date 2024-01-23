import { useDispatch, useSelector } from "react-redux"
import { selectFavorites } from "../../redux/selectors"
import CardItem from "../../components/CardItem/CardItem"
import { useEffect } from "react"
import { setFavorites } from "../../redux/cars/slice"
import { loadFromLocalStorage } from "../../storage"


const Favorites = () => {
  const favoritesAr = useSelector(selectFavorites)
  const dispatch = useDispatch()
  const arrayLocalStorage = []
  const showLocalStorage = () => {
    for (var i = 0, len = localStorage.length; i < len; i++) {
      let key = localStorage.key(i)
      let value = loadFromLocalStorage(key)
      console.log(value)
      arrayLocalStorage.push(value)
    }
  }
  showLocalStorage()
  console.log(arrayLocalStorage)
  console.log(favoritesAr)
  // useEffect(() => {
  //   dispatch(setFavorites())
  // }, [dispatch])
  return (
    <>
      <ul className="grid gap-x-[29px] gap-y-[50px] grid-cols-4 grid-rows-3 mt-12">
        {arrayLocalStorage?.map(item => <CardItem key={item.id} {...item} />)}
      </ul>
    </>
  )
}

export default Favorites