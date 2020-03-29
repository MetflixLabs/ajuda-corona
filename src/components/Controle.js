import React from 'react';

import checkMobileRes from '@hooks/checkMobileRes';

import Card from '@components/Card';
import MineBar from '@components/MineBar';
import BottomTitle from '@components/BottomTitle';

export default () => {
  const isMobile = checkMobileRes();

  return (
    <>
      {isMobile ? (
        <MineBar />
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
