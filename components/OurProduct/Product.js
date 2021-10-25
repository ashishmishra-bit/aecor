import Images from "next/image";
import Card from "../Card/card";


const Product = () => {
  return (
    <div className="relative">
      <div className="container flex flex-col lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        {/* content */}
        <div className="flex flex-1 flex-col items-center lg:items-start lg:ml-20 md:ml-10 ml-10">
          <h2 className="text-purple-800 text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6 font-bold">
            Our <br />
            Product
          </h2>
          <p className="text-bookmark-grey text-lg  lg:text-left mb-6 break-words text-gray-500 text-center lg:text-justify lg:w-5/6 -ml-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Phasellus dignissim tempus ligula, sedlyf egestas libero
            pharetra eget.Phasellus dignissim tempus ligula, sedlyf egestas libero pharetra eget. Phasellus dignissim tempus ligula, sed egestas libero pharetra eget.
          </p>
        </div>
        {/* image */}
        <div className="flex-col justify-center flex-1 mb-10 md:mb-16 lg:mb-0">
            <div data-tilt data-tilt-glare data-tilt-max-glare="0.8" className="cursor-pointer">
            <Card 
            title="Finkarma.in"
            imgURL= "/img/finkarma.png"
            description="Invest in thousands of companies and fractional shares with as little as $5 using our trading tools and analytics to create your own financial portfolio."
            />
            </div>  

            <div className="cursor-pointer" data-tilt data-tilt-glare data-tilt-max-glare="0.8">
            <Card 
            title="Finkarma.in"
            imgURL= "/img/finkarma.png"
            description="Invest in thousands of companies and fractional shares with as little as $5 using our trading tools and analytics to create your own financial portfolio."
            />
            </div>               
            
        </div>
      </div>
    </div>
  );
};

export default Product;
