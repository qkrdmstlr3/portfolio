import styled from '@emotion/styled';

export const Container = styled.main`
  width: 400px;
  margin: 0 auto;
  margin-top: 12rem;
`;

export const MusicList = styled.ul`
  width: 100%;
  height: 320px;
  overflow: auto;
  background-color: #fff;
  border-radius: 10px;
`;

export const MusicItem = styled.li``;

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
