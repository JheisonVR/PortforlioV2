import React from 'react'
import nextJsLogo from '../../utils/image/Frameworks/1_KjDNlXerarz8uo18y2FXvA.png'
import Image from 'next/image'


//grid-rows-[200px_minmax(900ox,_ifr)_100px]

const page = () => {
  return (

    <main className=' grid min-h-full grid-cols-3 gap-2 justify-center bg-white mt-3 '>
      <div className='flex justify-center items-center text-md text-slate-200 bg-emerald-500 col-span-full rounded-xl h-5 row-'>
        <h1 className='font-bold'>Framework: Next js</h1>
      </div>
      {/* Card Group */}
      <div className="group h-60 w-full [perspective:1000px] col-span-3 ">
        <div className="relative h-full w full rounded-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <img
              className='h-full w-full rounded-xl object-cover shadow-xl shadow-black/40'
              src='https://images6.alphacoders.com/133/1330235.png'
              alt='Train'
            />
          </div>
          <div className='absolute inset-0 h-full w-full rounded-xl bg-black/80 px12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
            <div className='flex min-h-full flex-col items-center justify-center'>
              <h1 className='text-3xl font-bold'>Trencito cañero</h1>
              <p className='text-lg'>Que rueda por las calles</p>
              <p className='text-base'>Trencito de mi valle</p>
              <button className='mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900'>Que bello eres tu</button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='flex flex-col col-span-1'>
        <div className='flex w-full justify-center border border-emerald-950 '>
          <h1>Title</h1>
        </div>
        <div className='h-full border border-emerald-950'></div>
      </div> */}

      <div className="group h-96 w-60 [perspective:1000px]  ">
        <div className="relative h-full w full rounded-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">        
          <div className="absolute inset-0">
            <Image
              className='h-full w-full rounded-xl object-cover shadow-xl shadow-black/40'
              src= {nextJsLogo}
              alt='Train'
            />
          </div>
          <div className='absolute inset-0 h-full w-full rounded-xl bg-black/80 px12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
            <div className='flex min-h-full flex-col items-center justify-center'>
              <h1 className='text-3xl font-bold'>Trencito cañero</h1>
              <p className='text-lg'>Que rueda por las calles</p>
              <p className='text-base'>Trencito de mi valle</p>
              <button className='mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900'>Que bello eres tu</button>
            </div>
          </div>
        </div>
      </div>

      <div className='c'>

      </div>




      

    </main>    
    
  )
}

export default page