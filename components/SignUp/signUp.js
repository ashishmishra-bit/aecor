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
    )
}

export default signUp
