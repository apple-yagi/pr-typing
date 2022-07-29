import { useRomajiText } from '@/hooks/useRomajiText';
import { useTimer } from '@/hooks/useTimer';
import { styled } from '@/stitches.config';
import { mappingKey } from '@/utils/typing';
import { KeyboardEvent, useState } from 'react';
import { ScoringWindow } from './ScoringWindow';
import { Typography } from './ui/Typography';

type Props = {
  text: string;
};

export const TypingGame = ({ text }: Props) => {
  const typingString = useRomajiText(text);
  const { time, start, stop } = useTimer();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMisstype, setIsMisstype] = useState(false);
  const [missCount, setMissCount] = useState(0);
  const [count, setCount] = useState(0);

  if (!typingString) return <p>...loading</p>;

  const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Shift' || e.key === 'Eisu' || e.key === 'KanjiMode') return;

    if (
      e.key === typingString[currentIndex] ||
      mappingKey(e.key, typingString[currentIndex])
    ) {
      setIsMisstype(false);
      setCurrentIndex(currentIndex + 1);
      setCount((prev) => prev + 1);

      if (currentIndex + 1 >= typingString.length) {
        stop();
      }
    } else {
      setIsMisstype(true);
      setMissCount((prev) => prev + 1);
      console.log(e.key.charCodeAt(0));
      console.log(typingString[currentIndex].charCodeAt(0));
    }
  };

  return (
    <>
      <Typing tabIndex={0} onFocus={start} onKeyDown={(e) => handleKeyPress(e)}>
        <Typography color='success'>
          {typingString.slice(0, currentIndex)}
        </Typography>
        {isMisstype ? (
          <Typography color='error'>{typingString[currentIndex]}</Typography>
        ) : (
          <Typography color='focus'>{typingString[currentIndex]}</Typography>
        )}
        <Typography color='primary'>
          {typingString.slice(currentIndex + 1, typingString.length)}
        </Typography>
      </Typing>
      <ScoringWindow time={time} success={count} miss={missCount} />
    </>
  );
};

const Typing = styled('div', {
  padding: 24,
  borderRadius: 24,
  backgroundColor: '#EBECF0',
  boxShadow: '24px 24px 48px #c8c9cc, -24px -24px 48px #ffffff',

  '&:focus': {
    boxShadow: '5px 5px 10px #b7b8bb, -5px -5px 10px #ffffff',
  },
});
