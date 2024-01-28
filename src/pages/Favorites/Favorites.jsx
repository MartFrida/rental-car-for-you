import { Container } from "@mui/material"
import CardItem from "../../components/CardItem/CardItem"
import Cards from "../../components/Cards/Cards"


const Favorites = () => {
  return (
    <Container>
      <Cards onlyFavorites={true} />
    </Container>
  )
}

export default Favorites