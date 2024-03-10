import React from 'react'
import { BentoProject } from './components'
import Header from '../components/Header'



//grid-rows-[200px_minmax(900ox,_ifr)_100px]

const page = () => {
  return (

    <main className='flex items-center min-h-full justify-center bg-white mt-3 '>
      <Header/>
      <BentoProject/>     
    </main>    
    
  )
}

export default page