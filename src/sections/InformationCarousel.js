import React, { useState, useEffect } from 'react';

import { breakpoints } from '@components/utils/media';
import useWindowSize from '@hooks/useWindowSize';
import moment from 'moment';

import HeroTitle from '@components/HeroTitle';
import CardsWrapper from '@components/CardsWrapper';
import Carousel from '@components/Carousel';

export default ({ brazilData, serverData }) => {
  const b = breakpoints();
  const windowSize = useWindowSize();
  const [isMobile, setIsMobile] = useState(windowSize < b.phoneLandscape);

  useEffect(() => {
    const width = windowSize.width;
    const vert = width < b.phoneLandscape;
    setIsMobile(vert);
  }, [windowSize]);

  return (
    <>
      {isMobile ? (
        <CardsWrapper>
          <Carousel
            brazilData={brazilData}
            hours={moment().diff('2020-03-21', 'hours')}
            serverData={serverData}
          />
        </CardsWrapper>
      ) : (
        <>
          <HeroTitle>Dados importantes</HeroTitle>
          <CardsWrapper>
            <Carousel
              brazilData={brazilData}
              hours={moment().diff('2020-03-21', 'hours')}
              serverData={serverData}
            />
          </CardsWrapper>
        </>
      )}
    </>
  );
};
