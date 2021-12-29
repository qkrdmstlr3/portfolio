import React from 'react';
import * as Style from './styled';

interface PortfolioBoxProps {
  children: {
    startDate: Date;
    endDate: Date;
    explanation: string;
  };
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
