import React from 'react'
import Navbar from '../components/Navbar'

const SkillPage = () => {
  return (
    <main>
      <div className=" flex h-80 bg-slate-400 flex justify-between">
        <div className="bg-emerald-300 container border border-gray-100 flex justify-center items-center hover:scale-75 hover:bg-yellow-100 transition-all delay-150 duration-500 ">
          1
        </div>
        <div className="bg-lime-300 container border border-gray-100 flex justify-center items-center hover:bg-green-600 transition delay-150 duration-300 ease-in-out">
          2
        </div>
        <div className="bg-amber-300 container border border-gray-100 flex justify-center items-center hover:skew-x-6 hover:skew-y-2 transition ">
          3
        </div>
        <div className="bg-teal-300 container border border-gray-100 flex justify-center items-center hover:rotate-180 transition duration-1000 delay-150 ">
          4
        </div>
        <div className="bg-indigo-300 container border border-gray-100 flex justify-center items-center hover:origin-bottom -rotate-12 transition duration-700 delay-100 ">
          5
        </div>
        <div className="bg-purple-300 container border border-gray-100 flex justify-center items-center hover:sepia transition ">
          6
        </div>
      </div>
    </main>
  );
}

export default SkillPage