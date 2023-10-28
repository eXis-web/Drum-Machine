import React from 'react';
import styles from "./style.module.css";

function Toggle({ id, name, label, onClick }) {
  return (
    <label className={styles.label} htmlFor={label}>
      {name}
      <div className={styles.toggleBody}>
        <input
          id={id}
          className={styles.toggle}
          type="checkbox"
          autoComplete="off"
          onClick={onClick}
        ></input>
        <span className={styles.span}></span>
      </div>
    </label>
  );
}

export default Toggle;
