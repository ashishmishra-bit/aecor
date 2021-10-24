import head from './Header.module.css';
import Image from "next/image";
import { motion } from "framer-motion";
let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
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
      <div className={head.headerButton}>Open Account</div>
      <motion.div variants={stagger} className={head.headerImage}>
        <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
        <Image src="/img/HeaderImage.png" width="650px" height="427px" />
        </motion.div>        
      </motion.div>
    </div>
  )
}

export default Header
