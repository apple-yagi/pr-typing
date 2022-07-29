import { styled } from '@/stitches.config';
import { KeyboardEvent, useState } from 'react';
import { Typography } from './ui/Typography';

export const TypingGame = () => {
  const typingString = 'Hello World!';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMisstype, setIsMisstype] = useState(false);
  const [missCount, setMissCount] = useState(0);
  const [count, setCount] = useState(0);

  const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Shift' || e.key === 'Eisu' || e.key === 'KanjiMode') return;

    if (e.key === typingString[currentIndex]) {
      setIsMisstype(false);
      setCurrentIndex(currentIndex + 1);

      if (currentIndex + 1 >= typingString.length) {
        setCurrentIndex(0);
        setCount(count + 1);
      }
    } else {
      setIsMisstype(true);
      setMissCount(missCount + 1);
    }
  };

  return (
    <Container>
      <Title>PR Typing ⌨️</Title>
      <Typography
        as='p'
        size='lg'
        css={{
          marginBottom: 24,
          textAlign: 'center',
        }}
      >
        プレスリリースをクリックするとゲームを開始します
      </Typography>
      <Typing tabIndex={0} onKeyDown={(e) => handleKeyPress(e)}>
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
    </Container>
  );
};

const Container = styled('div', {
  maxWidth: 1024,
  margin: 'auto',
  padding: '30px 20px',
});

const Title = styled('h1', {
  marginBottom: '40px',
  fontSize: 60,
  fontWeight: 'bold',
  color: '$primaryBlue',
  textAlign: 'center',
});

const Typing = styled('div', {
  padding: 24,
  borderRadius: 24,
  backgroundColor: '#EBECF0',
  boxShadow: '24px 24px 48px #c8c9cc, -24px -24px 48px #ffffff',

  '&:focus': {
    boxShadow: '5px 5px 10px #b7b8bb, -5px -5px 10px #ffffff',
  },
});
