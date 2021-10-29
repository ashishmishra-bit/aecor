import Images from "next/image";
import Card from "../Card/card";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Product = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    // <div className="relative">
    //   <div className="container flex flex-col lg:flex-row items-center gap-12 mt-14 lg:mt-28">
    //     {/* content */}
    //     <div className="flex flex-1 flex-col items-center lg:items-start lg:ml-20 md:ml-10 ml-10">
    //       <h2 className="text-purple-800 text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6 font-bold">
    //         Our <br />
    //         Product
    //       </h2>
    //       <p className="text-bookmark-grey text-lg  lg:text-left mb-6 break-words text-gray-500 text-center lg:text-justify lg:w-5/6 -ml-8">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //          Phasellus dignissim tempus ligula, sedlyf egestas libero
    //         pharetra eget.Phasellus dignissim tempus ligula, sedlyf egestas libero pharetra eget. Phasellus dignissim tempus ligula, sed egestas libero pharetra eget.
    //       </p>
    //     </div>
    //     {/* image */}
    //     <div className="flex-col justify-center flex-1 mb-10 md:mb-16 lg:mb-0">
    //         <div data-tilt data-tilt-glare data-tilt-max-glare="0.8" className="cursor-pointer">
    //         <Card
    //         title="Finkarma.in"
    //         imgURL= "/img/finkarma.png"
    //         description="Invest in thousands of companies and fractional shares with as little as $5 using our trading tools and analytics to create your own financial portfolio."
    //         />
    //         </div>

    //         <div className="cursor-pointer" data-tilt data-tilt-glare data-tilt-max-glare="0.8">
    //         <Card
    //         title="Finkarma.in"
    //         imgURL= "/img/finkarma.png"
    //         description="Invest in thousands of companies and fractional shares with as little as $5 using our trading tools and analytics to create your own financial portfolio."
    //         />
    //         </div>

    //     </div>
    //   </div>

    //   <style jsx>{`
    //     background-color: #ffffff;
    //     background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23afafaf' fill-opacity='0.16'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    //   `}</style>
    // </div>

    <>
      <div id="services" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div  className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div className="bg-green-300 w-28 h-7 rounded-full mx-auto">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-purple-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block text-gray-200">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="27df4f81-c854-45de-942a-fe90f7a300f9"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative text-purple-900">The</span>
            </span>{" "}
           Services to enrich you on your investing journey.
          </h2>
          <p className="text-base text-gray-500 md:text-lg">
            Investing in the Indian Market It's never been this simple.
          </p>
        </div>
        <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
          <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-purple-600"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div >
              <h6 className="mb-3 text-xl  leading-5 font-extrabold">Stock</h6>
              <p className="mb-3 text-sm text-gray-600">
To begin trading/investing in stocks, you must first open a Demat account. You can open a Stock Trading account with Aecor using digital KYC and least documentation.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-700 hover:text-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-purple-600"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div >
              <h6 className="mb-3 text-xl font-bold leading-5">Mutual Funds</h6>
              <p className="mb-3 text-sm text-gray-600">
              Aecor Online Mutual Fund offers a comprehensive guide to investing in Mutual Funds in India. To learn about Top Performing Mutual Funds,  Best Mutual Funds to Buy  and so on.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-700 hover:text-purple-900"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-purple-600"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div >
              <h6 className="mb-3 text-xl font-bold leading-5">
                Currency Trading
              </h6>
              <p className="mb-3 text-sm text-gray-600">
                   Aecor allows you to trade in Currency. With your Aecor Trading account, you can access all Currency pairs using a wide range of charts and indicators.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-700 hover:text-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-purple-600"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div >
              <h6 className="mb-3 text-xl font-bold leading-5">IPO Services</h6>
              <p className="mb-3 text-sm text-gray-600">
Set up an trading account to invest in a company through an Initial Public Offering (IPO).
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-700 hover:text-purple-900"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-purple-600"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div >
              <h6 className="mb-3 text-xl font-bold leading-5">
                Commodities Trading
              </h6>
              <p className="mb-3 text-sm text-gray-600">
Gain access to data, insights and analysis across all aspects of the commodity markets with Aecor trading Platform. 
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-700 hover:text-purple-900"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-purple-600"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div >
              <h6 className="mb-3 text-xl font-bold leading-5">
                API Access
              </h6>
              <p className="mb-3 text-sm text-gray-600">
Connect your app to Aecor's lightning-fast API. With the shortest response time and the quickest execution.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-700 hover:text-purple-900"
              >
                Learn more
              </a>
            </div>
          </div>
          
        </div>
        <div  className="flex items-center justify-center pt-10">
            <button class="p-2 pl-5 pr-5 bg-transparent border-2 border-purple-500 text-purple-700 text-lg rounded-lg hover:bg-purple-500 hover:text-white ">
              View More Services
            </button>
          </div>
      </div>
    </>
  );
};

export default Product;
