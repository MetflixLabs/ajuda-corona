import React from 'react';
import styled from 'styled-components';

import media from '@utils/media';
import colors from '@utils/colors';

import useMobileRes from '@hooks/useMobileRes';

import HeroTitle from '@components/HeroTitle';
import InformationCarousel from '@components/InformationCarousel';

export default ({ brazilData, serverData }) => {
  const isMobile = useMobileRes();

  return (
    <HeroWrapper>
      <HeroDescriptionWrapper>
        <HeroTitle>
          Nos ajude a minerar criptomoedas que serão doadas na causa contra a
          COVID-19.
        </HeroTitle>
      </HeroDescriptionWrapper>
      <HeroDataWrapper>
        <InformationCarousel brazilData={brazilData} serverData={serverData} />
      </HeroDataWrapper>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  ${media.large`
    padding: 40px 40px 10px 40px;
    flex-direction: row;
    align-items: center;
  `}
`;

const HeroDescriptionWrapper = styled.div`
  font-weight: bold;
  font-size: 38px;
  line-height: 56px;
`;

const HeroDataWrapper = styled.div`
  position: relative;
  margin: 40px 0 20px 0;

  ${media.large`
    padding: 0;
    min-width: 600px;
    
    &:before {
    content: '';
    position: absolute;
    z-index: 1;
    width: 240px;
    height: 20px;
    left: 132px;
    top: 33px;
    background: ${colors.purple};
  }
  `}
`;
