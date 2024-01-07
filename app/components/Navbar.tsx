import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    // <nav className=" flex justify-between bg-gradient-to-l from-emerald-800 to-[#007670] mb-2 w-full text-white  " >
    
    <nav className=" flex justify-between bg-transparent mb-2 w-full text-white  " >
      <div className="ml-1" >
        <Link href='/' className="" >Jheison Vargas</Link>
      </div>
      <div className="flex justify-around  w-1/2 " >
        <Link href="skills" className="">Skills</Link>
        <Link href="/projects" >Projects </Link>
        <Link href="/academic" >Academic</Link>
        <Link href="/workBackground" >Work Background</Link>
      </div>
    </nav>
  );
};

export default Navbar;
