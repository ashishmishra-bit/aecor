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

      <style jsx>{`
        background-color: #ffffff;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23afafaf' fill-opacity='0.16'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      `}</style>
    </div>
  );
};

export default Product;
