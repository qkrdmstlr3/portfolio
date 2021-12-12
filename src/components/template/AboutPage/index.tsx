import React from 'react';
import * as Style from './styled';
import useInterval from '../../../hooks/useInterval';

function ContactPage() {
  const { time } = useInterval({ delay: 0.5, clearTime: 5 });

  return (
    <Style.Container>
      <Style.CDPlayer src="/cdplayer.svg" alt="cdplayer" />
      <Style.IntroduceWrapper>
        <Style.Code />
        <Style.LeftFirst time={time}>
          <Style.Content textAlign="right">재밌는 개발을 좋아하는</Style.Content>
          <Style.Content textAlign="right">예쁜 코드를 사랑하는</Style.Content>
          <Style.Content textAlign="right">발전을 위해 노력하는</Style.Content>
        </Style.LeftFirst>
        <Style.LeftSecond time={time}>
          <Style.Content textAlign="right">기술스택</Style.Content>
        </Style.LeftSecond>
        <Style.LeftThird time={time}>
          <Style.Content textAlign="right">경력사항</Style.Content>
        </Style.LeftThird>
        <Style.RightFirst time={time}>
          <Style.Content textAlign="left">개발자</Style.Content>
          <Style.Content textAlign="left">
            <Style.Emphasize>조개소년</Style.Emphasize>
            입니다
          </Style.Content>
        </Style.RightFirst>
        <Style.RightSecond time={time} />
        <Style.RightThird time={time}>
          <Style.Content textAlign="left">네이버 부스트캠프 5기(2020.08 - 12)</Style.Content>
          <Style.Content textAlign="left">SI Analytics 인턴(2021.07 - 08)</Style.Content>
        </Style.RightThird>
      </Style.IntroduceWrapper>
    </Style.Container>
  );
}

export default ContactPage;
