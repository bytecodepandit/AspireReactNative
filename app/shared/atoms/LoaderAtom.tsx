import {View, StyleSheet, ActivityIndicator, Dimensions} from 'react-native';
import colors from '@theme/colors';
import {scale, useSelector, verticalScale} from '@shared-import';
import {width, height} from '@app/core/utils/dimensions'

interface LoaderAtomProps {}

const LoaderAtom = ({}: LoaderAtomProps) => {
  const loader = useSelector((state: any) => state.loaderReducer);
  if (!loader) {
    return null;
  }
  return (
    <View
      style={{
        zIndex: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: verticalScale(0),
        left: scale(0),
        width: width,
        height: height,
        backgroundColor: 'rgba(255, 255, 255, 0)',
      }}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default LoaderAtom;

const styles = StyleSheet.create({
  container: {},
});
