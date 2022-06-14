import {Platform, StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from '@shared-import';
import colors from './colors';

export default StyleSheet.create({
  shadow: {
    shadowColor: colors.black,
    shadowOffset: {width: scale(0), height: verticalScale(1.5)},
    shadowOpacity: 0.15,
    shadowRadius: moderateScale(1),
    elevation: moderateScale(Platform.OS === 'ios' ? 1 : 2),
  },
  tabBarShadow: {
    elevation: 8,
    borderTopWidth: 0,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
});
