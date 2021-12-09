import styled from '@emotion/styled';

interface ContentProps {
  textAlign: 'left' | 'right';
}

export const Container = styled.main`
  max-width: 30rem;
  margin: 0 auto;
  margin-top: 12rem;
`;

export const CDPlayer = styled.img`
  display: block;
  border: 5px solid #ddd;
  border-radius: 50px;
`;

export const IntroduceWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 42rem);
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

export const LeftFirst = styled.div`
  position: absolute;
  padding: 6px;
  left: -60%;
  top: 10px;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
`;

export const LeftSecond = styled.div`
  position: absolute;
  padding: 6px;
  left: -60%;
  top: 170px;
  width: 100%;
  height: 50px;
`;

export const LeftThird = styled.div`
  position: absolute;
  padding: 6px;
  left: -60%;
  top: 290px;
  width: 100%;
  height: 50px;
`;

export const RightFirst = styled.div`
  position: absolute;
  padding: 6px;
  right: -60%;
  top: 80px;
  width: 100%;
  height: 50px;
`;

export const RightSecond = styled.div`
  position: absolute;
  padding: 6px;
  right: -60%;
  top: 180px;
  width: 100%;
  height: 100px;
  background-color: white;
`;

export const RightThird = styled.div`
  position: absolute;
  padding: 6px;
  right: -110%;
  top: 290px;
  width: 150%;
  height: 50px;
`;
