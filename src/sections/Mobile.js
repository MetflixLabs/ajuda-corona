import React from 'react';
import styled from 'styled-components';

import Hero from '@sections/Hero';

import Controle from '@components/Controle';
import InformationCarousel from '@components/InformationCarousel';

export default () => (
  <MobileWrapper>
    <Hero />
    <ControlWrapper>
      <Controle />
      <InformationCarousel />
    </ControlWrapper>
  </MobileWrapper>
);

const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 576px;
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
`;

const ControlWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
