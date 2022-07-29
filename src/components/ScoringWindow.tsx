import { styled } from '@/stitches.config';
import { Typography } from './ui/Typography';

type Props = {
  time: number;
  success: number;
  miss: number;
};

export const ScoringWindow = ({ time, success, miss }: Props) => (
  <Window>
    <Typography as='p'>Time: {time}</Typography>
    <Typography as='p' css={{ color: '$textGreen' }}>
      Success: {success}
    </Typography>
    <Typography
      as='p'
      css={{
        color: '#c3222a',
      }}
    >
      Miss: {miss}
    </Typography>
  </Window>
);

const Window = styled('div', {
  position: 'fixed',
  width: 300,
  bottom: 15,
  right: 15,
  padding: 24,
  borderRadius: 16,
  background: '#EBECF0',
  boxShadow: '5px 5px 10px #d6d7da, -5px -5px 10px #ffffff',

  '> * + *': {
    marginTop: 16,
  },
});
