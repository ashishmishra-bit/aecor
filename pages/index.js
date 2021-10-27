import Head from "next/head";
import Header from "../components/Header/Header";
import Navbar from "../components/NavBar/Navbar";
import Card from "../components/Card/card";
import Product from "../components/OurProduct/Product";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import We from "../components/WhyWe/We";
import { useSpring, animated, config } from 'react-spring';
const calc = (x, y) => [-(y - window.innerHeight / 2) / 50, (x - window.innerWidth / 2) / 50, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
export default function Home() {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))
  return (
    <div>
      <Head>
        <title>Aecor</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon1.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Navbar />
      <div>
        <Header />
        <We />
        {/* Body of Home page */}
        {/* <div className="py-10">
          <div className="mx-auto text-center mt-10 lg:text-4xl text-purple-900 font-bold mb-5 text-3xl">
            <p>What we Offer !</p>
          </div>
          <div className="absolute ml-5  hidden lg:block">
            <Image src="/img/art.png" height={229} width={231} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-px justify-items-center rounded-lg z-10">
            <Card
              title="Stock"
              imgURL="/img/stock.png"
              description="Invest in thousands of companies and fractional shares with as little as $5 using our trading tools and analytics to create your own financial portfolio."
            />
            <Card
              title="Crypto"
              imgURL="/img/crypto.png"
              description="Invest in thousands of companies and fractional shares with as little as $5 using our trading tools and analytics to create your own financial portfolio."
            />
            <Card
              title="Insurance"
              imgURL="/img/insurance.png"
              description="Invest in thousands of companies and fractional shares with as little as $5 using our trading tools and analytics to create your own financial portfolio."
            />
          </div>
        </div> */}

        <div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-purple-700">
            <svg className="text-white w-7 h-7" viewBox="0 0 24 24">
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points=" 8,5 8,1 16,1 16,5"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="9,15 1,15 1,5 23,5 23,15 15,15"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="22,18 22,23 2,23 2,18"
                strokeLinejoin="round"
              />
              <rect
                x="9"
                y="13"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                width="6"
                height="4"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-purple-800 sm:text-4xl sm:leading-none">
              Let us handle
              <br className="hidden md:block" />
              your next{' '}
              <span className="inline-block text-deep-purple-accent-400">
                destination
              </span>
            </h2>
            <p className="text-base text-gray-500 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
          <div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-purple-800"
            >
              Learn more
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <animated.div className="flex flex-col items-end px-3"
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,1]})}
            style={{
              transform: props.xys.interpolate(trans)}}
          >
            <img
              className="object-cover mb-6 rounded shadow-sm h-full sm:h-full xl:h-full w-28 sm:w-48 xl:w-56"
              src="https://images.pexels.com/photos/7788007/pexels-photo-7788007.jpeg?cs=srgb&dl=pexels-ivan-babydov-7788007.jpg&fm=jpg"
              alt=""
            />
            <img
              className="object-cover w-28 h-full rounded shadow-sm sm:h-full xl:h-full sm:w-48 xl:w-56"
              src="https://images.pexels.com/photos/386318/pexels-photo-386318.jpeg?cs=srgb&dl=pexels-michael-steinberg-386318.jpg&fm=jpg"
              alt=""
            />
          </animated.div>
          <animated.div className="px-3"
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,1]})}
            style={{
              transform: props.xys.interpolate(trans)}}
          
          >
            <img
              className="object-cover w-40  rounded shadow-sm sm:h-full xl:h-96 sm:w-64 xl:w-80 h-32"
              src="https://images.pexels.com/photos/157520/pexels-photo-157520.jpeg?cs=srgb&dl=pexels-anthony-157520.jpg&fm=jpg"
              alt=""
            />
          </animated.div>
        </div>
      </div>
    </div>
        </div>
        <Product />
        <Footer />
      </div>
    </div>
  );
}
