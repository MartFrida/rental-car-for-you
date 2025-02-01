import React, { useState } from "react";
import { NavLink } from "react-router-dom"
import logo from '../../img/logo.png'
import { selectIsLoggedIn } from "../../redux/selectors"
import { useDispatch, useSelector } from "react-redux"
import { logoutThunk } from "../../redux/auth/operations"

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)

  const dispatch = useDispatch()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className='text-3xl py-4 bg-sky-900/25 flex flex-wrap justify-between items-center px-4 fixed top-0 left-0 w-full z-10 backdrop-blur-sm p-4'>
        <NavLink to='/' className='text-white font-bold text-center transition-colors duration-300 '>
          <img className=" h-auto w-36 md:w-40" src={logo} alt='logo' />
        </NavLink>
        <div className="flex items-center lg:order-2">
          {!isLoggedIn &&
            <>
              <NavLink to='/login' className="text-white hover:bg-blue-950  font-medium rounded-lg  px-4 lg:px-5 py-2 lg:py-2.5 mr-2">Log in
              </NavLink>
              <NavLink to='/register' className="text-white hover:bg-blue-950  font-medium rounded-lg  px-4 lg:px-5 py-2 lg:py-2.5 mr-2">SignUp
              </NavLink>
            </>}
          {isLoggedIn && <button onClick={() => dispatch(logoutThunk())} className="text-white hover:bg-blue-950  font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2">Exit
          </button>
          }
        </div>
        {/* Іконка бургер-меню для мобільних */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Навігаційне меню */}
        <nav
          className={`${isMenuOpen ? "block" : "hidden"
            } md:flex md:items-center w-full md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0">
            <li>
              <NavLink to='/catalog'
                className="block font-medium py-2 text-white hover:text-blue-950"
              >
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink to='/favorites'
                className="block font-medium py-2 text-white hover:text-blue-950"
              >
                Favorites
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>

  )
}

export default Header