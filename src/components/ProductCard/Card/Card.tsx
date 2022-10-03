import React, { FC, ReactElement } from "react";
import styles from "./card.module.css";
import {IProductInterface} from "../../../interfaces"
import { PriceLabel } from '../../PriceLabel/PriceLabel';


interface ICardProps {
  product: IProductInterface
  handleSelect: () => void;
}

const Card: FC<ICardProps> = ({
  product,
  handleSelect,
}): ReactElement => {
  return (
      <div className={styles.productCard} role="productCard">
        <div className={styles.imageContainer} role="imageContainer">
      <img className={styles.cardImage} src={product.imageUrl} role="productimage"/>
        <input className={styles.checkbox} type="checkbox" onChange={handleSelect}></input>

        </div>
      <div className={styles.imageText}>{product.name}</div>
    <PriceLabel currentPrice={product.price} previousPrice={product.priceWas} promotionBadge={product.promotionBadge}/>

      </div>
 
  );
};

export { Card };