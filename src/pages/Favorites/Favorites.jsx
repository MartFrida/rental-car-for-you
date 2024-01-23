import CardItem from "../../components/CardItem/CardItem"
import { showLocalStorage } from "../../storage"

const Favorites = () => {

  const favoritesLS = showLocalStorage()

  return (
    <>
      <ul className="grid gap-x-[29px] gap-y-[50px] mt-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {favoritesLS?.map(item => <CardItem key={item.id} {...item} />)}
      </ul>
    </>
  )
}

export default Favorites