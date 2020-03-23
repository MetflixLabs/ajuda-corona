import React, { useState } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';

import Timer from 'react-compound-timer';

import Miner from '@components/core/Miner';

import media from '@utils/media';

import powerButtonIcon from '@src/images/icons/powerButton.svg';
import loadingIcon from '@src/images/icons/loading.svg';

import Card from '@components/Card';
import Controle from '@components/Controle';
import BottomTitle from '@components/BottomTitle';
import CardsWrapper from '@components/CardsWrapper';

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
        <StatusWrapper>
          <StatusInnerWrapper>
            <BottomTitle>Status</BottomTitle>
            <CardsWrapper>
              <Card
                title="Força"
                description={isMinerRunning ? `${currentThrottle}%` : '-'}
                isPurple
              ></Card>
              <Card
                title="Tempo"
                description={
                  isMinerRunning ? (
                    <Timer
                      formatValue={value =>
                        `${value < 10 ? `0${value}` : value}`
                      }
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
                isPurple
              ></Card>
            </CardsWrapper>
          </StatusInnerWrapper>
        </StatusWrapper>
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
  padding: 0 40px;
  ${media.large`
  flex-direction: row;
  `}
`;

const ControlWrapper = styled.div``;
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
  width: 460px;
  max-width: 100%;
`;

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
