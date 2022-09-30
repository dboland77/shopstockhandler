import React from 'react'
import styles from "./card.module.css";

export const CardContainer = ({children}) => {
  return (
    <div
    className={styles.cardContainer}
  >
    {children}
    </div>
  )
}
