import { useState, useEffect } from 'react';

import useWindowSize from '@hooks/useWindowSize';
import { breakpoints } from '@utils/media';

export default () => {
  const windowSize = useWindowSize();
  const b = breakpoints();
  const [isMobile, setIsMobile] = useState(windowSize.width < b.phoneLandscape);

  useEffect(() => {
    const isMobile = windowSize.width < b.phoneLandscape;
    setIsMobile(isMobile);
  }, [windowSize]);

  return isMobile;
};