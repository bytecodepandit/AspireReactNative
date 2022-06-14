import {RFValue} from '@shared-import';
import {primary} from './fonts';

export default {
  primary: {
    fontSize: RFValue(14),
    fontFamily: primary.regular,
  },
  primaryMedium: {
    fontSize: RFValue(14),
    fontFamily: primary.medium,
  },
  primaryDemiBold: {
    fontSize: RFValue(14),
    fontFamily: primary.demiBold,
  },
  primaryBold: {
    fontSize: RFValue(14),
    fontFamily: primary.bold,
  },
  paragraph: {
    fontSize: RFValue(14),
    color: 'textPrimary',
    fontFamily: primary.regular,
  },
  tabLabel: {
    fontSize: RFValue(9),
    fontFamily: primary.bold,
    textAlign: 'center',
  },
  h1: {
    fontSize: RFValue(24),
    color: 'white',
    fontFamily: primary.bold,
  },
  h2: {
    fontSize: RFValue(22),
    color: 'white',
    fontFamily: primary.bold,
  },
  h3: {
    fontSize: RFValue(14),
    color: 'white',
    fontFamily: primary.medium,
  },
  h4: {
    fontSize: RFValue(13),
    color: 'white',
    fontFamily: primary.bold,
  },
  h5: {
    fontSize: RFValue(12),
    color: 'white',
    fontFamily: primary.bold,
  },
  h6: {
    fontSize: RFValue(9),
    color: 'textTertiary',
    fontFamily: primary.bold,
  },
  h7: {
    fontSize: RFValue(16),
    color: 'white',
    fontFamily: primary.bold,
  },

  xxsm: {
    fontSize: RFValue(8),
  },
  xsm: {
    fontSize: RFValue(10),
  },
  sm: {
    fontSize: RFValue(12),
  },
  b: {
    fontSize: RFValue(14),
  },
  md: {
    fontSize: RFValue(16),
  },
  xmd: {
    fontSize: RFValue(18),
  },
  lg: {
    fontSize: RFValue(24),
  },
  xlg: {
    fontSize: RFValue(48),
  },
};
