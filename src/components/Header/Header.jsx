import { NavLink } from "react-router-dom"
import logo from '../../img/favicon.png'

const Header = () => {
  return (
    <>
      <header className='text-3xl py-4 bg-blue-950 flex justify-between items-center px-4 fixed top-0 left-0 w-full z-10'>
        <NavLink to='/' className='text-white font-bold text-center  transition-colors duration-300'>
          <img className="w-10" src={logo} alt='logo' />
        </NavLink>
        <div>
          <NavLink className='text-white mr-6  transition-colors duration-300' to='/catalog'>
            Catalog
          </NavLink>
          <NavLink className='text-white mr-6  transition-colors duration-300' to='/favorites'>
            Favorites
          </NavLink>
        </div>
      </header>
    </>

  )
}

export default Header