import head from "./Header.module.css";
import Image from "next/image";

import SignUpNew from "../SignUp/SignUpNew";
import Link from "next/link";

const Header = () => {
  return (
    // <div className={head.header}>
    //   <div className="absolute ml-10">
    //     <Image className = "animate-pulse" src = "/img/art.png" height={229} width={231}/>
    //   </div>
    //   <div className={head.headerText}>
    //     <Image  src="/img/HeaderText.png" width="435px" height="225px" />
    //   </div>
    //   <div className={head.about}>
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim tempus ligula, sed egestas libero pharetra eget.
    //   </div>
    //   <Link href="">
    //   <div className={head.headerButton}>Open Account</div>
    //   </Link>
    //   <div  className={head.headerImage}>
    //     <div  whileHover={{ scale: 1.05 }}
    //           whileTap={{ scale: 0.95 }}>
    //     <Image src="/img/HeaderImage.png" width="650px" height="427px" />
    //     </div>
    //   </div>
    // </div>

    <>
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 50 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://finkarma.b-cdn.net/wp-content/uploads/aecor/img/HeaderImage.png"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              AECOR
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-purple-800 sm:text-4xl sm:leading-none">
              Enjoy Tech
              {/* <br className="hidden md:block" /> */}
              <br/>
              <span className="inline-block text-deep-purple-accent-400">
                Enjoy Investing
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-500 md:text-lg">
              Stay on top of the market with our innovative technology, extensive product access, award-winning education, and specialized service.
            
            </p>
            <div className="flex items-center">
              <a
                href="/signup"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-700 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
              >
                Open Account
              </a>
              <a
                href="#services"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
