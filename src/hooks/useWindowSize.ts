import { useState } from 'react';

import { useEventListener, useIsomorphicLayoutEffect } from 'usehooks-ts';

const getWindowSize = () => {
  if (typeof window === 'undefined') {
    return {
      width: 0,
      height: 0,
      isWideScreen: false,
      ratioWidth: 1,
      ratioHeight: 1,
    };
  }

  const isWideScreen = window.innerWidth / window.innerHeight > 1.8;

  return {
    width: window.innerWidth,
    height: window.innerHeight,
    isWideScreen,
    ratioWidth: isWideScreen
      ? window.innerHeight / 1080
      : window.innerWidth / 1920,
    ratioHeight: isWideScreen
      ? window.innerWidth / 1.778 / 1080
      : window.innerHeight / 1080,
  };
};

function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getWindowSize);

  const handleSize = () => {
    setWindowSize(getWindowSize());
  };

  useEventListener('resize', handleSize);

  // Set size at the first client-side load
  useIsomorphicLayoutEffect(() => {
    handleSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return windowSize;
}

export default useWindowSize;
