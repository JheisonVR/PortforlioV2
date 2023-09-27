import React from 'react'

export const Carrousel = () => {
  return (
    <div>
        <div className='relative' data-carousel='static'>
            <div
                id='default-carousel'
                className='overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96'
            >
                <div className='hidden duration-700 ease-in-out' data-carousel-item>
                    <span className='absolute top-1/2 left-1/2 font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl'>
                        primer slide
                    </span>
                    <img
                        src='https://areajugones.sport.es/wp-content/uploads/2021/08/neon-genesis-evangelion-1-1422x800.jpg' 
                        alt='First' 
                        className='block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
