import React, {FC} from 'react'
import styles from './pricelabel.module.css'

interface IPriceLabelProps{
    currentPrice: string;
    previousPrice: string;
    promotionBadge: string;
}
export const PriceLabel:FC<IPriceLabelProps> = ({currentPrice="1.99", previousPrice="1.99", promotionBadge}) => {
  return (
    <div role="pricelabelcontainer">
    {promotionBadge && <span className={styles.discountBanner}>{promotionBadge}</span>}
    <span className={styles.currentPrice}>£{currentPrice}</span>
    <span className={styles.previousPrice}>£{previousPrice}</span>
    </div>
  )
}
