import React, { useState, useMemo } from 'react';
import { map, pipe, toArray } from '@fxts/core';
import PlayIcon from '../../UI/Icon/Play';
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const portfolio = useMemo(() => portfolioList[selectedIndex], [selectedIndex]);

  const changePlayState = () => {
    setIsPlaying(!isPlaying);
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
      <Style.LpWrapper isPlaying={isPlaying}>
        <Style.Lp isPlaying={isPlaying} imageLink={portfolio.imageLink} />
        <Style.LpCover isPlaying={isPlaying} gifLink={portfolio.gifLink} imageLink={portfolio.imageLink}>
          {!isPlaying && (
            <Style.LpInfo>
              <Style.Date>
                {portfolio.startDate.toLocaleString().slice(0, 12)} ~ {portfolio.endDate?.toLocaleString().slice(0, 12)}
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
                  map((tech) => <Style.TechItem>{tech}</Style.TechItem>),
                  toArray
                )}
              </Style.TechList>
              <Style.ExplanationList>
                {pipe(
                  portfolio.explanations,
                  map((exp) => <Style.ExplanationItem>{exp}</Style.ExplanationItem>),
                  toArray
                )}
              </Style.ExplanationList>
              <Style.AuthorList>
                {pipe(
                  portfolio.authors,
                  map((exp) => <Style.AuthorItem>{exp}</Style.AuthorItem>),
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
          <PlayIcon color="white" />
        </Style.ControlIcon>
        <Style.ControlIcon onClick={changeNextMusic}>
          <NextIcon color="white" />
        </Style.ControlIcon>
      </Style.ControlWrapper>
    </Style.Container>
  );
}

export default PortfolioPage;
