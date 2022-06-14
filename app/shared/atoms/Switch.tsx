import colors from '@theme/colors';
import {SwitchOffSvg, SwitchOnSvg} from '@assets/svg';
import {React, RFValue} from '@shared-import';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface SwitchProps {
  value?: boolean;
  onChangeValue?: () => void;
}

const Switch = ({value, onChangeValue}: SwitchProps) => {
  return (
    <MaterialCommunityIcons
      color={value ? colors.secondary : colors.disable}
      size={RFValue(40)}
      onPress={onChangeValue}
      name={value ? 'toggle-switch' : 'toggle-switch-off'}
    />
  );
};

export default Switch;
