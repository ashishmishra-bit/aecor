import style from './Whywe.module.css';
import Image from "next/image";
import Slimcard from "../Slimcard/Slimcard";


const Whywe = () => {
  return (
    <div className={style.whywe}>
      <div className={style.whyweTextSection}>
        <div  className={style.whywePattern}>
          <Image src="/img/HeaderPattern.png" width="231px" height="229px" />
        </div>
        <div className={style.whyweTitle}>
            Why We Are Better Than Other.
        </div>
        <div className={style.whyweAbout}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim tempus ligula, sed egestas libero pharetra eget.
        </div>
      </div>
      <div className={style.whyweSlimCardSection}>
        <div className="mx-auto my-auto flex gap-x-7">
            <Slimcard
            title="Globaly Accepted"
            imgURL="/img/Globe.png"
            />
            <Slimcard
            title="Globaly Accepted"
            imgURL="/img/Rocket.png"
            className={style.thiscard}
            />
            <Slimcard
            title="Globaly Accepted"
            imgURL="/img/graph.png"
            />
        </div>
      </div>
    </div>
  )
}

export default Whywe
