import { url } from "inspector"
import BentoItem from "./BentoItem"

export const BentoProject = () => {
  return (
    <section className='w-full max-w-[1400px] grid grid-cols-10 auto-rows-[30rem] gap-4 mx-auto p-20'>
        <BentoItem className='col-span-10 md:col-span-4' title='Javascript'>
            <div className='flex flex-col gap-2'>
                <div className="absolute left-0 top-0 bottom-0 h-full w-full bg-center bg-cover bg-no-repeat " style={{backgroundImage: `url('/utils/image/henry.jpg')`}}>
                    Holiiii
                </div>
                <p className='text-base text-balance'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.</p>
                <button className='bg-[#258D84] hover:bg-green-700 text-white font-bold py-2 px-4 transition duration-1000 rounded-full'>View Projects</button>
            </div>
        </BentoItem>
        <BentoItem className='col-span-10 md:col-span-6' title='TypeScript' />
        <BentoItem className='col-span-10 md:col-span-6' title='Salesforce'/>
        <BentoItem className='col-span-10 md:col-span-4' title='Power Apps'/>

    </section>
  )
}
