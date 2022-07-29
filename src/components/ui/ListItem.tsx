import { styled } from '@/stitches.config';

export const ListItem = styled('li', {
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  padding: 20,
  borderRadius: 20,
  background: '#e0e0e0',
  boxShadow: '9px 9px 18px #c8c9cc, -9px -9px 18px #ffffff',
  cursor: 'pointer',

  '&:hover': {
    background: '#e0e0e0',
    boxShadow: 'inset 9px 9px 18px #c8c9cc, inset -9px -9px 18px #ffffff',
  },
});
