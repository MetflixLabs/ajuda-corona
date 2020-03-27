import React from 'react';

import checkMobileRes from '@hooks/checkMobileRes';

import Card from '@components/Card';
import MineBar from '@components/MineBar';
import BottomTitle from '@components/BottomTitle';

export default ({ currentThrottle, setCurrentThrottle }) => {
  const isMobile = checkMobileRes();

  return (
    <>
      {isMobile ? (
        <MineBar
          currentThrottle={currentThrottle}
          setCurrentThrottle={setCurrentThrottle}
        />
      ) : (
        <>
          <BottomTitle>Controle</BottomTitle>
          <Card
            title="Nível da sua contribuição"
            description={
              <MineBar
                currentThrottle={currentThrottle}
                setCurrentThrottle={setCurrentThrottle}
              />
            }
            isDash
          ></Card>
        </>
      )}
    </>
  );
};
