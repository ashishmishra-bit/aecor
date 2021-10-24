import style from './Whywe.module.css';
import Image from "next/image";
import Slimcard from "../Slimcard/Slimcard";
import { motion } from "framer-motion";

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
            <Slimcard
            title="Globaly Accepted"
            imgURL="/img/Globe.png"
            />
          </div>
          <div data-tilt data-tilt-glare data-tilt-max-glare="0.8" className="mt-8 lg:mt-20">
            <Slimcard
            title="Globaly Accepted"
            imgURL="/img/Rocket.png"
            className={style.thiscard}
            />
          </div>
          <div data-tilt data-tilt-glare data-tilt-max-glare="0.8" className="mt-8 lg:mt-0">
            <Slimcard
            title="Globaly Accepted"
            imgURL="/img/graph.png"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Whywe
