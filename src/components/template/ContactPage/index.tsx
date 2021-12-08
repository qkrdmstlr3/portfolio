import React, { useState } from 'react';
import { map, pipe, toArray } from '@fxts/core';
import * as Style from './styled';
import DownIcon from '../../UI/Icon/Down';
import NextIcon from '../../UI/Icon/Next';
import PlayIcon from '../../UI/Icon/Play';
import PrevIcon from '../../UI/Icon/Prev';
import UpIcon from '../../UI/Icon/Up';

export interface ContactInfo {
  title: string;
  content: string;
}

interface ContactPageProps {
  infoList: ContactInfo[];
}

function ContactPage({ infoList }: ContactPageProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number>(undefined);

  const clickMusicItem = (index: number) => {
    setSelectedIndex(index);
  };

  const changeNextMusic = () => {
    setHoveredIndex(undefined);
    setSelectedIndex((selectedIndex + 1) % infoList.length);
  };

  const changePrevMusic = () => {
    setHoveredIndex(undefined);
    setSelectedIndex((selectedIndex || infoList.length) - 1);
  };

  const changeHoverForward = () => {
    const nextIndex = hoveredIndex !== undefined ? hoveredIndex : selectedIndex;
    setHoveredIndex((nextIndex + 1) % infoList.length);
  };

  const changeHoverBackward = () => {
    const nextIndex = hoveredIndex !== undefined ? hoveredIndex : selectedIndex;
    setHoveredIndex((nextIndex || infoList.length) - 1);
  };

  return (
    <Style.Container>
      <Style.MusicList>
        {pipe(
          Object.entries(infoList),
          map(([index, info]) => (
            <Style.MusicItem
              key={info.title}
              status={
                (Number(index) === selectedIndex && 'selected') ||
                (Number(index) === hoveredIndex && 'hovered') ||
                'none'
              }
              onClick={() => clickMusicItem(Number(index))}
            >
              <Style.Content>{info.content}</Style.Content>
              <Style.Title>{info.title}</Style.Title>
            </Style.MusicItem>
          )),
          toArray
        )}
      </Style.MusicList>
      <Style.Controller>
        <Style.ControlIcon onClick={changeHoverBackward}>
          <UpIcon color="#35425e" />
        </Style.ControlIcon>
        <Style.ControllerMiddle>
          <Style.ControlIcon onClick={changePrevMusic}>
            <PrevIcon color="#35425e" />
          </Style.ControlIcon>
          <Style.ControllerCenter>
            <Style.PlayIcon>
              <PlayIcon color="#fff" />
            </Style.PlayIcon>
          </Style.ControllerCenter>
          <Style.ControlIcon onClick={changeNextMusic}>
            <NextIcon color="#35425e" />
          </Style.ControlIcon>
        </Style.ControllerMiddle>
        <Style.ControlIcon onClick={changeHoverForward}>
          <DownIcon color="#35425e" />
        </Style.ControlIcon>
      </Style.Controller>
    </Style.Container>
  );
}

export default ContactPage;
