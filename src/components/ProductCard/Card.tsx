import React, { FC, ReactElement } from "react";
import styles from "./card.module.css";
import {IProductInterface} from "../../interfaces"

interface ICardProps {
  product: IProductInterface
  // selected: boolean;
  handleSelect: () => void;
}

const Card: FC<ICardProps> = ({
  product,
  // selected,
  handleSelect,
}): ReactElement => {
  return (
      <div className={styles.productCard}>
        <div className={styles.imageContainer}>
      <img className={styles.cardImage} src={product.imageUrl}/>
        <input className={styles.checkbox} type="checkbox" onChange={handleSelect}></input>

        </div>
      <div className={styles.imageText}>{product.name}</div>
      </div>
 
  );
};

export { Card };