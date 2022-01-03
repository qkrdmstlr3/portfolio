import React from 'react';
import * as Style from './styled';

export interface PortfolioInfoType {
  startDate: Date;
  endDate: Date;
  explanation: string;
}

interface PortfolioBoxProps {
  children: PortfolioInfoType;
}

function PortfolioBox({ children: { startDate, endDate, explanation } }: PortfolioBoxProps) {
  return (
    <Style.Container>
      <Style.Date>
        {startDate.toLocaleString().slice(0, 9)} - {endDate.toLocaleString().slice(0, 9)}
      </Style.Date>
      <Style.Explanation>{explanation}</Style.Explanation>
    </Style.Container>
  );
}

export default PortfolioBox;
