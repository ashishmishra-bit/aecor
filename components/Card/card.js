import styles from "../Card/card.module.css";
import Image from "next/image";

const card = ({ title, imgURL, description }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <div className={styles.imageContainer}>
          <Image src={imgURL} alt={title} width={91} height={91} />
        </div>
        <div className={styles.titleContainer}>
          <h3 className="text-base md:text-3xl">{title}</h3>
        </div>
        <div className={styles.descriptionContainer}>
          <p className="text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default card;
