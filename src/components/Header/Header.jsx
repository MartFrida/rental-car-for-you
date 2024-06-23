import { NavLink } from "react-router-dom"
import logo from '../../img/logo.png'
import { selectIsLoggedIn, selectUserName } from "../../redux/selectors"
import { useDispatch, useSelector } from "react-redux"
import { logoutThunk } from "../../redux/auth/operations"

const Header = () => {
  const userName = useSelector(selectUserName)
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const dispatch = useDispatch()

  return (
    <>
      <header className='text-3xl py-4 bg-sky-900/25 flex justify-between items-center px-4 fixed top-0 left-0 w-full z-10 backdrop-blur-sm'>
        <NavLink to='/' className='text-white font-bold text-center transition-colors duration-300 '>
          <img className="h-8" src={logo} alt='logo' />
        </NavLink>
        <div className="flex justify-between md:w-[80%] lg:w-[55%] 2xl:w-[25%]">
          <NavLink className='text-white mr-6 transition-colors duration-300 font-medium hover:font-bold' to='/catalog'>
            Catalog
          </NavLink>
          <NavLink className='text-white mr-6  transition-colors duration-300 font-medium hover:font-bold' to='/favorites'>
            Favorites
          </NavLink>
          <NavLink to='/catalog/new'>Add</NavLink>
          {!isLoggedIn &&
            <>
              <NavLink to='/login'>Login</NavLink>
              <NavLink to='/register'>SignUp</NavLink>
            </>
          }
          {isLoggedIn && <button onClick={() => dispatch(logoutThunk())}>{userName || 'Exit'}</button>}
        </div>
      </header>
    </>

  )
}

export default Header