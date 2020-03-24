import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import media, { breakpoints } from '@utils/media';
import useWindowSize from '@hooks/useWindowSize';

import Timer from 'react-compound-timer';

import BottomTitle from '@components/BottomTitle';
import CardsWrapper from '@components/CardsWrapper';
import Card from '@components/Card';

export default ({ isMinerRunning, currentThrottle }) => {
  const [isMobile, setIsMobile] = useState(false);
  const windowSize = useWindowSize();
  const b = breakpoints();

  useEffect(() => {
    const isMobile = windowSize.width < b.phoneLandscape;
    setIsMobile(isMobile);
  }, [windowSize]);

  return (
    <StatusWrapper>
      <StatusInnerWrapper>
        <Title>Status</Title>
        <Label>Força</Label>
        <CardsWrapper>
          <Card
            title={isMobile ? '' : 'Força'}
            description={isMinerRunning ? `${currentThrottle}%` : '-'}
            isDash
          ></Card>
          <Label>Tempo</Label>
          <Card
            title={isMobile ? '' : 'Tempo'}
            description={
              isMinerRunning ? (
                <Timer
                  formatValue={value => `${value < 10 ? `0${value}` : value}`}
                >
                  <Timer.Hours />
                  {':'}
                  <Timer.Minutes />
                  {':'}
                  <Timer.Seconds />
                </Timer>
              ) : (
                '-'
              )
            }
            isDash
          ></Card>
        </CardsWrapper>
      </StatusInnerWrapper>
    </StatusWrapper>
  );
};

const StatusWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
  ${media.large`
    margin: 0;
  `}
`;

const StatusInnerWrapper = styled.div`
  ${media.phoneLandscape`
    max-width: 100%;
    width: 460px;
  `}
`;

const Label = styled(BottomTitle)`
  display: block;

  ${media.phoneLandscape`
  display: none;
  `}
`;

const Title = styled(BottomTitle)`
  display: none;
  ${media.phoneLandscape`
    display: block;
  `}
`;
