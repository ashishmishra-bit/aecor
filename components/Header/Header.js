import head from './Header.module.css';
import Image from "next/image";

import SignUpNew from '../SignUp/SignUpNew';
import Link from "next/link";

const Header = () => {
  return (
    <div className={head.header}>
      <div className="absolute ml-10">
        <Image className = "animate-pulse" src = "/img/art.png" height={229} width={231}/>
      </div>
      <div className={head.headerText}>
        <Image  src="/img/HeaderText.png" width="435px" height="225px" />
      </div>
      <div className={head.about}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim tempus ligula, sed egestas libero pharetra eget.
      </div>
      <Link href="">
      <div className={head.headerButton}>Open Account</div>
      </Link>
      <div  className={head.headerImage}>
        <div  whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
        <Image src="/img/HeaderImage.png" width="650px" height="427px" />
        </div>        
      </div>
    </div>

    // <> 
    // <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
    //   <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
    //     <img
    //       src="/img/HeaderImage.png"
    //       className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
    //       alt=""
    //     />
    //   </div>
    //   <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
    //     <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
    //       <div className="max-w-xl mb-6">
    //         <div>
    //           <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
    //             Brand new
    //           </p>
    //         </div>
    //         <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
    //           We will bring your
    //           <br className="hidden md:block" />
    //           business{' '}
    //           <span className="inline-block text-deep-purple-accent-400">
    //             online
    //           </span>
    //         </h2>
    //         <p className="text-base text-gray-700 md:text-lg">
    //           Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    //           accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
    //           quae. explicabo.
    //         </p>
    //       </div>
    //       <form>
    //         <div className="flex flex-col md:flex-row">
    //           <input
    //             placeholder="Name"
    //             required=""
    //             type="text"
    //             className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
    //           />
    //           <input
    //             placeholder="Email"
    //             required=""
    //             type="text"
    //             className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
    //           />
    //         </div>
    //         <div className="flex items-center mt-4">
    //           <button
    //             type="submit"
    //             className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-700 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
    //           >
    //             Subscribe
    //           </button>
    //           <a
    //             href="/"
    //             aria-label=""
    //             className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-700 hover:text-purple-800"
    //           >
    //             Learn more
    //           </a>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    
    // </>
  )
}

export default Header
