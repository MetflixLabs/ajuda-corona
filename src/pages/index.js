import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import io from 'socket.io-client';
import { navigate } from 'gatsby';
import { useSelector, useDispatch } from 'react-redux';

import {
  setServerData,
  setBrazilData,
  setIsMinerRunning,
} from '@store/actions';

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
  const isMobile = checkMobileRes();
  const dispatch = useDispatch();

  const configs = useSelector(state => state);
  const { isAdblocked, isMinerRunning, brazilData } = configs;

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

      dispatch(setBrazilData(false));

      axios
        .get('//coronavirus-tracker-api.herokuapp.com/v2/locations/28')
        .then(res => {
          const { latest } = res.data.location;

          dispatch(setBrazilData(latest));
        })
        .catch(err => err);
    }
  }, []);

  const toggleMiner = () => {
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

      return dispatch(setIsMinerRunning(false));
    }

    window.gtag &&
      window.gtag('event', 'click', {
        event_label: 'power-button-start',
        event_category: 'power-button',
        non_interaction: 1,
      });

    window.miner.start();
    dispatch(setIsMinerRunning(true));
  };

  const startMining = () => toggleMiner();

  return (
    <Layout>
      <SEO title="Ajuda Corona - @MetflixLabs" />
      <Wrapper>
        {isMobile ? (
          <>
            <Mobile startMining={startMining} />
          </>
        ) : (
          <>
            <Hero />
            <BottomWrapper>
              <Dashboard startMining={startMining} />
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
