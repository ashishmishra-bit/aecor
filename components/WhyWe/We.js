import Image from "next/image";

const We = () => {
  return (
    <div className="bg-blue-50">
      <div className="container flex flex-col lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        {/* content */}
        <div className="flex flex-1 flex-col items-center lg:items-start  md:ml-10 ml-10">
          <h2 className="text-purple-900 text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6 font-bold">
            Why We Are <br />
            Better Than Others
          </h2>
          <p className="text-bookmark-grey text-lg  lg:text-left mb-6 break-words text-gray-500 text-justify lg:w-5/6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            dignissim tempus ligula, sedlyf egestas libero pharetra
            eget.Phasellus dignissim tempus ligula, sedlyf egestas libero
            pharetra eget. Phasellus dignissim tempus ligula, sed egestas libero
            pharetra eget.
          </p>
        </div>
        {/* image */}
        <div className="flex-col justify-center flex-1 mb-10 md:mb-16 lg:mb-0 lg:ml-60">
          <div data-tilt data-tilt-glare data-tilt-max-glare="0.8" className = "cursor-pointer">
            <Image src="/img/ios.png" width={251} height={358} />
          </div>

          <div data-tilt data-tilt-glare data-tilt-max-glare="0.8" className = "cursor-pointer">
            <Image src="/img/android.png" width={251} height={358} />
          </div>
        </div>
        <div
          data-tilt
          data-tilt-glare
          data-tilt-max-glare="0.8"
          className="lg:-ml-52 flex-col justify-center flex-1 mb-10 md:mb-16 lg:mb-0 cursor-pointer"
        >
          <Image src="/img/web.png" width={251} height={358} />
        </div>
      </div>

      <style jsx>{`
        .container {
            margin-left:70px;
            padding-top: 50px;
            padding-bottom: 50px;
        }
      `}</style>
    </div>
  );
};

export default We;
