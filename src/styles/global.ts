import { globalCss } from '@/stitches.config';

export const globalStyles = globalCss({
  '*': {
    fontFamily:
      'Helvetica Neue, Arial, Hiragino Kaku Gothic Pro, Meiryo, sans-serif',
    fontSize: '$md',
    color: '$textPrimary',
  },
  body: {
    backgroundColor: '#EBECF0',
  },
});
