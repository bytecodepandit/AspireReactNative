import {CardContainer, TabHeader, SpendingLimitProgressBar, View} from '@atoms';
import {ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import colors from '@theme/colors';
import {
  moderateScale,
  verticalScale,
  React,
  useDispatch,
  scale,
  useSelector,
} from '@shared-import';
import {fetchCardDetails} from '@store/actions';
import SettingsList from './components/SettingsList';
import {Store} from '@interfaces';

const DebitCard = () => {
  const dispatch = useDispatch();
  const {cardDetails} = useSelector((state: Store) => state);
  React.useEffect(() => {
    dispatch(fetchCardDetails());
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TabHeader />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.scrollContainer}>
        <View>
          <View style={styles.innerContainer}>
            <View style={{marginTop: verticalScale(220)}}>
              {cardDetails.usage?.usageLimit > 0 && (
                <SpendingLimitProgressBar />
              )}
              <View style={{marginTop: verticalScale(32)}} />
              <SettingsList />
            </View>
          </View>
          <CardContainer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  headerContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: verticalScale(30),
  },
  scrollContainer: {
    paddingTop: verticalScale(170),
    borderRadius: moderateScale(10),
    marginTop: verticalScale(10),
  },
  innerContainer: {
    backgroundColor: colors.white,
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    marginTop: verticalScale(60),
    paddingHorizontal: scale(24),
    paddingBottom: verticalScale(10),
  },
});
export default DebitCard;
