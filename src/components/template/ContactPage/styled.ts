import styled from '@emotion/styled';
import mq from '../../../style/mq';

type StatusType = 'selected' | 'none';
interface MusicItemProps {
  status: StatusType;
}

export const Container = styled.main`
  width: 400px;
  margin: 0 auto;
  margin-top: 15rem;

  ${mq('sm')} {
    width: 300px;
    margin-top: 9rem;
  }
`;

export const MusicList = styled.ul`
  width: 100%;
  height: 320px;
  overflow: auto;
  background-color: #fff;
  border-radius: 10px;

  ${mq('sm')} {
    height: 270px;
  }
`;

export const MusicItem = styled.li<MusicItemProps>`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  color: ${(props) => (props.status === 'selected' ? '#fff' : '#000')};
  background-color: ${(props) => (props.status === 'selected' ? '#32425e' : 'transparent')};
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  user-select: none;

  ${mq('sm')} {
    font-size: 1.5rem;
  }
`;

export const Link = styled.a`
  font-size: 1.8rem;
  user-select: none;

  ${mq('sm')} {
    font-size: 1.5rem;
  }
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

  ${mq('sm')} {
    margin-top: 4rem;
  }
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
