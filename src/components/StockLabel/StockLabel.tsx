import React, {FC} from 'react'
import styles from './stocklabel.module.css'

interface IStockLabelProps{
    available:boolean;
    quantity: number;
    lowOnStock: boolean;
}
export const StockLabel:FC<IStockLabelProps> = ({available, quantity, lowOnStock}) => {
  console.log(available)
  return (
    <div role="stocklabelcontainer">
    {quantity>0 && <span className={styles.inStock}>{`${String(quantity)} in Stock`}</span>}
    {available && <span className={styles.outofStock}>{lowOnStock}</span>}
    {!available && <span className={styles.lowonStock}>{lowOnStock}</span>}

    </div>
  )
}
