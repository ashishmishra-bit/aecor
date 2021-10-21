import head from './Header.module.css';
import Image from "next/image";

const Header = () => {
  return (
    <div className={head.header}>
      <div  className={head.headerPattern}>
      <Image src="/img/HeaderPattern.png" width="231px" height="229px" />
      </div>
      <div className={head.headerText}>
        <Image src="/img/HeaderText.png" width="435px" height="225px" />
      </div>
      <div className={head.headerButton}>Discover</div>
      <div className={head.headerImage}>

      <Image src="/img/HeaderImage.png" width="647px" height="346px" />
      </div>
    </div>
  )
}

export default Header
