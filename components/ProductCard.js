import nextOrSource from "../tools/nextOrSource";
import { IconHeart } from "@tabler/icons-react";

import {clsx} from "clsx"
import styles from "./productCard.module.css";

export default function ProductCard({ productData, handleLiked }) {
  return (
    <div className={styles.productCard}>
      <img src={nextOrSource(productData.image)} alt={productData.alt} className={styles.cardImage} />
      <div className={styles.cardInfo}>
        <div className={styles.cardTitle}>
          <div className={styles.productName}>P{productData.product_name}</div>
          <div className={styles.siginSubtitle}>Sign in or Create an account to see pricing</div>
        </div>
        <button className={styles.likeButton} onClick={() => handleLiked(productData.key)}>
          <IconHeart stroke={1} className={clsx(styles.likeIcon, {
            [styles.isLiked]: productData.isLiked
          })}/>
        </button>
      </div>
    </div>
  );
}
