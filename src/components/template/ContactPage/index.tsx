import React from 'react';
import * as Style from './styled';
import DownIcon from '../../UI/Icon/Down';
import NextIcon from '../../UI/Icon/Next';
import PlayIcon from '../../UI/Icon/Play';
import PrevIcon from '../../UI/Icon/Prev';
import UpIcon from '../../UI/Icon/Up';

function ContactPage() {
  return (
    <Style.Container>
      <Style.MusicList />
      <Style.Controller>
        <Style.ControlIcon>
          <UpIcon color="#35425e" />
        </Style.ControlIcon>
        <Style.ControllerMiddle>
          <Style.ControlIcon>
            <PrevIcon color="#35425e" />
          </Style.ControlIcon>
          <Style.ControllerCenter>
            <Style.PlayIcon>
              <PlayIcon color="#fff" />
            </Style.PlayIcon>
          </Style.ControllerCenter>
          <Style.ControlIcon>
            <NextIcon color="#35425e" />
          </Style.ControlIcon>
        </Style.ControllerMiddle>
        <Style.ControlIcon>
          <DownIcon color="#35425e" />
        </Style.ControlIcon>
      </Style.Controller>
    </Style.Container>
  );
}

export default ContactPage;
