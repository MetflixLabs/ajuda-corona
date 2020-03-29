import { useState, useEffect } from 'react';

// Usage
function App() {
  const size = useWindowSize();

  return {
    width: size.width,
    height: size.height,
  };
}

// Hook
function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    if (isClient) {
      return {
        width:
          window.innerWidth < document.documentElement.clientWidth
            ? window.innerWidth
            : document.documentElement.clientWidth,
        height:
          window.innerHeight < document.documentElement.clientHeight
            ? window.innerHeight
            : document.documentElement.clientHeight,
      };
    } else {
      return undefined;
    }
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

export default App;
