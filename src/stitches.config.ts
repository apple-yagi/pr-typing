import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      textPrimary: '#333',
      textGreen: '#689f38',
      textGray: '#689f38',
      primaryBlue: '#294C7A',
    },
    fontSizes: {
      xxl: '24px',
      xl: '20px',
      lg: '18px',
      md: '16px',
      sm: '14px',
      xs: '12px',
    },
  },
});
