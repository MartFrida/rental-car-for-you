import CardItem from "../../components/CardItem/CardItem"
import { loadFromLocalStorage } from "../../storage"

const Favorites = () => {

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

  return (
    <>
      <ul className="grid gap-x-[29px] gap-y-[50px] mt-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {arrayLocalStorage?.map(item => <CardItem key={item.id} {...item} />)}
      </ul>
    </>
  )
}

export default Favorites