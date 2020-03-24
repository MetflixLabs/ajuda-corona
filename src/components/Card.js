import React from 'react';
import styled from 'styled-components';

import media from '@utils/media';
import colors from '@utils/colors';

const Card = ({ title, description, isDash, fontSize, currency }) => {
  return (
    <Wrapper isDash={isDash}>
      <CardTitle isDash={isDash} fontSize={fontSize} currency={currency}>
        {title}
        {currency && title !== '-' && <Currency>MINTME</Currency>}
      </CardTitle>

      <CardDescription isDash={isDash}>{description}</CardDescription>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${props => (props.isDash ? '250px' : '160px')};
  height: ${props => (props.isDash ? '80px' : '195px')};
  padding: ${props => (props.isDash ? '20px 30px' : '10px 30px')};
  background: ${props => (props.isDash ? colors.greyCard : colors.white)};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  margin-right: 0px;

  ${media.phoneLandscape`
    width: auto;
    max-width: ${props => (props.isDash ? '500px' : '250px')};
    min-width: ${props => (props.isDash ? '205px' : '250px')};
    min-height: 185px;
    background: ${props => (props.isDash ? colors.purple : colors.white)};
  `}
`;

const CardTitle = styled.div`
  color: ${colors.gray};
  font-weight: bold;
  font-size: 36px;
  line-height: ${props =>
    props.currency ? '28px' : props.isDash ? '28px' : '75px'};
  margin-bottom: ${props => (props.isDash ? '10px' : '0')};
  text-align: ${props => (props.currency ? 'right' : 'left')};
  ${media.phoneLandscape`
    font-size: ${props =>
      props.fontSize ? props.fontSize : props.isDash ? '24px' : '64px'};
  `}
`;

const CardDescription = styled.div`
  color: ${props => (props.isDash ? colors.gray : colors.purple)};
  font-weight: 500;
  font-size: 18px;
  ${media.phoneLandscape`
    line-height: 42px;
    font-weight: bold;
    font-size: ${props => (props.isDash ? '48px' : '33px')};
  `}
`;

const Currency = styled.div`
  font-size: 14px;
  line-height: 14px;
  text-align: right;
`;

export default Card;
