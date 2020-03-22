import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Timer from 'react-compound-timer';
import moment from 'moment';

import powerButtonIcon from '../images/icons/powerButton.svg';
import loadingIcon from '../images/icons/loading.svg';

import Miner from '../components/core/Miner';
import colors from '../components/utils/colors';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import MineBar from '../components/MineBar';

const toggleMiner = (isMinerRunning, setIsMinerRunning) => {
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

const IndexPage = () => {
  const [isMinerReady, setIsMinerReady] = useState(false);
  const [confirmedCases, setconfirmedCases] = useState(null);
  const [isMinerRunning, setIsMinerRunning] = useState(false);
  const [currentThrottle, setCurrentThrottle] = useState(1);

  useEffect(() => {
    if (!confirmedCases) {
      window.gtag &&
        window.gtag('config', 'UA-161435848-1', {
          page_title: 'home',
          page_path: '/',
        });

      setconfirmedCases('-');

      axios
        .get('//coronavirus-tracker-api.herokuapp.com/v2/locations/35')
        .then(res => {
          const { confirmed } = res.data.location.latest;

          if (confirmed > 0) {
            setconfirmedCases(confirmed);
          }
        })
        .catch(err => err);
    }
  }, []);

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
            <HeroTitle>
              Nos ajude a minerar criptomoedas que serão doadas na causa contra
              a COVID-19.
            </HeroTitle>
          </HeroDescriptionWrapper>
          <HeroDataWrapper>
            <HeroTitle>Dados importantes</HeroTitle>
            <CardsWrapper>
              <Carousel
                confirmedCases={confirmedCases}
                hours={moment().diff('2020-03-21', 'hours')}
              />
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
  min-width: 1160px;
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
  max-width: 360px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatusInnerWrapper = styled.div`
  width: 460px;
  max-width: 100%;
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
