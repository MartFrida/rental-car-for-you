import React from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { selectFavorites } from '../../redux/selectors'
import { deleteFromFavorites, setToFavorites } from '../../redux/cars/slice'
import { Checkbox } from '@mui/material'

const FavoriteCheckbox = ({ car }) => {
  const dispatch = useDispatch()
  const favoriteCars = useSelector(selectFavorites)

  const setFavoriteStatus = (car, status) => {
    status ? dispatch(setToFavorites(car)) : dispatch(deleteFromFavorites(car))
  }

  const label = { inputProps: { 'arial-label': 'Favorite checkbox' } }

  return (
    <Checkbox className='absolute top-[2rem] right-[-6.5rem] text-white'
      {...label}
      icon={<BsHeart className='text-white' />}
      checkedIcon={<BsHeartFill className='fill-white' />}
      id={crypto.randomUUID()}
      checked={favoriteCars.some(favoriteCar => favoriteCar.id === car.id)}
      onChange={e => { setFavoriteStatus(car, e.target.checked) }}
    />
  )
}

export default FavoriteCheckbox