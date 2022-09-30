import React, { FC, ReactElement } from "react";
import styles from "./card.module.css";
import {IProductInterface} from "../../interfaces"

interface ICardProps {
  product: IProductInterface
  // selected: boolean;
  // handleClick: () => void;
}

const Card: FC<ICardProps> = ({
  product,
  // selected,
  // handleClick,
}): ReactElement => {
  return (
      <div className={styles.productCard}>
        <div>

        <input type="checkbox"></input>
        </div>
      <img className={styles.cardImage} src={product.imageUrl}/>
      {product.name}
      </div>
 
  );
};

export { Card };