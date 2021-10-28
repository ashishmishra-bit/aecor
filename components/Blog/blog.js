import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const blog = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);


  return (
    <div>
      <h1 data-aos="fade-right" className="px-40 text-3xl font-bold tracking-tight text-purple-800 sm:text-4xl sm:leading-none">Finkarma Bytes</h1>
      <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded" data-aos = "fade-right">
            <a href="https://finkarma.in/6-things-i-wish-i-knew-when-i-started-trading" aria-label="Article">
              <img
                src="https://finkarma.in/wp-content/uploads/2021/10/mistake/main.png"
                className="object-cover w-full h-64 rounded"
                alt="6-things-i-wish-i-knew-when-i-started-trading"
              />
            </a>
            <div className="py-5">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                23 Oct 2021
              </p>
              <a
                href="https://finkarma.in/6-things-i-wish-i-knew-when-i-started-trading"
                aria-label="Article"
                className="inline-block mb-3 text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-7 hover:text-purple-700">
                  6 things I wish I knew when I started trading
                </p>
              </a>
              <p className="mb-4 text-gray-500">
                In this article we will be talking about 6 important thingswhich every trader should know, especially if they are in the initial...
              </p>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded" data-aos="zoom-in">
            <a href="https://finkarma.in/peg-ratio-a-refinement-over-pe" aria-label="Article">
              <img
                src="https://finkarma.in/wp-content/uploads/2021/10/peg/word-image.jpeg"
                className="object-cover w-full h-64 rounded"
                alt=""
              />
            </a>
            <div className="py-5">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                17 Oct 2021
              </p>
              <a
                href="https://finkarma.in/peg-ratio-a-refinement-over-pe"
                aria-label="Article"
                className="inline-block mb-3 text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-7 hover:text-purple-700">
                  PEG RATIO : A Refinement over PE
                </p>
              </a>
              <p className="mb-4 text-gray-500">
                Has it ever happened to you that just after your biggest winning trades, you got your biggest losses? Or, you were ready with your...
              </p>
               
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded" data-aos = "fade-left">
            <a href="https://finkarma.in/the-psychological-edge-in-trading" aria-label="Article">
              <img
                src="https://finkarma.in/wp-content/uploads/2021/10/edge/word-image.png"
                className="object-cover w-full h-64 rounded"
                alt=""
              />
            </a>
            <div className="py-5">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                09 Oct 2021
              </p>
              <a
                href="https://finkarma.in/the-psychological-edge-in-trading"
                aria-label="Article"
                className="inline-block mb-3 text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-7 hover:text-purple-700">
                  The Psychological Edge in Trading
                </p>
              </a>
              <p className="mb-4 text-gray-500">
              Has it ever happened to you that just after your biggest winning trades, you got your biggest losses? Or, you were ready with your...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blog;
