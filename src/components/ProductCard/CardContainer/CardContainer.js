import React from 'react'
import styles from "./cardcontainer.module.css";

export const CardContainer = ({children}) => {
  return (
    <div
    className={styles.cardContainer}
    role="cardContainer"
  >
    {children}
    </div>
  )
}
