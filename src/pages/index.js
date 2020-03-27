import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import io from 'socket.io-client';
import { navigate } from 'gatsby';

import checkMobileRes from '@hooks/checkMobileRes';
import colors from '@components/utils/colors';
import Layout from '@layouts/layout';
import SEO from '@components/seo';

import Hero from '@sections/Hero';
import Dashboard from '@sections/Dashboard';
import Disclaimer from '@sections/Disclaimer';
import Mobile from '@sections/Mobile';

const socketURL =
  typeof window !== 'undefined' && !!window.location.href.match(/localhost/gi)
    ? 'http://localhost:3000'
    : 'https://gretchenless-cloud.xyz';

const socket = io.connect(socketURL, {
  path: '/corona',
});

const IndexPage = () => {
  const [isAdblocked, setIsAdblocked] = useState(false);
  const [isMinerReady, setIsMinerReady] = useState(false);
  const [isMinerRunning, setIsMinerRunning] = useState(false);
  const [currentThrottle, setCurrentThrottle] = useState(1);
  const [brazilData, setBrazilData] = useState(null);
  const isMobile = checkMobileRes();
  const [serverData, setServerData] = useState({
    balance: '-',
    onlineUsers: '-',
  });

  socket.on('serverData', data => {
    setServerData(data);
  });

  useEffect(() => {
    if (brazilData === null) {
      window.gtag &&
        window.gtag('config', 'UA-161435848-1', {
          page_title: 'home',
          page_path: '/',
        });

      setBrazilData(false);

      axios
        .get('//coronavirus-tracker-api.herokuapp.com/v2/locations/35')
        .then(res => {
          const { latest } = res.data.location;

          setBrazilData(latest);
        })
        .catch(err => err);
    }
  }, []);

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

  const startMining = () =>
    isMinerReady && toggleMiner(isAdblocked, isMinerRunning, setIsMinerRunning);

  return (
    <Layout>
      <SEO title="Ajuda Corona - @MetflixLabs" />
      <Wrapper>
        {isMobile ? (
          <>
            <Mobile
              startMining={startMining}
              brazilData={brazilData}
              serverData={serverData}
              setIsAdblocked={setIsAdblocked}
              isAdblocked={isAdblocked}
              setIsMinerReady={setIsMinerReady}
              isMinerReady={isMinerReady}
              isMinerRunning={isMinerRunning}
              setCurrentThrottle={setCurrentThrottle}
              currentThrottle={currentThrottle}
            />
          </>
        ) : (
          <>
            <Hero brazilData={brazilData} serverData={serverData}></Hero>
            <BottomWrapper>
              <Dashboard
                startMining={startMining}
                setIsAdblocked={setIsAdblocked}
                setIsMinerReady={setIsMinerReady}
                isMinerReady={isMinerReady}
                isMinerRunning={isMinerRunning}
                setCurrentThrottle={setCurrentThrottle}
                currentThrottle={currentThrottle}
              />
              <Disclaimer />
            </BottomWrapper>
          </>
        )}
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  background: ${colors.lightGray};
`;

const BottomWrapper = styled.div`
  background: ${colors.purple};
  padding: 60px 40px;
`;

export default IndexPage;
