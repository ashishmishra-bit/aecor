import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const blog = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    AOS.init({
      duration: 100,
    });
  }, []);


  return (
    <div>
      <h1  className="lg:px-40 text-center text-3xl font-bold tracking-tight text-purple-800 sm:text-4xl sm:leading-none">Finkarma Bytes</h1>
      <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded" >
            <a href="https://finkarma.in/denial-by-insurer-time-to-call-ombudsman" aria-label="Article">
              <img
                src="https://finkarma.in/wp-content/uploads/2021/05/Insurance-scaled-e1622290972646-1024x512.jpg" 
                className="object-contain w-full h-64 rounded"
                alt="Denial by Insurer? Time to Call Ombudsman"
              />
            </a>
            <div className="py-5">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                23 Oct 2021
              </p>
              <a
                href="https://finkarma.in/denial-by-insurer-time-to-call-ombudsman"
                aria-label="Article"
                className="inline-block mb-3 text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-7 hover:text-purple-700">
                  Denial by Insurer? Time to Call Ombudsman
                </p>
              </a>
              <p className="mb-4 text-gray-500">
                After making a peek at more than 4 lakh cases on May 6, it’s relieving that the number of daily Covid cases has come down below...
              </p>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded" >
            <a href="https://finkarma.in/discipline-your-way-to-trading-success" aria-label="Article">
              <img
                src="https://finkarma.in/wp-content/uploads/2021/04/Success_01-scaled-e1617622822684-1024x640.jpg"
                className="object-contain w-full h-64 rounded"
                alt=""
              />
            </a>
            <div className="py-5">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                17 Oct 2021
              </p>
              <a
                href="https://finkarma.in/discipline-your-way-to-trading-success"
                aria-label="Article"
                className="inline-block mb-3 text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-7 hover:text-purple-700">
                  Discipline your Way to Trading Success
                </p>
              </a>
              <p className="mb-4 text-gray-500">
                Has it ever happened to you that just after your biggest winning trades, you got your biggest losses? Or, you were ready with your...
              </p>
               
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded" >
            <a href="https://finkarma.in/understanding-price-to-earnings-ratio-in-the-most-simplistic-manner" aria-label="Article">
              <img
                src="https://finkarma.in/wp-content/uploads/2021/01/photo_2021-01-15_19-58-44-1-e1610726733456-1024x546.jpg"
                className="object-contain w-full h-64 rounded"
                alt=""
              />
            </a>
            <div className="py-5">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                09 Oct 2021
              </p>
              <a
                href="https://finkarma.in/understanding-price-to-earnings-ratio-in-the-most-simplistic-manner"
                aria-label="Article"
                className="inline-block mb-3 text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-7 hover:text-purple-700">
                  Understanding PE Ratio In The Most Simplistic Manner
                </p>
              </a>
              <p className="mb-4 text-gray-500">
              Most of you would have heard that we should buy when PE is below or near 12.5 and sell when it’s above 25-26 level....
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blog;
