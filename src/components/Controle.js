import React, { useState, useEffect } from 'react'

import { breakpoints } from '../components/utils/media'
import useWindowSize from '../hooks/useWindowSize'

import Card from '../components/Card'
import MineBar from '../components/MineBar';
import BottomTitle from '../components/BottomTitle'

export default ({ currentThrottle, setCurrentThrottle }) => {

  const b = breakpoints()
  const windowSize = useWindowSize()
  const [isMobile, setIsMobile] = useState(windowSize < b.phoneLandscape);

  useEffect(() => {
    const width = windowSize.width
    const vert = width < b.phoneLandscape
    setIsMobile(vert)
  }, [windowSize])

  return (
    <>
      {isMobile
        ? (<MineBar
          currentThrottle={currentThrottle}
          setCurrentThrottle={setCurrentThrottle}
        />)
        : (
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
              isPurple
            ></Card>
          </>)
      }
    </>

  )
}