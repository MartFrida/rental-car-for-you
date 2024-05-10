
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Catalog from './pages/Catalog/Catalog'
import Favorites from './pages/Favorites/Favorites'
import Page404 from './pages/Page404/Page404'
import Register from './pages/Register/Register'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route index element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App
