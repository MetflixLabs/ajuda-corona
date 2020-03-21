import React from 'react';
import styled from 'styled-components';

import Miner from '../components/core/Miner';
import media from '../components/utils/media';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <Miner />
    <SEO title="Ajuda Corona - @MetflixLabs" /> 
    <ContentWrapper>
      ajuda coronavírus
    </ContentWrapper>
  </Layout>
);

const ContentWrapper = styled.div`
  z-index: 2;
  position: relative;
  display: block;
  padding-top: 300px;
  max-width: 675px;
  margin: 0 10px;
  color: #CECECE;
  ${media.tablet`
    margin: auto;
  `};
  ${media.desktop`    
    max-width: 915px;
  `};
  ${media.large`
    max-width: 1075px;
  `};
`;

export default IndexPage;
