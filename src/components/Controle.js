import React from 'react'

import Card from '../components/Card'
import MineBar from '../components/MineBar';

export default ({currentThrottle, setCurrentThrottle}) => (
  <Card
    title="Nível da sua contribuição"
    description={
      <MineBar
        currentThrottle={currentThrottle}
        setCurrentThrottle={setCurrentThrottle}
      />
    }
    isPurple
  ></Card>
)