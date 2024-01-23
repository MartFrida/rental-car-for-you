import { useDispatch } from "react-redux"
import CardItem from "../../components/CardItem/CardItem"
import { showLocalStorage } from "../../storage"
import { setFavorites } from "../../redux/cars/slice"
import { useState } from "react"


const Favorites = () => {
  const favAr = showLocalStorage()

  return (
    <>
      <ul className="grid gap-x-[29px] gap-y-[50px] mt-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {favAr?.map(item => <CardItem key={item.id} {...item} />)}
      </ul>
    </>
  )
}

export default Favorites