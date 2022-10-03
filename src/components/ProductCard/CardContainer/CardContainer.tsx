import React, {FC, ReactNode} from 'react'
import styles from "./cardcontainer.module.css";

interface ICardContainerProps{
  children?: ReactNode;
}
export const CardContainer:FC<ICardContainerProps> = ({children}) => {
  return (
    <div
    className={styles.cardContainer}
    role="cardContainer"
  >
    {children}
    </div>
  )
}
