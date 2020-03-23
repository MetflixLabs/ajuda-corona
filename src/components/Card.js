import React from 'react';
import styled from 'styled-components';

import colors from '../components/utils/colors';

const Card = ({ title, description, isPurple, fontSize, currency }) => (
  <Wrapper isPurple={isPurple}>
    <CardTitle isPurple={isPurple} fontSize={fontSize} currency={currency}>
      {title}
      {currency && title !== '-' && <Currency>MINTME</Currency>}
    </CardTitle>

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
  padding: ${props => (props.isPurple ? '20px 30px' : '10px 30px')};
  background: ${props => (props.isPurple ? colors.purple : colors.white)};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
`;

const CardTitle = styled.div`
  color: ${colors.gray};
  font-weight: bold;
  font-size: ${props =>
    props.fontSize ? props.fontSize : props.isPurple ? '24px' : '64px'};
  line-height: ${props =>
    props.currency ? '28px' : props.isPurple ? '28px' : '75px'};
  margin-bottom: ${props => (props.isPurple ? '10px' : '0')};
  text-align: ${props => (props.currency ? 'right' : 'left')};
`;

const CardDescription = styled.div`
  color: ${props => (props.isPurple ? colors.gray : colors.purple)};
  font-weight: bold;
  font-size: ${props => (props.isPurple ? '48px' : '33px')};
  line-height: 42px;
`;

const Currency = styled.div`
  font-size: 14px;
  line-height: 14px;
  text-align: right;
`;

export default Card;
