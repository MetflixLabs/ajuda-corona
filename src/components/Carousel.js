import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Carousel from 'nuka-carousel';

import colors from '../components/utils/colors';
import media, { breakpoints } from '../components/utils/media'
import Card from '../components/Card';

import arrowIcon from '../images/icons/arrow.svg';

export default ({ brazilData, hours, serverData }) => {
  const { balance, onlineUsers } = serverData;

  const [slidesToShow, setSlidesToShow] = useState(2)

  const breakpoint = breakpoints()

  const params = {
    dragging: true,
    slidesToShow,
    cellSpacing: 10,
    slidesToScroll: 1,
  }

  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const width = windowSize.width
    if (width < breakpoint.phoneLandscape) return setSlidesToShow(1)
    if (width < breakpoint.tablet) return setSlidesToShow(2)
    if (width < breakpoint.desktop) return setSlidesToShow(3)
    if (width < breakpoint.large) return setSlidesToShow(4)
    return setSlidesToShow(2)
  }, [windowSize])

  return (
    <SCarousel {...params}>
      <Card title={balance} description="Total arrecadado" fontSize={'28px'} />
      <Card
        title={onlineUsers}
        description={onlineUsers === 1 ? 'Doador online' : 'Doadores online'}
        fontSize={'52px'}
      />
      <Card
        title={brazilData ? brazilData.confirmed : '-'}
        description="Casos no Brasil"
      />
      <Card
        title={brazilData ? brazilData.deaths : '-'}
        description="Mortes no Brasil"
      />
      <Card
        title={brazilData ? brazilData.recovered : '-'}
        description="Curados no Brasil"
      />
      <Card title={hours} description="Horas online" />
    </SCarousel>
  );
};

const SCarousel = styled(Carousel)`
  .slider-control-bottomcenter {
    width: 100% !important;
  }

  .slider-slide {
    outline: none !important;
    align-items: center;

  }

  .paging-item {
    button {
      padding: 0 15px !important;
      opacity: unset !important;
    }

    .paging-dot {
      display: none;
    }
  }

  .slider-list {
    display: flex;
    width: 100% !important;
    height: 230px !important;
  }

  .slider-control-centerleft {
    z-index: 3;
    right: 80px !important;
    transform: translateY(-50%);
    top: -45px !important;
    left: unset !important;

    button {
      &:after {
        content: '';
        position: absolute;
        background-image: url(${arrowIcon});
        background-repeat: no-repeat;
        background-size: auto;
        transform: rotate(180deg);
        width: 12px;
        height: 20px;
        top: 0;
        left: 2px;
        margin: auto;
        right: 0;
        bottom: 0;
      }
    }
  }

  .slider-control-centerright {
    z-index: 3;
    top: -45px !important;
    right: 16px !important;

    button {
      &:after {
        content: '';
        position: absolute;
        background-image: url(${arrowIcon});
        background-repeat: no-repeat;
        background-size: auto;
        width: 12px;
        height: 20px;
        top: 0;
        left: 2px;
        margin: auto;
        right: 0;
        bottom: 0;
      }
    }
  }

  .slider-control-centerleft,
  .slider-control-centerright {
    button {
      outline: none;
      font-size: 0;
      border-radius: 50px;
      height: 50px;
      width: 50px;
      background: ${colors.white} !important;
      color: ${colors.gray} !important;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    }
  }
`;
