import styles from "./Slimcard.module.css";
import Image from "next/image";

const Slimcard = ({ title, imgURL }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <div className={styles.imageContainer}>
          <Image src={imgURL} alt={title} width={151} height={321} />
        </div>
        <div className={styles.titleContainer}>
          <h3 className="text-base md:text-3xl">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Slimcard;
