import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import Link from "next/link";

const product = () => {
  return (
    <div>
      <Navbar />
      {/* <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Products
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Everything you
              <br className="hidden md:block" />
              can imagine{" "}
              <span className="inline-block text-deep-purple-accent-400">
                is real
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
            <div className="flex items-center">
              <div className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-700 hover:bg-purple-700 focus:shadow-outline focus:outline-none">
                <Link href="/">Get started</Link>
              </div>
              <div className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700">
                <Link href="/" aria-label="">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}



      {/* Diplay Products section */}

{/* 
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
      <div className="flex items-center justify-center lg:w-1/2">
          <div className="w-2/5">
            <img className="object-cover" src="https://kitwind.io/assets/kometa/one-girl-phone.png" alt="" />
          </div>
          <div className="w-5/12 -ml-16 lg:-ml-32">
            <img className="object-cover" src="https://kitwind.io/assets/kometa/two-girls-phone.png" alt="" />
          </div>
        </div>
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 text-teal-900 rounded-full">Brand new</p>
            </div>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
              Everything you
              <br className="hidden md:block" />
              can imagine{' '}
              <span className="inline-block text-deep-purple-accent-400">is real</span>
            </h2>
            <p className="text-gray-700 text-base md:text-lg">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.</p>
          </div>
          <div className="flex items-center space-x-3">
            <div  className="w-32 transition duration-300 hover:shadow-lg">
            <Link href="/">
              <img src="https://kitwind.io/assets/kometa/app-store.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
            </Link>
            </div>
            <div className="w-32 transition duration-300 hover:shadow-lg">
            <Link href="/" >
              <img src="https://kitwind.io/assets/kometa/google-play.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
            </Link>
            </div>
          </div>
        </div>
        
      </div>
      
    </div> */}















{/* 
    <div className="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl">
      <div className="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
        <div className="max-w-xl mb-6">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            The quick, brown fox
            <br className="hidden md:block" />
            jumps over{' '}
            <span className="inline-block text-deep-purple-accent-400">
              a lazy dog
            </span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo.
          </p>
        </div>
        <div className="flex items-center">
          <div className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-700 hover:bg-purple-700 focus:shadow-outline focus:outline-none">
          <Link
            href="/"
            
          >
            Get started
          </Link>
          </div>
          <div className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
          <Link
            href="/"
            aria-label=""
            
          >
            Learn more
          </Link>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://kitwind.io/assets/kometa/two-thirds-phone.png"
          className="object-cover object-top w-full h-64 mx-auto lg:h-auto xl:mr-24 md:max-w-sm"
          alt=""
        />
      </div>
    </div> */}



      <Footer />
    </div>
  );
};

export default product;
