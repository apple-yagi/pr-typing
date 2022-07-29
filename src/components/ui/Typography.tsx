import { styled } from '@/stitches.config';

export const Typography = styled('span', {
  variants: {
    color: {
      primary: {
        color: '$textPrimary',
      },
      focus: {
        color: 'GrayText',
      },
      success: {
        color: '$textGreen',
      },
      error: {
        color: 'Red',
      },
    },
    size: {
      xxl: {
        fontSize: '$xxl',
      },
      xl: {
        fontSize: '$xl',
      },
      lg: {
        fontSize: '$lg',
      },
      md: {
        fontSize: '$md',
      },
      sm: {
        fontSize: '$sm',
      },
      xs: {
        fontSize: '$xs',
      },
    },
    bold: {
      true: {
        fontWeight: 'bold',
      },
    },
  },
});
