import {moderateScale, scale, verticalScale} from '@shared-import';
import {React} from '@shared-import';
import {StyleSheet, View} from 'react-native';
import colors from '@theme/colors';
import {DebitCard, HideNumberContainer} from '@atoms';
import { width } from '@utils/dimensions';

const CardContainer = () => {
  return (
    <View style={[styles.container]}>
      <View style={styles.btnContainer}>
        <HideNumberContainer />
      </View>
      <View style={styles.cardContainer}>
        <DebitCard />
      </View>
    </View>
  );
};

export default CardContainer;

const styles = StyleSheet.create({
  btnContainer: {
    position: 'absolute',
    backgroundColor: colors.white,
    alignSelf: 'flex-end',
    borderRadius: moderateScale(5),
    top: verticalScale(-12),
  },
  container: {
    padding: moderateScale(24),
    borderRadius: moderateScale(10),
    alignSelf: 'center',
    position: 'absolute',
    left: scale(24),
    right: scale(24)
  },
  cardContainer: {
    position: 'absolute',
    backgroundColor: colors.secondary,
    borderRadius: moderateScale(10),
    left: scale(0),
    right: scale(0),
    top: verticalScale(20),
    width: width - scale(48)
  },
});
