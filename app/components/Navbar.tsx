import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" flex justify-between bg-gradient-to-l from-emerald-50 via-teal-100 via-cyan-100 via-sky-50 to-zinc-50 mx-auto w-full border " >
      <div className="ml-1" >
        <Link href='/' className="" >Jheison Vargas</Link>
      </div>
      <div className="flex justify-around  w-1/2 " >
        <Link href="skills" className="">Skills</Link>
        <Link href="" >Projects </Link>
        <Link href="" >Academic</Link>
        <Link href="" >Work Background</Link>
      </div>
    </nav>
  );
};

export default Navbar;
