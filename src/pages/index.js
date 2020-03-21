import React, { useState } from 'react';
import styled from 'styled-components';
import Timer from 'react-compound-timer';
// import Swiper from 'react-id-swiper';
// import 'swiper/css/swiper.css';

import powerButtonIcon from '../images/icons/powerButton.svg';
import loadingIcon from '../images/icons/loading.svg';

import Miner from '../components/core/Miner';
import media from '../components/utils/media';
import colors from '../components/utils/colors';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Card from '../components/Card';
import MineBar from '../components/MineBar';

// const swiperParams = {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   centeredSlides: true,
// };

const toggleMiner = (isMinerRunning, setIsMinerRunning) => {
  if (isMinerRunning) {
    window.miner.stop();
    return setIsMinerRunning(false);
  }

  window.miner.start();
  setIsMinerRunning(true);
};

const IndexPage = () => {
  const [isMinerReady, setIsMinerReady] = useState(false);
  const [isMinerRunning, setIsMinerRunning] = useState(false);
  const [currentThrottle, setCurrentThrottle] = useState(0);

  return (
    <Layout>
      <Miner
        setIsMinerReady={setIsMinerReady}
        currentThrottle={currentThrottle}
      />
      <SEO title="Ajuda Corona - @MetflixLabs" />
      <Wrapper>
        <HeroWrapper>
          <HeroDescriptionWrapper>
            Minere criptomoedas que serão doadas na causa contra o COVID-19.
          </HeroDescriptionWrapper>
          <HeroDataWrapper>
            <HeroTitle>Dados importantes</HeroTitle>
            <CardsWrapper>
              <Card title="2255" description="Doadores online" isInfo></Card>
              <Card title="1350" description="Horas doadas" isInfo></Card>
            </CardsWrapper>
          </HeroDataWrapper>
        </HeroWrapper>
        <BottomWrapper>
          <BottomInnerWrapper>
            <ControlWrapper>
              <BottomTitle>Controle</BottomTitle>
              <Card
                title="Nível da sua contribuição"
                description={
                  <MineBar
                    currentThrottle={currentThrottle}
                    setCurrentThrottle={setCurrentThrottle}
                  />
                }
                isPurple
              ></Card>
            </ControlWrapper>
            <StatusWrapper>
              <StatusInnerWrapper>
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
              </StatusInnerWrapper>
            </StatusWrapper>
          </BottomInnerWrapper>
          <PowerWrapper>
            <PowerButton
              onClick={() =>
                isMinerReady && toggleMiner(isMinerRunning, setIsMinerRunning)
              }
              src={isMinerReady ? powerButtonIcon : loadingIcon}
              isMinerRunning={isMinerRunning}
            />
          </PowerWrapper>
        </BottomWrapper>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  background: ${colors.lightGray};
`;

const HeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  padding: 40px;
  margin: auto;
`;

const HeroDescriptionWrapper = styled.div`
  font-weight: bold;
  font-size: 38px;
  line-height: 56px;
  max-width: 460px;
`;

const HeroDataWrapper = styled.div`
  position: relative;
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
`;

const HeroTitle = styled.div`
  font-size: 38px;
  line-height: 56px;
  font-weight: bold;
  z-index: 2;
  position: relative;
`;

const CardsWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`;

const BottomWrapper = styled.div`
  background: ${colors.purple};
  padding: 110px 40px;
`;

const BottomInnerWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  max-width: 1200px;
  margin: auto;
  padding: 0 40px;
`;

const ControlWrapper = styled.div``;
const StatusWrapper = styled.div`
  flex: 1;
`;

const StatusInnerWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const BottomTitle = styled.div`
  font-size: 36px;
  line-height: 42px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const PowerWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 40px 40px 0;
  text-align: right;
`;

const PowerButton = styled.img`
  cursor: pointer;
  opacity: ${props => (props.isMinerRunning ? '0.2' : '1')};
`;

export default IndexPage;
