import colors from './colors';
import spacing from './spacing';
import breakpoints from './breakpoints';
import textVariants from './text-variants';
import cardVariants from './card-variants';
import borderRadii from './borderRadii';
import typography from './typography';
import {primary} from './fonts';
import {BaseTheme, createTheme} from '@shopify/restyle';

const theme: BaseTheme = createTheme({
  colors,
  spacing,
  breakpoints,
  textVariants: {...textVariants, ...typography},
  cardVariants,
  borderRadii,
  primary,
});

export type Theme = typeof theme;

export default theme;
