import {SpeedMeterSvg} from '@assets/svg';
import {
  AmountChunk,
  CustomButton,
  Input,
  KeyboardAvoidingViewAtom,
  Text,
  View,
} from '@atoms';
import {Store} from '@interfaces';
import {chunks} from '@app/core/mock/AmountLimits';
import {goBack} from '@services/navigation/navigation.service';
import {setCardDetails} from '@store/actions';
import {
  React,
  scale,
  useDispatch,
  useSelector,
  verticalScale,
} from '@shared-import';
import spacing from '@theme/spacing';
import {ScrollView, StyleSheet} from 'react-native';
import { formatNumber } from '@utils/format-number';

const FormContainer = () => {
  const {cardDetails} = useSelector((state: Store) => state);
  const [limit, setLimit] = React.useState<string>('');
  const dispatch = useDispatch();
  const onPressSave = () => {
    dispatch(
      setCardDetails({
        ...cardDetails,
        usage: {
          ...cardDetails.usage,
          usageLimit: limit,
        },
      }),
    );
    goBack();
  };
  return (
    <React.Fragment>
      <KeyboardAvoidingViewAtom>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View style={styles.container}>
            <View style={[styles.limitIntro]}>
              <SpeedMeterSvg />
              <Text
                variant="h3"
                color="textPrimary"
                marginLeft="sh"
                >
                Set a weekly debit card spending limit
              </Text>
            </View>
            <Input
              value={formatNumber(limit)}
              onChangeText={setLimit}
              returnKeyType={'done'}
              containerStyle={{
                marginVertical: verticalScale(12),
              }}
            />
            <Text marginTop="sv" color="textDisable">
              Here weekly means the last 7 days - not the calendar week
            </Text>
            <View style={styles.chunksContainer}>
              {chunks.map((item: string, index: number) => {
                const onPressItem = () => setLimit(item);
                return (
                  <AmountChunk
                    key={index}
                    amount={formatNumber(item)}
                    container={{marginRight: scale(12)}}
                    onPress={onPressItem}
                  />
                );
              })}
            </View>
          </View>
          <CustomButton
            title={'Save'}
            onPress={onPressSave}
            containerStyle={styles.buttonContainer}
            disabled={!limit}
          />
        </ScrollView>
      </KeyboardAvoidingViewAtom>
    </React.Fragment>
  );
};

export default FormContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: verticalScale(24),
    paddingHorizontal: spacing.bh,
  },
  chunksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: verticalScale(32),
  },
  limitIntro: {
    flexDirection: 'row',
    marginBottom: verticalScale(14),
    alignItems: 'center',
  },
  buttonContainer: {
    marginBottom: verticalScale(24),
    marginHorizontal: scale(24),
  },
});
