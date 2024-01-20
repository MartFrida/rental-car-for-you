import Cards from "../../components/Cards/Cards"
import Filters from "../../components/Filters/Filters"

const Catalog = () => {
  return (
    <>
      <Filters />
      <Cards />
      <button>Load more</button>
    </>
  )
}

export default Catalog