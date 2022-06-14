import {
  StyleSheet,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {primary} from '@theme/fonts';
import colors from '@theme/colors';
import {
  RFValue,
  scale,
  verticalScale,
  React,
  moderateScale,
} from '@shared-import';
import { Text, View } from '@atoms';

interface InputAtomProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  hidePlaceholder?: boolean;
}

const Input = (props: InputAtomProps) => {
  return (
    <View style={[styles.containerStyle]}>
      <View style={{flexDirection: 'row', position: 'relative', zIndex: 9}}>
        <View style={styles.dollerContainer}>
          <Text color="white" variant="primaryDemiBold">S$</Text>
        </View>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          keyboardType={'decimal-pad'}
          numberOfLines={1}
          maxLength={12}
          {...props}
        />
      </View>
    </View>
  );
};

export default React.memo(Input);

const styles = StyleSheet.create({
  containerStyle: {
    // borderColor: colors.iconColor,
    borderColor: colors.disable,
    borderBottomWidth: verticalScale(1),
    position: 'relative',
    paddingVertical: verticalScale(5),
    paddingBottom: verticalScale(10)
  },
  placeholder: {
    fontSize: RFValue(12),
    marginHorizontal: scale(2),
    marginVertical: verticalScale(2),
    letterSpacing: 0.6,
    fontFamily: primary.regular,
    textTransform: 'uppercase',
  },
  dollerContainer: {
    paddingVertical: verticalScale(3),
    paddingHorizontal: scale(12),
    borderRadius: moderateScale(3),
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: scale(10),
  },
  input: {
    // ...typography.h1,
    color: colors.black,
    position: 'relative',
    height: RFValue(25),
    width: '100%',
    maxWidth: '100%',
    paddingHorizontal: 0,
    paddingVertical: verticalScale(2),
    zIndex: 9,
    fontFamily: primary.bold,
    fontSize: RFValue(20)
  },
});
