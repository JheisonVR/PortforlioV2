import { url } from "inspector"
import BentoItem from "./BentoItem"
import Link from "next/link"

export const BentoProject = () => {
  return (
    <section className='w-full max-w-[1400px] grid grid-cols-10 auto-rows-[30rem] gap-4 mx-auto p-20'>
        <BentoItem className='col-span-10 md:col-span-4' title='React'>
          <div className='flex flex-col gap-2'>
            <div slot="image" className="absolute left-0 top-0 bottom-0 h-full w-full group-hover:scale-110 transition-scale duration-1000 ease-in-out opacity-85 bg-blend-luminosity bg-cover bg-left-bottom bg-no-repeat -z-10" 
              style={{backgroundImage: "url('/ReactBG.png')"}}>
            </div>
            
              <p slot="content" className='text-base text-balance text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.</p>
              <Link className='bg-[#258D84] hover:bg-green-700 text-white font-bold py-2 px-4 transition duration-1000 rounded-full' href={""}>View Projects</Link>
            
          </div>
        </BentoItem>
        <BentoItem className='col-span-10 md:col-span-6' title='Next JS'>
          <div className='flex flex-col gap-2'>
            <div slot="image" className="absolute left-0 top-0 bottom-0 h-full w-full group-hover:scale-110 transition-scale duration-1000 ease-in-out opacity-85 bg-blend-luminosity bg-center bg-cover bg-no-repeat -z-10" 
              style={{backgroundImage: "url('/NextBG.jpg')", backgroundSize: "100% 100%"}}>
            </div>
            
              <p slot="content" className='text-base text-balance text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.</p>
              <Link className='bg-[#258D84] hover:bg-green-700 text-white font-bold py-2 px-4 transition duration-1000 rounded-full' href={""}>View Projects</Link>
            
          </div>
        </BentoItem>
        <BentoItem className='col-span-10 md:col-span-6' title='Salesforce'>
          <div className='flex flex-col gap-2'>
            <div slot="image" className="absolute left-0 top-0 bottom-0 h-full w-full group-hover:scale-110 transition-scale duration-1000 ease-in-out opacity-85 bg-blend-luminosity bg-right  bg-cover bg-no-repeat -z-10" 
              style={{backgroundImage: "url('/SalesforceBG.jpg')"}}>
            </div>
            
              <p slot="content" className='text-base text-balance '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.</p>
              <Link className='bg-[#258D84] hover:bg-green-700 text-white font-bold py-2 px-4 transition duration-1000 rounded-full' href={""}>View Projects</Link>
            
          </div>
        </BentoItem>
        <BentoItem className='col-span-10 md:col-span-4' title='Astro'>
          <div className='flex flex-col gap-2'>
            <div slot="image" className="absolute left-0 top-0 bottom-0 h-full w-full group-hover:scale-110 transition-scale duration-1000 ease-in-out opacity-85 bg-blend-luminosity bg bg-center bg-cover bg-no-repeat -z-10" 
              style={{backgroundImage: "url('/AstroBG.jpg')"}}>
            </div>
            
              <p slot="content" className='text-base text-balance text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.</p>
              <Link className='bg-[#258D84] hover:bg-green-700 text-white font-bold py-2 px-4 transition duration-1000 rounded-full' href={""}>View Projects</Link>
            
          </div>
        </BentoItem>
        

    </section>
  )
}
