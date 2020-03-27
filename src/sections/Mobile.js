import React from 'react';
import styled from 'styled-components';

import Hero from '@sections/Hero';

import MineBar from '@components/MineBar';
import Miner from '@components/core/Miner';
import Controle from '@components/Controle';
import InformationCarousel from '@components/InformationCarousel';

export default ({
  isAdblocked,
  setIsAdblocked,
  isMinerReady,
  setIsMinerReady,
  isMinerRunning,
  setIsMinerRunning,
  currentThrottle,
  setCurrentThrottle,
  brazilData,
  serverData,
}) => {
  return (
    <MobileWrapper>
      <Hero />
      <ControlWrapper>
        <Miner
          setIsMinerReady={setIsMinerReady}
          setIsAdblocked={setIsAdblocked}
          currentThrottle={currentThrottle}
        />
        <Controle
          currentThrottle={currentThrottle}
          setCurrentThrottle={setCurrentThrottle}
        />
        <InformationCarousel brazilData={brazilData} serverData={serverData} />
      </ControlWrapper>
    </MobileWrapper>
  );
};

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
`;
