import React, {FC} from 'react'
import { stringToBool } from '../../utilities/utilities';
import styles from './stocklabel.module.css'

interface IStockLabelProps{
    available:'TRUE' | 'FALSE';
    quantity: number;
    lowOnStock: boolean;
}
export const StockLabel:FC<IStockLabelProps> = ({available, quantity, lowOnStock}) => {
  const bAvailable = stringToBool(available)
  console.log(bAvailable)
  return (
    <div role="stocklabelcontainer">
    {bAvailable && quantity>0 && <span className={styles.inStock}>{`${String(quantity)} in stock`}</span>}
    {bAvailable && lowOnStock && <div className={styles.lowOnStock}>low on stock</div>}
    {!bAvailable && <span className={styles.outOfStock}>out of stock</span>}

    </div>
  )
}
