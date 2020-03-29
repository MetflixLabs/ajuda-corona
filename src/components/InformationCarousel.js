import React from 'react';
import styled from 'styled-components';

import useMobileRes from '@hooks/useMobileRes';
import moment from 'moment';

import Title from '@components/Title';
import CardsWrapper from '@components/CardsWrapper';
import Carousel from '@components/Carousel';

export default () => {
  const isMobile = useMobileRes();
  const carouselConfigs = {
    hours: moment().diff('2020-03-21', 'hours'),
  };
  return (
    <>
      {isMobile ? (
        <CarouselWrapper>
          <Title mb="10px" fontWeight={700} fontSize="24px">
            Dados importantes
          </Title>
          <Carousel {...carouselConfigs} />
        </CarouselWrapper>
      ) : (
        <>
          <Title>Dados importantes</Title>
          <CardsWrapper>
            <Carousel {...carouselConfigs} />
          </CardsWrapper>
        </>
      )}
    </>
  );
};

const CarouselWrapper = styled.div`
  margin-left: 30px;
  width: 100%;
`;
