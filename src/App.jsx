import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Catalog from './pages/Catalog/Catalog'
import Favorites from './pages/Favorites/Favorites'
import Page404 from './pages/Page404/Page404'
import Register from './pages/Register/Register'
import Login from './components/Login/Login'
import PrivateRoute from './routesConfig/PrivateRoute'
import { PublicRoute } from './routesConfig/PublicRoute'
import { AddItem } from './components/AddItem/AddItem'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { refreshThunk } from './redux/auth/operations'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(refreshThunk())
  }, [dispatch])
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route index element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/favorites' element={
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        } />
        <Route path='/catalog/new' element={
          <PrivateRoute>
            <AddItem />
          </PrivateRoute>
        } />
        <Route path='/register' element={
          <PublicRoute>
            <Register />
          </PublicRoute>

        } />
        <Route path='/login' element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App
