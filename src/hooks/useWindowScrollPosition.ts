import { useEffect, useState } from 'react';

interface PositionProps {
  x: number | null;
  y: number | null;
}

export default function useWindowScrollPosition(): PositionProps[] {
  const [position, setPosition] = useState<PositionProps>({
    x: null,
    y: null,
  });

  useEffect(() => {
    const onScroll = (): void => {
      setPosition({ x: window.scrollX, y: window.scrollY });
    };

    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return [position];
}
