import React from 'react';
import Button from "./Button";
import Display from "./Display";
import Slider from "./Slider";
import Toggle from "./Toggle";
import styles from "./style.module.css";

const bankOne = [
  {
    keyTrigger: "Q",
    name: "Heater-1",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyTrigger: "W",
    name: "Heater-2",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyTrigger: "E",
    name: "Heater-3",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyTrigger: "A",
    name: "Heater-4",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyTrigger: "S",
    name: "Clap",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyTrigger: "D",
    name: "Open-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyTrigger: "Z",
    name: "Kick-n'-Hat",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyTrigger: "X",
    name: "Kick",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyTrigger: "C",
    name: "Closed-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const bankTwo = [
  {
    keyTrigger: "Q",
    name: "Chord-1",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    keyTrigger: "W",
    name: "Chord-2",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    keyTrigger: "E",
    name: "Chord-3",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    keyTrigger: "A",
    name: "Shaker",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    keyTrigger: "S",
    name: "Open-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    keyTrigger: "D",
    name: "Closed-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    keyTrigger: "Z",
    name: "Punchy-Kick",
    src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    keyTrigger: "X",
    name: "Side-Stick",
    src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    keyTrigger: "C",
    name: "Snare",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];


export function App() {
  const [bank, setBank] = React.useState(false);
  const [power, setPower] = React.useState(false);
  const [displayText, setDisplayText] = React.useState("");
  const [volume, setVolume] = React.useState(1);

  const handleTogglePower = () => {
    setPower((prev) => !prev);
    if (power) setDisplayText("");
  };

  const handleToggleBank = () => {
    setBank((prev) => !prev);
    if (power) {
      if (!bank) setDisplayText("Piano Kit");
      if (bank) setDisplayText("Heater Kit");
    }
  };

  const handleVolume = (e) => {
    setVolume(e.target.value);
  };

  return (
    <div className={styles.container} id="drum-machine">
      <div className={`buttons ${power ? "powerOn" : ""} ${styles.buttons}`}>
        {!bank &&
          bankOne.map((btn) => {
            return (
              <Button
                key={btn.name}
                name={btn.name}
                keyTrigger={btn.keyTrigger}
                src={btn.src}
                volume={volume}
                power={power}
                setDisplayText={setDisplayText}
              />
            );
          })}

        {bank &&
          bankTwo.map((btn) => {
            return (
              <Button
                key={btn.name}
                name={btn.name}
                keyTrigger={btn.keyTrigger}
                src={btn.src}
                volume={volume}
                power={power}
                setDisplayText={setDisplayText}
              />
            );
          })}
      </div>
      <div className={styles.inputs}>
        <Toggle id="power" name="POWER" label="power" onClick={handleTogglePower} />
        <Display displayText={displayText} />
        <Toggle id="bank" name="BANK" label="bank" onClick={handleToggleBank} />
        <Slider volume={volume} handleVolume={handleVolume} />
      </div>
    </div>
  );
}