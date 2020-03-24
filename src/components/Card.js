import React from 'react';
import styled from 'styled-components';

import media from '@utils/media';
import colors from '@utils/colors';

const Card = ({ title, description, isDash, fontSize, currency }) => (
  <Wrapper isDash={isDash}>
    <CardTitle isDash={isDash} fontSize={fontSize} currency={currency}>
      {title}
      {currency && title !== '-' && <Currency>MINTME</Currency>}
    </CardTitle>

    <CardDescription isDash={isDash}>{description}</CardDescription>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: ${props => (props.isDash ? '500px' : '285px')};
  min-width: 205px;
  min-height: 80px;
  padding: ${props => (props.isDash ? '20px 30px' : '10px 30px')};
  background: ${props => (props.isDash ? colors.greyCard : colors.white)};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 15px;

  ${media.phoneLandscape`
    min-height: 185px;
    background: ${props => (props.isDash ? colors.purple : colors.white)};
  `}
`;

const CardTitle = styled.div`
  color: ${colors.gray};
  font-weight: bold;
  font-size: ${props =>
    props.fontSize ? props.fontSize : props.isDash ? '24px' : '64px'};
  line-height: ${props =>
    props.currency ? '28px' : props.isDash ? '28px' : '75px'};
  margin-bottom: ${props => (props.isDash ? '10px' : '0')};
  text-align: ${props => (props.currency ? 'right' : 'left')};
`;

const CardDescription = styled.div`
  color: ${props => (props.isDash ? colors.gray : colors.purple)};
  font-weight: bold;
  font-size: ${props => (props.isDash ? '48px' : '33px')};
  line-height: 42px;
`;

const Currency = styled.div`
  font-size: 14px;
  line-height: 14px;
  text-align: right;
`;

export default Card;
