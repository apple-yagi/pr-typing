import { styled } from '@/stitches.config';

export const Button = styled('button', {
  height: 37,
  padding: '0 16px',
  cursor: 'pointer',
  borderRadius: 8,
  background: 'linear-gradient(145deg, #f0f0f0, #cacaca)',
  boxShadow: '9px 9px 18px #bebebe, -9px -9px 18px #ffffff',
  color: '#c3222a',
  fontWeight: 'bold',

  '&:hover': {
    background: '#EBECF0',
    boxShadow: 'inset 9px 9px 18px #c8c9cc, inset -9px -9px 18px #ffffff',
  },
});
