import {HeaderWithBackButton} from '@atoms';
import {
  moderateScale,
  React,
  SafeAreaView,
  verticalScale,
} from '@shared-import';
import colors from '@theme/colors';
import spacing from '@theme/spacing';
import typography from '@theme/typography';
import {StyleSheet, Text, View} from 'react-native';
import FormContainer from './comonents/FormContainer';

const SpendingLimit = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithBackButton />
      <View style={styles.innerContainer}>
        <Text style={[typography.h1]}>Spending limit</Text>
      </View>
      <View style={styles.overlayContainer}>
        <FormContainer />
      </View>
    </SafeAreaView>
  );
};

export default SpendingLimit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  innerContainer: {
    paddingHorizontal: spacing.bh,
    paddingBottom: verticalScale(40),
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: moderateScale(24),
    borderTopRightRadius: moderateScale(24),
  },
});
