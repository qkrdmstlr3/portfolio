import React, { useState, useMemo, useEffect } from 'react';
import { map, pipe, filter, reduce, toArray } from '@fxts/core';
import useAudio from '../../../hooks/useAudio';
import PlayIcon from '../../UI/Icon/Play';
import PauseIcon from '../../UI/Icon/Pause';
import PrevIcon from '../../UI/Icon/Prev';
import NextIcon from '../../UI/Icon/Next';
import LinkIcon from '../../UI/Icon/Link';
import * as Style from './styled';

export interface PortfolioType {
  title: string;
  gifLink: string;
  imageLink: string;
  githubLink: string;
  deployLink?: string;
  musicLink: string;
  techs: string[];
  explanations: string[];
  startDate: Date;
  endDate?: Date;
  authors: string[];
}

interface PortfolioPageType {
  portfolioList: PortfolioType[];
}

function PortfolioPage({ portfolioList }: PortfolioPageType) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const portfolio = useMemo(() => portfolioList[selectedIndex], [selectedIndex]);
  const { playing, togglePlaying, changeMusicWithStop } = useAudio(portfolio.musicLink);

  useEffect(() => {
    changeMusicWithStop(portfolio.musicLink);
  }, [portfolio]);

  const changePlayState = () => {
    togglePlaying();
  };

  const changeNextMusic = () => {
    setSelectedIndex((selectedIndex + 1) % portfolioList.length);
  };

  const changePrevMusic = () => {
    setSelectedIndex((selectedIndex || portfolioList.length) - 1);
  };

  return (
    <Style.Container>
      <Style.ProjectTitle>{portfolio.title.toUpperCase()}</Style.ProjectTitle>
      <Style.LpWrapper isPlaying={playing}>
        <Style.Lp isPlaying={playing} imageLink={portfolio.imageLink} />
        <Style.LpCover isPlaying={playing} gifLink={portfolio.gifLink} imageLink={portfolio.imageLink}>
          {!playing && (
            <Style.LpInfo>
              <Style.Date>
                {pipe(
                  [portfolio.startDate, portfolio.endDate],
                  filter((date) => date),
                  map((date) => date.toLocaleString().slice(0, 12)),
                  reduce((acc, cur) => `${acc} ~ ${cur}`)
                )}
              </Style.Date>
              <Style.LinkList>
                <Style.LinkWrapper href={portfolio.deployLink} target="_blank">
                  <Style.LinkIcon>
                    <LinkIcon color="black" />
                  </Style.LinkIcon>
                  <Style.LinkText>배포 주소</Style.LinkText>
                </Style.LinkWrapper>
                <Style.LinkWrapper href={portfolio.githubLink} target="_blank">
                  <Style.LinkIcon>
                    <LinkIcon color="black" />
                  </Style.LinkIcon>
                  <Style.LinkText>깃허브 주소</Style.LinkText>
                </Style.LinkWrapper>
              </Style.LinkList>
              <Style.TechList>
                {pipe(
                  portfolio.techs,
                  map((tech) => <Style.TechItem key={tech}>{tech}</Style.TechItem>),
                  toArray
                )}
              </Style.TechList>
              <Style.ExplanationList>
                {pipe(
                  portfolio.explanations,
                  map((exp) => <Style.ExplanationItem key={exp}>{exp}</Style.ExplanationItem>),
                  toArray
                )}
              </Style.ExplanationList>
              <Style.AuthorList>
                {pipe(
                  portfolio.authors,
                  map((exp) => <Style.AuthorItem key={exp}>{exp}</Style.AuthorItem>),
                  toArray
                )}
              </Style.AuthorList>
            </Style.LpInfo>
          )}
        </Style.LpCover>
      </Style.LpWrapper>
      <Style.ControlWrapper>
        <Style.ControlIcon onClick={changePrevMusic}>
          <PrevIcon color="white" />
        </Style.ControlIcon>
        <Style.ControlIcon onClick={changePlayState}>
          {playing ? <PauseIcon color="white" /> : <PlayIcon color="white" />}
        </Style.ControlIcon>
        <Style.ControlIcon onClick={changeNextMusic}>
          <NextIcon color="white" />
        </Style.ControlIcon>
      </Style.ControlWrapper>
    </Style.Container>
  );
}

export default PortfolioPage;
