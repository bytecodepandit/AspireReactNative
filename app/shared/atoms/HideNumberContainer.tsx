import {EyeHiddenSvg} from '@assets/svg';
import EyeSvg from '@assets/svg/EyeSvg';
import {Store} from '@interfaces';
import {toggleCardVisibility} from '@store/actions';
import {
  moderateScale,
  React,
  scale,
  useDispatch,
  useSelector,
  verticalScale,
} from '@shared-import';
import colors from '@theme/colors';
import {StyleSheet, TouchableOpacity} from 'react-native';
import { Text } from '@atoms';

interface HideNumberContainerProps {}

const HideNumberContainer = ({}: HideNumberContainerProps) => {
  const dispatch = useDispatch();
  const {cardVisibility: cardVisibility} = useSelector((state: Store) => state);
  const toggleShow = () => dispatch(toggleCardVisibility(!cardVisibility));
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={toggleShow}
      activeOpacity={1}>
      {cardVisibility ? <EyeHiddenSvg height={moderateScale(16)}  width={moderateScale(16)}/> : <EyeSvg height={16}  width={16}/>}
      <Text marginLeft="sh" variant="primaryDemiBold" color="textTertiary">
        {cardVisibility ? 'Hide card number' : 'Show card number'}
      </Text>
    </TouchableOpacity>
  );
};

export default HideNumberContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: scale(10),
    paddingTop: verticalScale(8),
    paddingBottom: verticalScale(20),
    backgroundColor: colors.white,
    borderRadius: moderateScale(6),
    alignItems: 'center',
  },
});
