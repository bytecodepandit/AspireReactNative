import {React} from '@shared-import';
import {
  KeyboardAvoidingViewProps,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

interface KeyboardAvoidingViewAtomProps extends KeyboardAvoidingViewProps {
  children: React.ReactElement<{}>;
}

const KeyboardAvoidingViewAtom = ({
  children,
  ...props
}: KeyboardAvoidingViewAtomProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}
      {...props}>
      {children}
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingViewAtom;
