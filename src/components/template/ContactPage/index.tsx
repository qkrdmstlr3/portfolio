import React, { useState, useEffect, useRef } from 'react';
import { map, pipe, toArray } from '@fxts/core';
import * as Style from './styled';
import DownIcon from '../../UI/Icon/Down';
import NextIcon from '../../UI/Icon/Next';
import PlayIcon from '../../UI/Icon/Play';
import PrevIcon from '../../UI/Icon/Prev';
import PauseIcon from '../../UI/Icon/Pause';
import UpIcon from '../../UI/Icon/Up';
import useAudio from '../../../hooks/useAudio';

export interface ContactInfo {
  title: string;
  content: string;
  musicLink: string;
}

interface ContactPageProps {
  infoList: ContactInfo[];
}

function ContactPage({ infoList }: ContactPageProps) {
  const didMount = useRef(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const { playing, changeMusic, togglePlaying } = useAudio(infoList[selectedIndex].musicLink);

  useEffect(() => {
    if (didMount.current) changeMusic(infoList[selectedIndex].musicLink);
    else didMount.current = true;
  }, [selectedIndex]);

  const handlePlayOrPause = () => {
    togglePlaying();
  };

  const clickMusicItem = (index: number) => {
    setSelectedIndex(index);
  };

  const changeNextMusic = () => {
    setSelectedIndex((selectedIndex + 1) % infoList.length);
  };

  const changePrevMusic = () => {
    setSelectedIndex((selectedIndex || infoList.length) - 1);
  };

  const clickLink = (event: React.MouseEvent<HTMLAnchorElement>, content: string) => {
    if (content.includes('http')) event.stopPropagation();
    else event.preventDefault();
  };

  return (
    <Style.Container>
      <Style.MusicList>
        {pipe(
          Object.entries(infoList),
          map(([index, info]) => (
            <Style.MusicItem
              key={info.title}
              status={(Number(index) === selectedIndex && 'selected') || 'none'}
              onClick={() => clickMusicItem(Number(index))}
            >
              <Style.Link href={info.content} target="_blank" onClick={(event) => clickLink(event, info.content)}>
                {info.content}
              </Style.Link>
              <Style.Title>{info.title}</Style.Title>
            </Style.MusicItem>
          )),
          toArray
        )}
      </Style.MusicList>
      <Style.Controller>
        <Style.ControlIcon>
          <UpIcon color="#35425e" />
        </Style.ControlIcon>
        <Style.ControllerMiddle>
          <Style.ControlIcon onClick={changePrevMusic}>
            <PrevIcon color="#35425e" />
          </Style.ControlIcon>
          <Style.ControllerCenter>
            <Style.PlayIcon onClick={handlePlayOrPause}>
              {playing ? <PauseIcon color="#fff" /> : <PlayIcon color="#fff" />}
            </Style.PlayIcon>
          </Style.ControllerCenter>
          <Style.ControlIcon onClick={changeNextMusic}>
            <NextIcon color="#35425e" />
          </Style.ControlIcon>
        </Style.ControllerMiddle>
        <Style.ControlIcon>
          <DownIcon color="#35425e" />
        </Style.ControlIcon>
      </Style.Controller>
    </Style.Container>
  );
}

export default ContactPage;
