/* eslint-disable no-nested-ternary */
import styled from '@emotion/styled';

type StatusType = 'selected' | 'hovered' | 'none';
interface MusicItemProps {
  status: StatusType;
}

const backgroundMapping: { [state in StatusType]: string } = {
  selected: '#aaa',
  hovered: '#ddd',
  none: 'transparent',
};

export const Container = styled.main`
  width: 400px;
  margin: 0 auto;
  margin-top: 15rem;
`;

export const MusicList = styled.ul`
  width: 100%;
  height: 320px;
  overflow: auto;
  background-color: #fff;
  border-radius: 10px;
`;

export const MusicItem = styled.li<MusicItemProps>`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => backgroundMapping[props.status]};
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  user-select: none;
`;

export const Content = styled.span`
  font-size: 1.8rem;
  user-select: none;
`;

export const Controller = styled.div`
  width: 22rem;
  height: 22rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 10rem;
  padding: 1rem;
  border-radius: 11rem;
  background-color: #fff;
`;

export const ControllerMiddle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ControlIcon = styled.div`
  width: 3rem;
  cursor: pointer;
`;

export const PlayIcon = styled.div`
  width: 5rem;
  cursor: pointer;
`;

export const ControllerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 11rem;
  height: 11rem;
  border-radius: 5.5rem;
  background-color: #35425e;
`;
