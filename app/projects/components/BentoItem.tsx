import React from 'react'

interface Props {
    title: string;
    className?: string;
    children?: React.ReactNode;
}


const BentoItem = ( {title, className, children}:Props ) => {
  return (
    <article className={`${className} relative rounded-xl backdrop-blur-md border border-black/10 shadow-inner shadow-white/10 group overflow-hidden `}>
        <div
          className='absolute z-10 bottom-0 top-0 w-full h-full bg-gradient-to-b from-transparent from-40% via-black/20 to-black/50'
        >
        </div>
        <slot name='image'></slot>
        <div className='relative select-none flex flex-col gap-1 p-6 text-lg z-20 justify-end h-full'>
            <h1 className='font-bold text-3xl text-balance text-slate-50  mb-4'>{title}</h1> 
            {children}
            <slot name='content'></slot>
        </div>
    </article>
  )
}

export default BentoItem