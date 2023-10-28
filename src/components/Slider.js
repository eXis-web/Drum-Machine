import React from 'react';
import styles from "./style.module.css";

function Slider({ handleVolume, volume }) {
  return (
    <label className={styles.label} htmlFor="volume">
      VOLUME
      <input
        type="range"
        className={styles.volume}
        min={0}
        value={volume}
        max={1}
        step={0.01}
        onChange={handleVolume}
      />
    </label>
  );
}

export default Slider;
