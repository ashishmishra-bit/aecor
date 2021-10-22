import styles from "../Card/card.module.css";
import Image from "next/image";

const card = ({ title, imgURL, description }) => {
  return ( 
    // <div className={styles.cardContainer}>
    //   <div className={styles.cardContent}>
    //     <div className={styles.imageContainer}>
    //       <Image src={imgURL} alt={title} width={91} height={91} />
    //     </div>
    //     <div className={styles.titleContainer}>
    //       <h3 className="text-base md:text-3xl">{title}</h3>
    //     </div>
    //     <div className={styles.descriptionContainer}>
    //       <p className="text-justify">{description}</p>
    //     </div>
    //   </div>
    // </div>
    <div className = "drop-shadow-lg">
      <div className = "py-10">
        <div className = "bg-white rounded-3xl overflow-hidden  max-w-sm px-4 py-4">
          <Image src = {imgURL} alt = {title} width = {91} height = {91} />
          <div className = "px-4 py-4">
            <div className = "font-bold text-purple-800 text-xl mb-2">{title}</div>
            <p className = "text-gray-500">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
