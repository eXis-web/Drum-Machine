import React from 'react';
import styles from "./style.module.css";

function Display({ displayText }) {
  return (
    <div id="display" className={styles.display}>
      {displayText}
    </div>
  );
}

export default Display;
