import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';

import Miner from '@components/core/Miner';

import media from '@utils/media';

import powerButtonIcon from '@src/images/icons/powerButton.svg';
import loadingIcon from '@src/images/icons/loading.svg';

import Controle from '@components/Controle';
import Status from '@components/Status';

export default () => {
  const [isAdblocked, setIsAdblocked] = useState(false);
  const [isMinerReady, setIsMinerReady] = useState(false);
  const [isMinerRunning, setIsMinerRunning] = useState(false);
  const [currentThrottle, setCurrentThrottle] = useState(1);

  const toggleMiner = (isAdblocked, isMinerRunning, setIsMinerRunning) => {
    if (isAdblocked) {
      return navigate('/ad-block');
    }

    if (isMinerRunning) {
      window.miner.stop();

      window.gtag &&
        window.gtag('event', 'click', {
          event_label: 'power-button-stop',
          event_category: 'power-button',
          non_interaction: 1,
        });

      return setIsMinerRunning(false);
    }

    window.gtag &&
      window.gtag('event', 'click', {
        event_label: 'power-button-start',
        event_category: 'power-button',
        non_interaction: 1,
      });

    window.miner.start();
    setIsMinerRunning(true);
  };

  return (
    <>
      <Miner
        setIsMinerReady={setIsMinerReady}
        setIsAdblocked={setIsAdblocked}
        currentThrottle={currentThrottle}
      />
      <BottomInnerWrapper>
        <ControlWrapper>
          <Controle
            currentThrottle={currentThrottle}
            setCurrentThrottle={setCurrentThrottle}
          />
        </ControlWrapper>
        <Status />
      </BottomInnerWrapper>
      <PowerWrapper>
        <PowerButton
          onClick={() =>
            isMinerReady &&
            toggleMiner(isAdblocked, isMinerRunning, setIsMinerRunning)
          }
          src={isMinerReady ? powerButtonIcon : loadingIcon}
          isMinerRunning={isMinerRunning}
        />
      </PowerWrapper>
    </>
  );
};

const BottomInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-items: center;
  justify-content: space-around;
  max-width: 1200px;
  margin: auto;
  ${media.large`
    padding: 0 40px;
    flex-direction: row;
  `}
`;

const ControlWrapper = styled.div``;

const PowerWrapper = styled.div`
  text-align: right;
  max-width: 1200px;
  margin: auto;
  padding: 40px 40px 0;
`;

const PowerButton = styled.img`
  cursor: pointer;
  opacity: ${props => (props.isMinerRunning ? '0.2' : '1')};
`;
