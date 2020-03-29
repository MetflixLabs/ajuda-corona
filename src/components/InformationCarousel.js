import React from 'react';

import useMobileRes from '@hooks/useMobileRes';
import moment from 'moment';

import HeroTitle from '@components/HeroTitle';
import CardsWrapper from '@components/CardsWrapper';
import Carousel from '@components/Carousel';

export default () => {
  const isMobile = useMobileRes();
  return (
    <>
      {isMobile ? (
        <CardsWrapper>
          <Carousel hours={moment().diff('2020-03-21', 'hours')} />
        </CardsWrapper>
      ) : (
        <>
          <HeroTitle>Dados importantes</HeroTitle>
          <CardsWrapper>
            <Carousel hours={moment().diff('2020-03-21', 'hours')} />
          </CardsWrapper>
        </>
      )}
    </>
  );
};
