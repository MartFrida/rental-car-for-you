import { NavLink } from "react-router-dom"
import logo from '../../img/logo.png'

const Header = () => {
  return (
    <>
      <header className='text-3xl py-4 bg-sky-900/25 flex justify-between items-center px-4 fixed top-0 left-0 w-full z-10 backdrop-blur-sm'>
        <NavLink to='/' className='text-white font-bold text-center transition-colors duration-300 '>
          <img className="h-8" src={logo} alt='logo' />
        </NavLink>
        <div className="flex justify-between  md:w-[60%] lg:w-[35%] 2xl:w-[15%]">
          <NavLink className='text-white mr-6 transition-colors duration-300 font-medium hover:font-bold' to='/catalog'>
            Catalog
          </NavLink>
          <NavLink className='text-white mr-6  transition-colors duration-300 font-medium hover:font-bold' to='/favorites'>
            Favorites
          </NavLink>
          <NavLink to='/register'>SignUp</NavLink>
        </div>
      </header>
    </>

  )
}

export default Header