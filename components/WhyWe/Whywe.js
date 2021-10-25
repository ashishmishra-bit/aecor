import style from './Whywe.module.css';
import Image from "next/image";
import Slimcard from "../Slimcard/Slimcard";


const Whywe = () => {
  return (
    <div className={style.whywe}>
      <div className={style.whyweTextSection}>
        <div className={style.whyweTitle}>
            Why We Are Better Than Other.
        </div>
        <div className={style.whyweAbout}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim tempus ligula, sed egestas libero pharetra eget.
        </div>
      </div>
      <div className={style.whyweSlimCardSection}> 
      
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-7">
          <div data-tilt data-tilt-glare data-tilt-max-glare="0.8"
            
          >
            {/* <Image src = '/img/phone.png' height={461} width={251}/>
            <Slimcard
            title="Globaly Accepted"
            imgURL="/img/Globe.png"
            /> */}
          </div>
          <div data-tilt data-tilt-glare data-tilt-max-glare="0.8" className="mt-8 lg:mt-20">
            {/* <Image src = '/img/phone.png' height={461} width={251} className= "transform translate-x-4 translate-y-4"/> */}
            {/* <Slimcard
            title="Globaly Accepted"
            imgURL="/img/Rocket.png"
            className={style.thiscard}
            /> */}
          </div>
          <div data-tilt data-tilt-glare data-tilt-max-glare="0.8" className="mt-8 lg:mt-0">
          {/* <Image src = '/img/phone.png' height={461} width={251} className= "transform skew-y-12"/> */}
            {/* <Slimcard
            title="Globaly Accepted"
            imgURL="/img/graph.png"
            /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Whywe
