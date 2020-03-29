import React from 'react';
import styled from 'styled-components';

import useMobileRes from '@hooks/useMobileRes';

import Card from '@components/Card';
import MineBar from '@components/MineBar';
import BottomTitle from '@components/BottomTitle';
import PowerButton from '@components/PowerButton';

export default ({ startMining }) => {
  const isMobile = useMobileRes();

  return (
    <>
      {isMobile ? (
        <MobileControleWrapper>
          <MineBar />
          <PowerButton mt={20} startMining={startMining} />
        </MobileControleWrapper>
      ) : (
        <>
          <BottomTitle>Controle</BottomTitle>
          <Card
            title="Nível da sua contribuição"
            description={<MineBar />}
            isDash
          ></Card>
        </>
      )}
    </>
  );
};

const MobileControleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;
