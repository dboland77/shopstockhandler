import React, { FC, ReactElement } from "react";
import styles from "./deletebutton.module.css";

interface IBtnInterface {   
  handleClick?: () => void;
  numberSelected: number;

}

export const DeleteButton: FC<IBtnInterface> = ({
  handleClick,
  numberSelected
}): ReactElement => {

  return (
    <button
      className={ styles.deletebutton}
      onClick={handleClick}
    >
        Remove {numberSelected} selected products
    </button>
  );
};
