import React from 'react'
import { AcademicProps } from '../page'
import Image from 'next/image'



export const CardAcademic = ( {academic} : { academic : AcademicProps } ) => {
  return (
    <div className='w-96 h-96 flex m-3 rounded overflow-hidden border cursor-pointer' >
      <div className='p-2'>
        <div className='h-30 font-bold text-center pb-2 border-b mb-2'>
          <p className='text-base'>
            {academic.institucion}
          </p>
        </div>
        <div className='font-bold text-center pb-2 border-b mb-2'>
          <p className='text-sm'> 
            {academic.dialog.title} 
          </p>
        </div>          
        
          <img
            src={academic.image}
            alt='image'
          />
        <div className='' >
          <p
            className='text-xs'
          > 
            {academic.dialog.description} 
          </p>
        </div>
      </div>
    </div>
  )
}
