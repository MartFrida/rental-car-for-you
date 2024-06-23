import React from 'react'
import { selectIsLoggedIn } from '../redux/selectors'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  if (isLoggedIn) {
    return (
      children
    )
  }
  return <Navigate to='/login' />
}
