import React from 'react'

interface Props {
    title: string;
    className?: string;
    children?: React.ReactNode;
}


const BentoItem = ( {title, className, children}:Props ) => {
  return (
    <article className={`${className} relative rounded-xl backdrop-blur-md border border-black/10 shadow-inner shadow-white/10 `}>
        <slot name='image'></slot>
        <div className='select-none flex flex-col gap-1 p-6 text-lg z-20 justify-end h-full'>
            <h2 className='font-semibold text-3xl text-balance  mb-4'>{title}</h2> 
            {children}
            <slot name='content'></slot>
        </div>
    </article>
  )
}

export default BentoItem