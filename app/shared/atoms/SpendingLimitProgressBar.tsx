import {Text, View} from '@atoms';
import {Store} from '@interfaces';
import {moderateScale, React, useSelector, verticalScale} from '@shared-import';
import colors from '@theme/colors';
import * as Progress from 'react-native-progress';
import {StyleSheet} from 'react-native';
import {formatNumber} from '@utils/format-number';

interface SpendingLimitProgressBarProps {}

const SpendingLimitProgressBar = ({}: SpendingLimitProgressBarProps) => {
  const {cardDetails} = useSelector((state: Store) => state);
  const {usage} = cardDetails;
  if (usage?.usageLimit < 1) {
    return null;
  }
  return (
    <View>
      <View style={styles.topContainer}>
        <Text>Debit card spending limit</Text>
        <Text variant="primaryDemiBold" style={[{color: colors.secondary}]}>
          ${usage ? formatNumber(usage?.spendings) : 0}{' '}
          <Text variant="primaryDemiBold" style={{color: colors.textDisable}}>
            | ${usage ? formatNumber(usage?.usageLimit) : 0}
          </Text>
        </Text>
      </View>
      <Progress.Bar
        height={12}
        unfilledColor="#e5faf0"
        borderWidth={0}
        color={colors.textTertiary}
        borderRadius={8}
        progress={usage?.spendings / usage?.usageLimit}
        width={null}
      />
    </View>
  );
};

export default SpendingLimitProgressBar;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalScale(6),
  },
  bottomContainer: {
    marginTop: verticalScale(5),
    backgroundColor: colors.progressBar,
    height: verticalScale(15),
    borderRadius: moderateScale(10),
  },
  progressBar: {
    backgroundColor: colors.secondary,
    borderRadius: moderateScale(10),
    height: '100%',
  },
});
