import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../components/Container/Container'

const Page404 = () => {
  return (
    <Container >
      <div className='flex flex-col justify-center items-center min-h-[80vh]'>
        <h1>Sorry, page is not found </h1>
        <Link to='/'>Go to Home Page</Link>
      </div>
    </Container>
  )
}

export default Page404