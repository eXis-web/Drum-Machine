import React, { useCallback } from 'react';
import styles from "./style.module.css";

function Button({ name, src, keyTrigger, setDisplayText, volume, power }) {
  const [hit, setHit] = React.useState(false);
  const audioRef = React.useRef();

  const playSound = () => {
    setHit(true);
    setTimeout(() => setHit(false), 100);
    if (power) {
      audioRef.current.volume = volume;
      audioRef.current.play();
      setDisplayText(name.replace(/[-]/g, " "));
    }
  };

  const handleKeyPress = useCallback((e) => {
    if (power) {
      if (e.key === audioRef.current.id.toLowerCase()) {
        playSound();
      }
    }
  }, [power, playSound]);

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress, power, playSound]);

  return (
    <div id={name} className={`${styles.drumpad} ${hit ? "active" : ""}`} onClick={playSound}>
      <audio className="clip" ref={audioRef} id={keyTrigger} src={src}></audio>
      {keyTrigger}
    </div>
  );
}

export default Button;
