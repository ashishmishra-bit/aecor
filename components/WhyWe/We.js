import Image from "next/image";
import { useSpring, animated, config } from 'react-spring';
import lottie from 'lottie-web';
import { useEffect , useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// const calc = (x, y) => [-(y - window.innerHeight / 2) / 50, (x - window.innerWidth / 2) / 50, 1]
// const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const We = () => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))


  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../assets/business-deal.json')
    });

  } , [])

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    // <div className=" overflow-x-hidden">
    //     <div className="absolute lg:mt-60 lg:ml-10 mt-10 ml-5">
    //     <Image src = "/img/art.png" height={229} width={231}/>
    //     </div>
    //   <div className="container flex flex-col lg:flex-row items-center gap-12 mt-14 lg:mt-28 ml-28 -ml-8">
    //     {/* content */}
        
    //     <div className="flex flex-1 flex-col items-center lg:items-start  md:ml-10 ml-10 lg:ml-32">
        
    //       <h2 className="text-purple-900 text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6 font-bold z-10">
    //         Why We Are <br />
    //         Better Than Others
    //       </h2>
          
    //       <p className="text-bookmark-grey text-lg  lg:text-left mb-6 break-words text-gray-500 text-justify lg:w-5/6 ml-5 lg:ml-0">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
    //         dignissim tempus ligula, sedlyf egestas libero pharetra
    //         eget.Phasellus dignissim tempus ligula, sedlyf egestas libero
    //         pharetra eget. Phasellus dignissim tempus ligula, sed egestas libero
    //         pharetra eget.
    //       </p>
    //     </div>
    //     {/* image */}
    //     <div className="flex-col justify-center flex-1 mb-10 md:mb-16 lg:mb-0 lg:ml-60 ml-16">
    //     <animated.div className = "cursor-pointer" onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
    //         onMouseLeave={() => set({xys:[0,0,1]})}
    //         style={{
    //             transform: props.xys.interpolate(trans)
    //         }}>
    //         <Image src="/img/ios.png" width={251} height={358} />
    //       </animated.div>

    //       <animated.div  className = "cursor-pointer" onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
    //         onMouseLeave={() => set({xys:[0,0,1]})}
    //         style={{
    //             transform: props.xys.interpolate(trans)}}
    //       >
    //         <Image src="/img/android.png" width={251} height={358} />
    //       </animated.div>
    //     </div>
    //     <animated.div className="lg:-ml-52 flex-col justify-center flex-1 mb-10 md:mb-16 lg:mb-0 cursor-pointer ml-16 -mt-20"
    //     onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
    //     onMouseLeave={() => set({xys:[0,0,1]})}
    //     style={{
    //         transform: props.xys.interpolate(trans)}}
      
    //     >
    //       <Image src="/img/web.png" width={251} height={358} />
    //     </animated.div>
    //   </div>

    //   <style jsx>{`
    //     .container {
    //         // margin-left:70px;
    //         padding-top: 50px;
    //         padding-bottom: 50px;
    //     }
    //   `}</style>
    // </div>

    <> 
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center" data-aos="fade-right">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl sm:leading-none">
              What makes us
              <br className="hidden md:block" />
              great and in{' '}
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative inline-block text-purple-800">
                  "Financial Sector"
                </span>
              </span>
            </h2>
            <p className="text-base text-gray-500 md:text-lg">
Leading online trading platforms for traders, investors, and advisors, providing direct access to stocks, options, futures, currencies, and mutual funds.
            </p>
          </div>
          <p className="mb-4 text-sm font-bold tracking-widest uppercase text-purple-700">
            Features
          </p>
          <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
            <ul className="space-y-3">
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-purple-700"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Stocks
              </li>
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-purple-700"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Mutual Funds
              </li>
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-purple-700"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Future & Options
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-purple-700"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                IPO
              </li>
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-purple-700"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Commodity
              </li>
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-purple-700"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Currency
              </li>
            </ul>
          </div>
        </div>
        <div data-aos = "slide-up">
          {/* <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          /> */}
          <div className="container" ref={container}></div>
        </div>
      </div>
    </div>
    </>
  );
};

export default We;
