import React from 'react';

export const RenderDrumPads = (audioClips, playAudio) => {
  return audioClips.map((clip) => (
    <div
      key={clip.key}
      className="drum-pad"
      onClick={() => playAudio(clip.key)}
    >
      {clip.key}
      <audio
        id={clip.key}
        className="clip"
        src={clip.src}
      />
    </div>
  ));
};

