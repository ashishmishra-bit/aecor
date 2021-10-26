import Link from 'next/link';

const signUp = () => {
    return (
        // <div>
        //     <div className="formBox overflow-x-hidden" >
        //         <div className = "btnBox">
        //             <div id="btn"></div>
        //             <button type="button" className="toggle-btn" >Sign Up</button>
        //             <Link href="/">
        //             <button type="button" className="toggle-btn">home</button>
        //             </Link>
        //         </div>
        //         <form id = "register" className = "inputGrp">
        //         <input type="text" placeholder="Name" className="inputField" required />
        //             <input type="email" placeholder="E-mail" className="inputField" required />
        //             <input type="text" placeholder="Phone Number" className="inputField" required />
        //             <input type="checkbox" className="checkBox"/><span>I agreed to T&C</span>
        //             <button type="submit" className="submitBtn">SignUp</button>
        //         </form>
        //         <h1 className="text-center text-2xl" >Open a new account</h1>
        //     </div>
        
           

        //     <style jsx>{`
        //         .formBox{
        //             width:380px;
        //             height:500px;
        //             position:relative;
        //             margin:6% auto;
        //             background:#fff;
        //             padding:5px;
        //         }
        //         .btnBox{
        //             width:220px;
        //             margin:35px auto;
        //             position:relative;
        //             box-shadow:0 0 20px 9px #A3E2FD;
        //             border-radius:30px;
        //         }
        //         .toggle-btn{
        //             padding:10px 30px;
        //             cursor:pointer;
        //             background:transparent;
        //             border:0;
        //             outline:none;
        //             position:relative;
        //         }
        //         #btn{
        //             top:0;
        //             left:0;
        //             position:absolute;
        //             width:110px;
        //             height:100%;
        //             background:linear-gradient(to right , #20BDFF, #A5FECB);
        //             border-radius:30px;
        //             transition:all 0.5s;
        //         }
        //         .inputGrp{
        //             top:180px;
        //             position:absolute;
        //             width:280px;
        //             transition:all 0.5s;
        //         }
        //         .inputField{
        //             width:100%;
        //             padding:10px 0;
        //             margin:5px 0;
        //             border-left:0;
        //             border-right:0;
        //             border-top:0;
        //             border-bottom:1px solid #999;
        //             outline:none;
        //             backround:transparent;
        //         }
        //         .checkBox{
        //             margin: 30px, 10px ,30px,0;
        //         }
        //         .submitBtn{
        //             width:85%;
        //             padding:10px 30px;
        //             cursor:pointer;
        //             display:block;
        //             margin:auto;
        //             background:linear-gradient(to right , #20BDFF, #A5FECB);
        //             border-radius:30px;
        //             border:0;
        //             outline:none;
        //         }
        //         span{
        //             font-size:12px;
        //             color:#777;
        //             bottom:68px;
        //             // position:absolute;
        //         }
        //         #register{
        //             left:50px;
        //         }
        //         @media (min-width:360px){
        //             .formBox{                        
        //                 width:350px;
        //             }
        //         }
                

        //     `}</style>
        // </div>

        <> 
            <div className="relative flex flex-col-reverse px-4 py-20 mx-auto lg:block lg:flex-col lg:py-32  md:px-8 sm:max-w-xl md:max-w-full">
        <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
          <img
            src="https://kitwind.io/assets/kometa/laptop.png"
            className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
            alt=""
          />
        </div>
        <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
          <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Aecor
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                We will bring your
                <br className="hidden md:block" />
                business{' '}
                <span className="inline-block text-deep-purple-accent-400">
                  online
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
            <form>
              <div className="flex flex-col md:flex-row">
                <input
                  placeholder="Name"
                  required=""
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                />
                <input
                  placeholder="Email"
                  required=""
                  type="email"
                  className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                />
                
              </div>
              <div className="flex flex-col md:flex-row">
                
                <input
                  placeholder="Phone Number"
                  required=""
                  type="number"
                  className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                />
                
              </div>
              <div className="flex items-center mt-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-700 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Sign Up
                </button>
                
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Back
                </a>
                
              </div>
              <p className="text-md mt-5">Already have an Account ? <a href="/login" className = "hover:underline hover:text-purple-700 cursor:pointer">Login</a></p> 
            </form>
          </div>
        </div>
      </div>
        


        {/* Terms & Condition section */}


        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div className="bg-green-300 w-36 h-7 rounded-full mx-auto">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Disclosure
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
            AGREEMENT TO TERMS & CONDITIONS
          </h2>
          <p className="text-base text-gray-500 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
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
            <div>
              <h6 className="mb-3 text-xl  leading-5 font-extrabold">
                Stock
              </h6>
              <p className="mb-3 text-sm text-gray-600">
                A flower in my garden, a mystery in my panties. Heart attack
                never stopped old Big Bear. I didn't even know we were calling
                him Big Bear. We never had the chance to.
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
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                Mutual Funds
              </h6>
              <p className="mb-3 text-sm text-gray-600">
                Rough pomfret lemon shark plownose chimaera southern sandfish
                kokanee northern sea robin Antarctic cod. Yellow-and-black
                triplefin gulper South American Lungfish mahi-mahi,
                butterflyfish glass catfish soapfish ling gray mullet!
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
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                Currency Booking
              </h6>
              <p className="mb-3 text-sm text-gray-600">
                A slice of heaven. O for awesome, this chocka full cuzzie is as
                rip-off as a cracker. Meanwhile, in behind the bicycle shed,
                Hercules Morse, as big as a horse and Mrs Falani were up to no
                good with a bunch of crook pikelets.
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
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                DP Services
              </h6>
              <p className="mb-3 text-sm text-gray-600">
                Disrupt inspire and think tank, social entrepreneur but
                preliminary thinking think tank compelling. Inspiring, invest
                synergy capacity building, white paper; silo, unprecedented
                challenge B-corp problem-solvers.
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
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                Commodities Broking
              </h6>
              <p className="mb-3 text-sm text-gray-600">
                Disrupt inspire and think tank, social entrepreneur but
                preliminary thinking think tank compelling. Inspiring, invest
                synergy capacity building, white paper; silo, unprecedented
                challenge B-corp problem-solvers.
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
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                PAN / TIN / TDS Services
              </h6>
              <p className="mb-3 text-sm text-gray-600">
                Disrupt inspire and think tank, social entrepreneur but
                preliminary thinking think tank compelling. Inspiring, invest
                synergy capacity building, white paper; silo, unprecedented
                challenge B-corp problem-solvers.
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
      </div>

        </>
    )
}

export default signUp
