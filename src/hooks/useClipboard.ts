import { useCallback, useEffect, useState } from 'react';
import copy from 'copy-to-clipboard';

interface UseClipboardParams {
  timeout?: number;
}

export default function useClipboard({ timeout = 1500 }: UseClipboardParams) {
  const [hasCopied, setHasCopied] = useState<boolean>(false);

  const copyToClipboard = useCallback((value: string) => {
    const didCopy = copy(value);
    setHasCopied(didCopy);
  }, []);

  useEffect(() => {
    let timeoutId: number | null;

    if (hasCopied) {
      timeoutId = window.setTimeout(() => {
        setHasCopied(false);
      }, timeout);
    }

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [timeout, hasCopied]);

  return { copyToClipboard, hasCopied };
}
