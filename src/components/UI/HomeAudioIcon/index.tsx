/* eslint-disable no-nested-ternary */
import React from 'react';
import useAudio from '../../../hooks/useAudio';
import AudioOffIcon from '../Icon/AudioOff';
import AudioOnIcon from '../Icon/AudioOn';
import PlayIcon from '../Icon/Play';
import * as Style from './styled';

function HomeAudioIcon() {
  // TODO: Icon을 타입으로 만들어서 관리하면 좀 더 간단해질수도?
  // TODO: 음악추가(props로)
  const { playing, muted, togglePlaying, toggleMute } = useAudio('');

  const clickIcon = () => {
    if (playing) {
      toggleMute();
      return;
    }
    togglePlaying();
  };

  return (
    <Style.IconWrapper onClick={clickIcon}>
      {!playing && <PlayIcon color="white" />}
      {playing && (muted ? <AudioOffIcon color="white" /> : <AudioOnIcon color="white" />)}
    </Style.IconWrapper>
  );
}

export default HomeAudioIcon;
