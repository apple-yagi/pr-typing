import { styled } from '@/stitches.config';
import { Typography } from './ui/Typography';

export const ScoringWindow = () => (
  <Window>
    <Typography as='p' size='lg' bold='true'>
      Score
    </Typography>
    <Scoring>
      <ScoringItem>test</ScoringItem>
    </Scoring>
  </Window>
);

const Window = styled('div', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  margin: 'auto',
  width: 500,
  height: 100,
});

const Scoring = styled('div', {
  display: 'flex',
});

const ScoringItem = styled('div', {
  display: 'flex',
});
