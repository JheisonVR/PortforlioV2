import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header
    id='header-nav'
    className='fixed w-screen py-2 z-50 top-0 px-8 lg:px-0  text-emerald-700'
    >
        <div
        className='grid grid-cols-3 max-w-7xl mx-auto items-center justify-between'
        >
            <Link
            className='col-span-1 font-bold'
            href={"/"}
            >
                Home
            </Link>        
            <nav className='col-span-1 justify-self-center'>
                <ul className='flex gap-4'>
                    <li className='hover:underline'>Projects</li>
                    <li className='hover:underline'>Resume</li>
                </ul>
            </nav>
            <Link
            className='border rounded-full inline-block border-emerald-600 px-4 py-2 justify-self-end hover:bg-white hover:text-black duration-300'
            href={"/contact"}
            >
                Contact
            </Link>
        </div>
    </header>
  )
}

export default Header