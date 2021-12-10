import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

interface PlayingProps {
  isPlaying: boolean;
}

interface LpCoverProps {
  gifLink: string;
}

interface LpProps {
  imageLink: string;
}

const lpAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProjectTitle = styled.h1`
  font-size: 3.6rem;
  color: white;
  user-select: none;
`;

export const LpWrapper = styled.div<PlayingProps>`
  margin: 4rem 0;
  height: 45rem;
  width: ${(props) => (props.isPlaying ? '22.5rem' : '45rem')};
  position: relative;
  transition: width 1.5s;
  user-select: none;
`;

export const LpCover = styled.div<PlayingProps & LpCoverProps & LpProps>`
  width: 45rem;
  height: 45rem;
  position: absolute;
  right: 0;
  background-color: white;

  &:before {
    background-image: url(${(props) => (props.isPlaying ? props.gifLink : props.imageLink)});
    top: 0;
    left: 0;
    position: absolute;
    background-size: 100%;
    opacity: ${(props) => (props.isPlaying ? 1 : 0.1)};
    content: '';
    width: 100%;
    height: 100%;
  }
`;

// https://codepen.io/thebabydino/pen/HjJlL
export const Lp = styled.div<PlayingProps & LpProps>`
  width: 45rem;
  height: 45rem;
  background-color: black;
  position: absolute;
  left: 0;
  border-radius: 50%;
  background: linear-gradient(30deg, transparent 40%, rgba(42, 41, 40, 0.85) 40%) no-repeat 100% 0,
    linear-gradient(60deg, rgba(42, 41, 40, 0.85) 60%, transparent 60%) no-repeat 0 100%,
    repeating-radial-gradient(#2a2928, #2a2928 4px, #555 5px, #2a2928 6px);
  background-size: 50% 100%, 100% 50%, 100% 100%;
  animation: ${(props) => props.isPlaying && lpAnimation} 2s linear infinite;

  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: solid 1px #fff;
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    box-shadow: 0 0 0 4px #000, inset 0 0 0 10px #000;
    background: #b5ac9a;
    content: '';
    background-image: url(${(props) => props.imageLink});
    background-size: cover;
  }
`;

export const ControlWrapper = styled.div`
  display: flex;
  width: 45rem;
  justify-content: space-between;
`;

export const ControlIcon = styled.div`
  width: 6rem;
  height: 6rem;
  cursor: pointer;
`;

export const LpInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

export const Date = styled.div`
  width: 100%;
  text-align: right;
  font-size: 1.5rem;
`;

export const TechList = styled.ul`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const TechItem = styled.li`
  padding: 0.5rem 1rem;
  background-color: black;
  color: white;
  border-radius: 0.5rem;
  font-size: 1.3rem;
`;

export const LinkList = styled.div`
  display: flex;
  gap: 2rem;
`;

export const LinkWrapper = styled.a`
  width: fit-content;
  display: flex;
  align-items: center;
  z-index: 1;
  border-bottom: 1px solid black;
`;

export const LinkIcon = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
`;

export const LinkText = styled.span`
  font-size: 1.5rem;
`;

export const ExplanationList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const ExplanationItem = styled.li`
  font-size: 1.5rem;
`;

export const AuthorList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  bottom: 1rem;
`;

export const AuthorItem = styled.li``;