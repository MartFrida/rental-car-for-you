import Cards from "../../components/Cards/Cards"
import { useSelector } from "react-redux"
import { selectFavorites } from "../../redux/selectors"
import Container from "../../components/Container/Container"
import { Link } from "react-router-dom"


const Favorites = () => {
  const favoriteCars = useSelector(selectFavorites)
  return (
    <Container>
      {
        favoriteCars.length > 0 ?
          <Cards onlyFavorites={true} /> :
          <h1>You don't have any favorites yet.  Select from the <Link to='/catalog' className='text-black transition  duration-300 ease-in-out hover:bg-butprimary hover:text-white p-4 lg:p-5 font-semibold text-2xl rounded-xl'>Catalog</Link></h1>
      }
    </Container>
  )
}

export default Favorites