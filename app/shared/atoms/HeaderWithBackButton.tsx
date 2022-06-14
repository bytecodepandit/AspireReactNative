import {HomeSvg} from '@assets/svg';
import {goBack} from '@services/navigation/navigation.service';
import {React} from '@shared-import';
import colors from '@theme/colors';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';

interface HeaderWithBackButtonProps {
  title?: string;
  subTitle?: string;
  handlePressRight?: () => void;
}

const HeaderWithBackButton = ({
  title,
  subTitle,
  handlePressRight,
}: HeaderWithBackButtonProps) => {
  return (
    <Appbar.Header style={styles.container}>
      <Appbar.BackAction onPress={goBack} />
      <Appbar.Content title={title || ''} subtitle={subTitle || ''} />
      <Appbar.Action
        icon={() => <HomeSvg color={colors.secondary} />}
        onPress={handlePressRight}
      />
    </Appbar.Header>
  );
};

export default HeaderWithBackButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: 'transparent',
    shadowOffset: {height: 0, width: 0},
  },
});
