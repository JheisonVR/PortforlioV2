import React from 'react'
import { BentoProject } from './components'



//grid-rows-[200px_minmax(900ox,_ifr)_100px]

const page = () => {
  return (

    <main className='flex items-center min-h-full justify-center bg-white mt-3 '>
      <BentoProject/>     
    </main>    
    
  )
}

export default page