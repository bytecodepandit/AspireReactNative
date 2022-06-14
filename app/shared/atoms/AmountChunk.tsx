import { Text } from '@atoms';
import {moderateScale, React, verticalScale} from '@shared-import';
import colors from '@theme/colors';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface AmountChunkProps {
  amount: string | number;
  onPress: (event: GestureResponderEvent) => void;
  container?: StyleProp<ViewStyle>;
}

const AmountChunk = ({amount, container, onPress}: AmountChunkProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, container]}
      onPress={onPress}
      activeOpacity={0.5}>
      <Text variant="primaryDemiBold" color="textTertiary">S$ {amount}</Text>
    </TouchableOpacity>
  );
};

export default AmountChunk;

const styles = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(10),
    backgroundColor: colors.fadeGreen,
    borderRadius: moderateScale(4),
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
