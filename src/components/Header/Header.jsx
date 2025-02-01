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
      <header className='text-3xl py-4 bg-sky-900/25 flex justify-between items-center px-4 fixed top-0 left-0 w-full z-10 backdrop-blur-sm p-4'>
        <NavLink to='/' className='text-white font-bold text-center transition-colors duration-300 '>
          <img className="hidden md:flex h-auto w-36 md:w-40" src={logo} alt='logo' />
        </NavLink>
        <div className="flex justify-between size-auto sm:gap-x-2 md:gap-x-6">
          <NavLink className='text-white transition-colors duration-300 font-medium hover:font-bold' to='/catalog'>
            Catalog
          </NavLink>
          <NavLink className='text-white  transition-colors duration-300 font-medium hover:font-bold' to='/favorites'>
            Favorites
          </NavLink>
          {/* <NavLink to='/catalog/new' className='text-white  transition-colors duration-300 font-medium hover:font-bold'>Add</NavLink> */}
          {!isLoggedIn &&
            <>
              <NavLink to='/login' className='text-white  transition-colors duration-300 font-medium hover:font-bold'>Login</NavLink>
              <NavLink to='/register' className='text-white transition-colors duration-300 font-medium hover:font-bold'>SignUp</NavLink>
            </>
          }
          {isLoggedIn && <button onClick={() => dispatch(logoutThunk())} className='text-white transition-colors duration-300 font-medium hover:font-bold'>{`Exit ${userName}`}</button>}
        </div>
      </header>
    </>

  )
}

export default Header