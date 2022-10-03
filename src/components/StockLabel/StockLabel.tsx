import React, {FC} from 'react'
import { stringToBool } from '../../utilities/utilities';
import styles from './stocklabel.module.css'

interface IStockLabelProps{
    available:'TRUE' | 'FALSE';
    quantity: number;
    lowOnStock: 'TRUE' | 'FALSE';
}
export const StockLabel:FC<IStockLabelProps> = ({available, quantity, lowOnStock}) => {
  const bAvailable = stringToBool(available)
  const bLowOnStock = stringToBool(lowOnStock)
  const bOutOfStock = quantity ===0

  return (
    <div role="stocklabelcontainer">
    {bAvailable && !bOutOfStock && <span className={styles.inStock}>{`${String(quantity)} in stock`}</span>}
    {bAvailable && bLowOnStock && !bOutOfStock && <div className={styles.lowOnStock}>low on stock</div>}
    {bOutOfStock && <span className={styles.outOfStock}>out of stock</span>}

    </div>
  )
}
