import {createText, TextProps as TextPropsShopify} from '@shopify/restyle';
import {React} from '@shared-import';
import {TextProps} from 'react-native-elements';
import {Theme} from '@theme/index';

const Text = createText<Theme>();

interface CustomTextProps extends TextPropsShopify<Theme>, TextProps {
  children: any;
}

const CustomText = (props: CustomTextProps) => {
  return <Text variant="primaryMedium" {...props} />;
};

export default CustomText;
