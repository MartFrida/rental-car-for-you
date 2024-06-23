import React from 'react'
import { selectIsLoggedIn } from '../redux/selectors'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  if (isLoggedIn) {
    return (
      <Navigate to='/catalog' />
    )
  }
  return children
}
