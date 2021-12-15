/* eslint-disable no-nested-ternary */
import React, { useRef } from 'react';
import useAudio from '../../../hooks/useAudio';
import AudioOffIcon from '../Icon/AudioOff';
import AudioOnIcon from '../Icon/AudioOn';
import * as Style from './styled';

function HomeAudioIcon() {
  const didMount = useRef(false);
  const { muted, togglePlaying, toggleMute } = useAudio('/music/test.mp3');

  const clickIcon = () => {
    if (!didMount.current) {
      togglePlaying();
      didMount.current = true;
    }
    toggleMute();
  };

  return (
    <Style.IconWrapper onClick={clickIcon}>
      {muted ? <AudioOffIcon color="white" /> : <AudioOnIcon color="white" />}
    </Style.IconWrapper>
  );
}

export default HomeAudioIcon;
