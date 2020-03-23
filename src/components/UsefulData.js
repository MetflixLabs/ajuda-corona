import React from 'react'

import moment from 'moment'

import HeroTitle from '../components/HeroTitle'
import CardsWrapper from '../components/CardsWrapper'
import Carousel from '../components/Carousel';

export default ({brazilData, serverData}) => {

  return (
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
  )
}