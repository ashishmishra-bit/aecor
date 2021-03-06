import Link from "next/link";



import { useState } from "react";
import Image from "next/image";

export const Navbar = () => {
  
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap bg-white py-2 px-8 lg:px-28  w-full z-10 top-0 dark:border-gray-700 dark:bg-gray-900">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 z-10">
            <Image src="/img/logo.png" alt="logo" width={160} height={52} />
          </a>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-purple-800 rounded lg:hidden text-purple-800 ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex  lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full  items-start  flex flex-col lg:h-auto lg:items-start">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-purple-800 font-bold items-center justify-center hover:border-purple-800 hover:border-b-2  ">
                Home
              </a>
            </Link>

            <Link href="#services">
              <a  className="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-purple-800 font-bold items-center justify-center hover:border-purple-800 hover:border-b-2  ">
                Services
              </a>
            </Link>

            <Link href="/product">
              <a className="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-purple-800 font-bold items-center justify-center hover:border-purple-800 hover:border-b-2 ">
                Product
              </a>
            </Link>
            <Link href="/newSignup">
            <a className="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-purple-800 font-bold items-center justify-center hover:border-purple-800 hover:border-b-2 ">
                Contact Us
              </a>
            </Link>            
          </div>
        </div>
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-min`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full  items-start  flex  lg:h-auto lg:items-start ml-5">
            <Link href="https://online.aecorcapitalplus.com:3000/#/app" >
              <a target="_blank">
              <button className="bg-transparent hover:bg-transparent bg-purple-800 text-white font-semibold lg:flex-grow hover:text-purple-800 py-2 px-4 border hover:border-purple-800  rounded mr-6">
                Sign In
              </button>
              </a>
            </Link>

            <Link href="/signup">
             <a target="_blank">
             <button className="bg-transparent hover:bg-purple-800 text-purple-800 font-semibold lg:flex-grow hover:text-white py-2 px-4 border border-purple-800 hover:border-transparent rounded lg:animate-bounce ">
                Open Account
              </button>
             </a>
            </Link>           
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
