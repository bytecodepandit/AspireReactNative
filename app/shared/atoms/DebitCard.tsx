import {
  moderateScale,
  RFValue,
  scale,
  useSelector,
  verticalScale,
} from '@shared-import';
import {React} from '@shared-import';
import {StyleSheet} from 'react-native';
import {AspireLogoSvg, VisaSvg} from '@assets/svg';
import colors from '@theme/colors';
import {Store} from '@interfaces';
import {Text, View} from '@atoms';

const DebitCard = () => {
  const {cardVisibility: cardVisibility, cardDetails} = useSelector(
    (state: Store) => state,
  );
  return (
    <View style={[styles.container]}>
      <View style={{alignSelf: 'flex-end'}}>
        <AspireLogoSvg />
      </View>
      <Text marginTop="bv" variant="primaryBold" color="white" fontSize={RFValue(22)}>
        Mark Henry
      </Text>
      <Text
        variant="primaryDemiBold"
        color="white"
        style={{letterSpacing: scale(5), marginTop: verticalScale(24)}}>
        {cardVisibility ? cardDetails.cardNumber?.replace(/[^\dA-Z]/g, '')?.replace(/(.{4})/g, '$1 ').trim() : '............'}
      </Text>
      <View style={[styles.cvvContainer]}>
        <Text color="white" variant="primaryDemiBold">Thru: {cardDetails.validThru}</Text>
        <Text color="white" variant="primaryDemiBold" style={{marginLeft: scale(30)}}>
          CVV: <Text variant="primaryDemiBold" letterSpacing={2}>{cardVisibility ? cardDetails.cvv : '***'}</Text>
        </Text>
      </View>
      <View style={{alignSelf: 'flex-end'}}>
        <VisaSvg />
      </View>
    </View>
  );
};

export default DebitCard;

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(24),
    backgroundColor: colors.secondary,
    borderRadius: moderateScale(10),
  },
  cvvContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(15),
  },
});
