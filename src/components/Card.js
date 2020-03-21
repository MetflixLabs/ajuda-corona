import React from 'react';
import styled from 'styled-components';

import media from '../components/utils/media';
import colors from '../components/utils/colors';

const Card = ({ title, description, isPurple }) => (
  <Wrapper isPurple={isPurple}>
    <CardTitle isPurple={isPurple}>{title}</CardTitle>
    <CardDescription isPurple={isPurple}>{description}</CardDescription>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: ${props => (props.isPurple ? '500px' : '285px')};
  min-width: 205px;
  min-height: 185px;
  padding: 20px 30px;
  background: ${props => (props.isPurple ? colors.purple : colors.white)};
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
`;

const CardTitle = styled.div`
  color: ${colors.gray};
  font-weight: bold;
  font-size: ${props => (props.isPurple ? '24px' : '64px')};
  line-height: ${props => (props.isPurple ? '28px' : '75px')};
  margin-bottom: ${props => (props.isPurple ? '10px' : '0')};
`;

const CardDescription = styled.div`
  color: ${props => (props.isPurple ? colors.gray : colors.purple)};
  font-weight: bold;
  font-size: ${props => (props.isPurple ? '48px' : '36px')};;
  line-height: 42px;
`;

export default Card;
