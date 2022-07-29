import { KANJI_TO_ROMAJI_API_URL } from '@/consts';
import { useEffect, useState } from 'react';

export const useRomajiText = (text: string) => {
  const [romajiText, setRomajiText] = useState<string>();

  useEffect(() => {
    const init = async () => {
      const res = await fetch(KANJI_TO_ROMAJI_API_URL, {
        method: 'POST',
        body: JSON.stringify(text),
      });

      const convertedText = await res.json();
      setRomajiText(convertedText);
    };

    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return romajiText;
};
