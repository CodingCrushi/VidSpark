import React from 'react'
import Hero from './components/Hero'
import Cards from './components/Cards'

const Home = () => {
  return (
    <>
      <div className='px-5 w-[98%] md:w-[92%] mx-auto py-4' >
        <Hero />
        <Cards />
      </div>
    </>
  )
}

export default Home