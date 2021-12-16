import styled from '@emotion/styled';

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
`;

export const CDPlayerWrapper = styled.div`
  position: relative;
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
`;

export const Content = styled.span<ContentProps>`
  display: block;
  margin: 2px 0;
  font-size: 2.4rem;
  font-family: sans-serif;
  text-align: ${(props) => props.textAlign};
  color: white;
  letter-spacing: 2px;
`;

export const Emphasize = styled.strong`
  margin-right: 10px;
  font-size: 3.6rem;
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
`;
