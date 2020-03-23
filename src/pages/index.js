import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import io from 'socket.io-client';

import colors from '@components/utils/colors';
import Layout from '@layouts/layout';
import SEO from '@components/seo';

import Hero from '@sections/Hero';
import Dashboard from '@sections/Dashboard';
import Disclaimer from '@sections/Disclaimer';

const socketURL =
  typeof window !== 'undefined' && !!window.location.href.match(/localhost/gi)
    ? 'http://localhost:5000'
    : 'https://gretchenless-cloud.xyz';

const socket = io.connect(socketURL, {
  path: '/corona',
});

const IndexPage = () => {
  const [brazilData, setBrazilData] = useState(null);

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

  return (
    <Layout>
      <SEO title="Ajuda Corona - @MetflixLabs" />
      <Wrapper>
        <Hero brazilData={brazilData} serverData={serverData} />
        <BottomWrapper>
          <Dashboard />
          <Disclaimer />
        </BottomWrapper>
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
