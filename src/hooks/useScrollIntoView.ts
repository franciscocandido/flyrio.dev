import { useCallback, useRef } from 'react';

enum ScrollIntoViewBehavior {
  smooth = 'smooth',
  instant = 'instant',
  auto = 'auto',
}

enum ScrollIntoViewBlock {
  start = 'start',
  center = 'center',
  end = 'end',
  nearest = 'nearest',
}

enum ScrollIntoViewInline {
  start = 'start',
  center = 'center',
  end = 'end',
  nearest = 'nearest',
}

type ScrollIntoViewOptions = {
  behavior?: keyof typeof ScrollIntoViewBehavior;
  block?: keyof typeof ScrollIntoViewBlock;
  inline?: keyof typeof ScrollIntoViewInline;
};

export default function useScrollIntoView(
  elementId: string,
  options?: ScrollIntoViewOptions
) {
  const elementRef = useRef(document.getElementById(elementId));

  const scrollTo = useCallback(() => {
    return elementRef.current?.scrollIntoView(options);
  }, []);

  return scrollTo;
}
