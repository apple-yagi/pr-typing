import { styled } from '@/stitches.config';

export const ListItem = styled('li', {
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  padding: 20,
  borderRadius: 20,
  background: '#EBECF0',
  boxShadow: '12px 12px 24px #b7b8bb, -12px -12px 24px #ffffff',
  cursor: 'pointer',

  '&:hover': {
    background: 'linear-gradient(145deg, #d4d4d8, #fbfdff)',
    boxShadow: '12px 12px 24px #b7b8bb, -12px -12px 24px #ffffff',
  },
});
