import head from './Header.module.css';
import Image from "next/image";

import SignUpNew from '../SignUp/SignUpNew';
import Link from "next/link";

const Header = () => {
  return (
    <div className={head.header}>
      <div className="absolute ml-10">
        <Image className = "animate-pulse" src = "/img/art.png" height={229} width={231}/>
      </div>
      <div className={head.headerText}>
        <Image  src="/img/HeaderText.png" width="435px" height="225px" />
      </div>
      <div className={head.about}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim tempus ligula, sed egestas libero pharetra eget.
      </div>
      <Link href="">
      <div className={head.headerButton}>Open Account</div>
      </Link>
      <div  className={head.headerImage}>
        <div  whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
        <Image src="/img/HeaderImage.png" width="650px" height="427px" />
        </div>        
      </div>
    </div>
  )
}

export default Header
