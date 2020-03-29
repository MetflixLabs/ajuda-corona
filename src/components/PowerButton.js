import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { space } from 'styled-system';

import media from '@utils/media';

import powerButtonIcon from '@src/images/icons/powerButton.svg';
import loadingIcon from '@src/images/icons/loading.svg';

export default ({ startMining }) => {
  const configs = useSelector(state => state);
  const { isMinerReady, isMinerRunning } = configs;

  return (
    <PowerWrapper>
      <PowerButton
        onClick={() => startMining()}
        src={isMinerReady ? powerButtonIcon : loadingIcon}
        isMinerRunning={isMinerRunning}
      />
    </PowerWrapper>
  );
};

const PowerWrapper = styled.div`
  ${media.phoneLandscape`
  text-align: right;
  max-width: 1200px;
  margin: auto;
  padding: 40px 40px 0;
  `}

  ${space}
`;

const PowerButton = styled.img`
  cursor: pointer;
  opacity: ${props => (props.isMinerRunning ? '0.2' : '1')};
`;
