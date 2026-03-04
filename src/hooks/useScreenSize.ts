import { useEffect, useState } from 'react';

/*  This can be expanded to return an object instead
    if I need to have more granular checks on the screen size
    Note this just checks the available size and does not
    check if the user uses a mobile device 
*/
export const useScreenSize = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const innerWidth = window.innerWidth;
      if (innerWidth >= 768) {
        setIsLargeScreen(true);
      } else {
        setIsLargeScreen(false);
      }
    };
    checkScreenSize();
    addEventListener('resize', checkScreenSize);

    return () => removeEventListener('resize', checkScreenSize);
  }, [setIsLargeScreen]);

  return {
    isLargeScreen,
  };
};
