import { useSelector } from "react-redux"
import { selectFavorites } from "../../redux/selectors"
import CardItem from "../../components/CardItem/CardItem"

const Favorites = () => {
  const favoritesAr = useSelector(selectFavorites)
  return (
    <>
      <ul className="grid gap-x-[29px] gap-y-[50px] grid-cols-4 grid-rows-3 mt-12">
        {favoritesAr.map(item => <CardItem key={item.id} {...item} />)}
      </ul>
    </>
  )
}

export default Favorites