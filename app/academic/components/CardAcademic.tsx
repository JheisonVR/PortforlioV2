import React from 'react'
import { AcademicProps } from '../page'
import Image from 'next/image'



export const CardAcademic = ( {academic} : { academic : AcademicProps } ) => {
  return (
    <div className='w-72 h-80 m-3 rounded overflow-hidden border cursor-pointer' >
      <div className='p-2'>
        <div className='font-bold text-center pb-2 border-b mb-2'>
          <p className='text-lg'>
            {academic.institucion}
          </p>          
          <p className='text-sm'> 
            {academic.dialog.title} 
          </p>
        </div>
          <img
            src={academic.image}
            alt='image'
          />
        <div className='' >

          <p> {academic.dialog.description} </p>
        </div>
      </div>
    </div>
  )
}
