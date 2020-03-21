import React from 'react';
import styled from 'styled-components';

import media from '../components/utils/media';
import colors from '../components/utils/colors';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Card from '../components/Card';
import MineBar from '../components/MineBar';

const IndexPage = () => (
  <Layout>
    <SEO title="Ajuda Corona - @MetflixLabs" />
    <HeroWrapper>
      <HeroTitle>#ajuda corona.</HeroTitle>
    </HeroWrapper>
    <SubHeroWrapper>
      <MineBar />
      <Card title="2255" description="Horas doadas"></Card>
      <Card title="1350" description="Doadores simultâneos"></Card>
    </SubHeroWrapper>
  </Layout>
);

const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 500px;
  background: ${colors.purple};
`;

const HeroTitle = styled.div`
  font-size: 144px;
  font-weight: bold;
  line-height: 149px;
  max-width: 530px;
`;

const SubHeroWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* max-width: 675px; */
  margin: 0 10px;
  ${media.tablet`
    margin: -50px auto 0;
    padding: 0 20px;
  `};
  ${media.desktop`    
    /* max-width: 915px; */
  `};
  ${media.large`
    /* max-width: 1075px; */
  `};
`;

export default IndexPage;
