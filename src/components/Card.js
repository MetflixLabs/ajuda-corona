import React from 'react';
import styled from 'styled-components';

import media from '../components/utils/media';
import colors from '../components/utils/colors';

const Card = ({ title, description }) => (
  <Wrapper>
    <CardTitle>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 315px;
  min-width: 295px;
  margin: 0 30px;
  height: 200px;
  padding: 20px 30px;
  background: ${colors.white};
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
`;

const CardTitle = styled.div`
  color: ${colors.gray};
  font-weight: bold;
  font-size: 64px;
  line-height: 75px;
`;

const CardDescription = styled.div`
  color: ${colors.purple};
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
`;

export default Card;
