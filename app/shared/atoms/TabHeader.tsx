import {HomeSvg} from '@assets/svg';
import {Text, View} from '@atoms';
import {Store} from '@interfaces';
import {
  moderateScale,
  React,
  RFValue,
  scale,
  useSelector,
  verticalScale,
} from '@shared-import';
import colors from '@theme/colors';
import spacing from '@theme/spacing';
import {formatNumber} from '@utils/format-number';
import {StyleSheet} from 'react-native';

interface TabHeaderProps {}

const TabHeader = (props: TabHeaderProps) => {
  const {cardDetails} = useSelector((state: Store) => state);
  return (
    <View style={styles.container}>
      <View>
        <Text
          color="white"
          fontSize={RFValue(24)}
          variant="primaryBold"
          marginTop="bv">
          Debit Card
        </Text>
        <Text
          color="white"
          fontSize={RFValue(18)}
          variant="primaryMedium"
          marginTop="bv">
          Available balance
        </Text>
        <View style={styles.balanceContainer}>
          <View style={[styles.dollerContainer]}>
            <Text color="white" fontSize={RFValue(16)} variant="primaryBold">
              S$
            </Text>
          </View>
          <Text color="white" fontSize={RFValue(18)} variant="primaryBold">
            {cardDetails.usage && cardDetails.usage?.availableBalance > 0
              ? formatNumber(cardDetails.usage?.availableBalance - cardDetails.usage?.spendings)
              : 0}
          </Text>
        </View>
      </View>
      <HomeSvg color={colors.secondary} />
    </View>
  );
};

export default TabHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: verticalScale(16),
    paddingHorizontal: spacing.bh,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(15),
  },
  dollerContainer: {
    paddingHorizontal: scale(10),
    backgroundColor: colors.secondary,
    borderRadius: moderateScale(4),
    paddingVertical: verticalScale(3),
    marginRight: scale(10),
  },
});
