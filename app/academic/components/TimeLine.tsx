import Image from 'next/image'
import React from 'react'
import logoOracle from '../../../utils/image/academic/Oracle.png'
import logoHenry from '../../../utils/image/academic/Henry.jpg'
import logoLabsXd from '../../../utils/image/academic/LabsXD.png'
import logoColsubsidio from '../../../utils/image/academic/Colsubsidio.jpg'
import {BiSolidLeftArrow, BiSolidRightArrow} from 'react-icons/bi'

export const TimeLine = () => {
  return (
    <main className='bg-gradient-to-t from-slate-300 to-slate-200 px-2 py-2'>
        <div className='grid grid-cols-8 mt-2 gap-1'>
            {/* Star Element Oracle */}
            <div className='col-span-3 mb-5'>
                <div className='flex flex-col ' >
                    <div className='flex justify-center w-full'>
                        <h1 className='text-center font-bold text-lg my-3'>Backend Developer</h1>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe harum sed praesentium aperiam blanditiis corporis ipsum similique nemo a! Deleniti omnis harum nam dignissimos cumque ullam. Dolore, quis alias?</p>
                    </div>
                </div>
            </div>
            <div className='col-span-1 border-r-2 border-dashed border-emerald-700 flex items-center justify-end'>
                
                    <BiSolidLeftArrow
                        color='#EC1B24'
                        size={40}
                    />
                
            </div>
            <div className='flex col-span-1 border-l-2 border-dashed border-emerald-700 items-center ' >
                <div className='flex bg-red-600 h-20 w-20 rounded-full items-center justify-center transition-all duration-150 hover:bg-cyan-400 hover:text-slate-50 hover:transform'>
                    <p className='text-center font-bold text-slate-50'>Jun-23</p>
                </div>

            </div>
            <div className=' col-span-3 mb-5'>
                <div>
                    <Image
                        className='w-full h-36 rounded-2xl'
                        src={logoOracle}
                        alt='Oracle'
                    />

                </div>
            </div>
            {/* End Element */}

            {/* Star Element Henry*/}
            <div className=' col-span-3 mb-5'>
                <div>
                    <Image
                        className='w-full h-36 rounded-2xl object-cover'
                        src={logoHenry}
                        alt='Oracle'
                    />

                </div>
            </div>
            
            <div className='flex col-span-1 border-r-2 border-dashed border-emerald-700 items-center justify-end ' >
                <div className='flex bg-black h-20 w-20 rounded-full items-center justify-center transition-all duration-150 hover:bg-cyan-400 hover:text-slate-50 hover:transform'>
                    <p className='text-center font-bold text-slate-50'>Mar-23</p>
                </div>
            </div>
            <div className='col-span-1 border-l-2 border-dashed border-emerald-700 flex items-center justify-start'>
                
                    <BiSolidRightArrow
                        color='#000000'
                        size={40}
                    />
                
            </div>
            <div className='col-span-3'>
                <div className='flex flex-col ' >
                    <div>
                        <h1 className='text-center font-bold text-lg my-3'>FullStack Web Developer</h1>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe harum sed praesentium aperiam blanditiis corporis ipsum similique nemo a! Deleniti omnis harum nam dignissimos cumque ullam. Dolore, quis alias?</p>
                    </div>
                </div>
            </div>
            {/* End Element */}

            {/* Star Element Labs */}
            <div className='col-span-3 mb-5'>
                <div className='flex flex-col ' >
                    <div className='flex justify-center w-full'>
                        <h1 className='text-center font-bold text-lg my-3'>Salesforce Developer</h1>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe harum sed praesentium aperiam blanditiis corporis ipsum similique nemo a! Deleniti omnis harum nam dignissimos cumque ullam. Dolore, quis alias?</p>
                    </div>
                </div>
            </div>
            <div className='col-span-1 border-r-2 border-dashed border-emerald-700 flex items-center justify-end'>
                
                    <BiSolidLeftArrow
                        color='#214B8C'
                        size={40}
                    />
                
            </div>
            <div className='flex col-span-1 border-l-2 border-dashed border-emerald-700 items-center ' >
                <div className='flex bg-blue-900 h-20 w-20 rounded-full items-center justify-center transition-all duration-150 hover:bg-cyan-400 hover:text-slate-50 hover:transform'>
                    <p className='text-center font-bold text-slate-50'>Mar-23</p>
                </div>

            </div>
            <div className=' col-span-3 mb-5'>
                <div>
                    <Image
                        className='w-full h-36 rounded-2xl'
                        src={logoLabsXd}
                        alt='Oracle'
                    />

                </div>
            </div>
            {/* End Element */}

            {/* Star Element Colsubsidio*/}
            <div className=' col-span-3 mb-5'>
                <div>
                    <Image
                        className='w-full h-36 rounded-2xl object-cover'
                        src={logoColsubsidio}
                        alt='Oracle'
                    />

                </div>
            </div>
            
            <div className='flex col-span-1 border-r-2 border-dashed border-emerald-700 items-center justify-end ' >
                <div className='flex bg-sky-700 h-20 w-20 rounded-full items-center justify-center transition-all duration-150 hover:bg-cyan-400 hover:text-slate-50 hover:transform'>
                    <p className='text-center font-bold text-slate-50'>Feb-22</p>
                </div>
            </div>
            <div className='col-span-1 border-l-2 border-dashed border-emerald-700 flex items-center justify-start'>
                
                    <BiSolidRightArrow
                        color='#0267B2'
                        size={40}
                    />
                
            </div>
            <div className='col-span-3'>
                <div className='flex flex-col ' >
                    <div>
                        <h1 className='text-center font-bold text-lg my-3'>Análisis de Datos y Big Data</h1>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe harum sed praesentium aperiam blanditiis corporis ipsum similique nemo a! Deleniti omnis harum nam dignissimos cumque ullam. Dolore, quis alias?</p>
                    </div>
                </div>
            </div>
            {/* End Element */}


        </div>
    </main>
  )
}

