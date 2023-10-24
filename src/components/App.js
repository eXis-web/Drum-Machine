import React, { useState, useEffect } from 'react';

const audioClips = [
  {
    key: 'Q',
    id: 'Heater-1',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    key: 'W',
    id: 'Heater-2',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  },
  {
    key: 'E',
    id: 'Heater-3',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  },
  {
    key: 'A',
    id: 'Heater-4_1',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  },
  {
    key: 'S',
    id: 'Heater-6',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  },
  {
    key: 'D',
    id: 'Dsc_Oh',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  },
  {
    key: 'Z',
    id: 'Kick_n_Hat',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  },
  {
    key: 'X',
    id: 'RP4_KICK_1',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  },
  {
    key: 'C',
    id: 'Cev_H2',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  },
];

export function App() {
  const [displayText, setDisplayText] = useState('');

  const playAudio = (audioId) => {
    const audio = document.getElementById(audioId);
    audio.currentTime = 0;
    audio.play();
    setDisplayText(audioId);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key.toUpperCase();
      const clip = audioClips.find((clip) => clip.key === key);
      if (clip) {
        playAudio(clip.key);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [playAudio, audioClips]);

  return (
    <div id="drum-machine" className="container text-center mt-5">
      <h1>Drum Machine</h1>
      <div id="display" className="display-text mt-3 mb-3">
        {displayText}
      </div>
      <div className="drum-pads">
        {audioClips.map((clip) => (
          <div
            key={clip.key}
            className="drum-pad btn btn-primary btn-lg"
            onClick={() => playAudio(clip.key)}
            id={clip.id}
          >
            {clip.key}
            <audio
              id={clip.key}
              className="clip"
              src={clip.src}
            />
          </div>
        ))}
      </div>
    </div>
  );
}


