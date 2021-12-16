import styled from '@emotion/styled';
import mq from '../../../style/mq';

interface ContentBoxProps {
  time: number;
}

interface ContentProps {
  textAlign: 'left' | 'right';
}

export const Container = styled.main`
  max-width: 30rem;
  margin: 0 auto;
  margin-top: 12rem;
  user-select: none;

  ${mq('sm')} {
    margin-top: 8rem;
  }
`;

export const CDPlayerWrapper = styled.div`
  position: relative;

  ${mq('sm')} {
    width: 18rem;
    margin: 0 auto;
  }
`;

export const CDPlayer = styled.img`
  display: block;
  border: 5px solid #ddd;
  border-radius: 50px;
`;

export const AudioIconWrapper = styled.div`
  position: absolute;
  right: -40px;
  top: 50%;
  transform: translateY(-50%);
`;

export const IntroduceWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh);
  display: flex;
  justify-content: center;
`;

export const Code = styled.div`
  width: 12px;
  height: 100%;
  background-color: #f0f0f0;

  ${mq('sm')} {
    display: none;
  }
`;

export const Content = styled.span<ContentProps>`
  display: block;
  margin: 2px 0;
  font-size: 2.4rem;
  font-family: sans-serif;
  text-align: ${(props) => props.textAlign};
  color: white;
  letter-spacing: 2px;

  ${mq('sm')} {
    width: fit-content;
    font-size: 2rem;
  }
`;

export const Emphasize = styled.strong`
  margin-right: 10px;
  font-size: 3.6rem;

  ${mq('sm')} {
    margin: 0 5px;
  }
`;

export const LeftFirst = styled.div<ContentBoxProps>`
  position: absolute;
  padding: 6px;
  left: ${(props) => (props.time > 1.5 ? '-60%' : '-55%')};
  top: 10px;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  opacity: ${(props) => (props.time > 1.5 ? 1 : 0)};
  transition: opacity 0.5s, left 0.5s;

  ${mq('sm')} {
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const LeftSecond = styled.div<ContentBoxProps>`
  position: absolute;
  padding: 6px;
  left: ${(props) => (props.time > 2.5 ? '-60%' : '-55%')};
  top: 170px;
  width: 100%;
  height: 50px;
  opacity: ${(props) => (props.time > 2.5 ? 1 : 0)};
  transition: opacity 0.5s, left 0.5s;

  ${mq('sm')} {
    top: 180px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    font-weight: bold;
  }
`;

export const LeftThird = styled.div<ContentBoxProps>`
  position: absolute;
  padding: 6px;
  left: ${(props) => (props.time > 3.5 ? '-60%' : '-55%')};
  top: 290px;
  width: 100%;
  height: 50px;
  opacity: ${(props) => (props.time > 3.5 ? 1 : 0)};
  transition: opacity 0.5s, left 0.5s;

  ${mq('sm')} {
    top: 360px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    font-weight: bold;
  }
`;

export const RightFirst = styled.div<ContentBoxProps>`
  position: absolute;
  padding: 6px;
  right: ${(props) => (props.time > 2 ? '-60%' : '-55%')};
  top: 80px;
  width: 100%;
  height: 50px;
  opacity: ${(props) => (props.time > 2 ? 1 : 0)};
  transition: opacity 0.5s, right 0.5s;

  ${mq('sm')} {
    top: 105px;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const RightSecond = styled.div<ContentBoxProps>`
  position: absolute;
  padding: 6px;
  right: ${(props) => (props.time > 3 ? '-60%' : '-55%')};
  top: 180px;
  width: 100%;
  height: 100px;
  background-color: white;
  opacity: ${(props) => (props.time > 3 ? 1 : 0)};
  transition: opacity 0.5s, right 0.5s;

  ${mq('sm')} {
    top: 230px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
  }
`;

export const RightThird = styled.div<ContentBoxProps>`
  position: absolute;
  padding: 6px;
  right: ${(props) => (props.time > 4 ? '-110%' : '-105%')};
  top: 290px;
  width: 150%;
  height: 50px;
  opacity: ${(props) => (props.time > 4 ? 1 : 0)};
  transition: opacity 0.5s, right 0.5s;

  ${mq('sm')} {
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 395px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
