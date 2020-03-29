import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

import Miner from '@components/core/Miner';

import media from '@utils/media';

import powerButtonIcon from '@src/images/icons/powerButton.svg';
import loadingIcon from '@src/images/icons/loading.svg';

import Controle from '@components/Controle';
import Status from '@components/Status';

export default ({ startMining }) => {
  const configs = useSelector(state => state);
  const { isMinerReady, isMinerRunning } = configs;

  return (
    <>
      <Miner />
      <BottomInnerWrapper>
        <ControlWrapper>
          <Controle />
        </ControlWrapper>
        <Status />
      </BottomInnerWrapper>
      <PowerWrapper>
        <PowerButton
          onClick={() => startMining()}
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
