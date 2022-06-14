import { primary } from '@app/theme/fonts';
import {React, verticalScale} from '@shared-import';
import colors from '@theme/colors';
import typography from '@theme/typography';
import {List} from 'react-native-paper';

interface CardOptionProps {
  title: string;
  description: string;
  left: (props: any) => React.ReactNode | React.ReactElement;
  right?: ((props: any) => React.ReactNode | React.ReactElement) | null;
}

const CardOption = ({left, right, title, description}: CardOptionProps) => {
  return (
    <List.Item
      style={{
        alignItems: 'center',
        paddingHorizontal: 0,
        paddingVertical: verticalScale(10)
      }}
      title={title}
      description={description}
      titleStyle={{
        ...typography.h3,
        fontWeight: '500',
        color: colors.textPrimary,
        marginTop: verticalScale(-5)
      }}
      descriptionStyle={{
        fontFamily: primary.regular,
        color: colors.textSecondary,
        ...typography.sm
      }}
      left={left}
      // @ts-ignore
      right={right || null}
    />
  );
};

export default CardOption;
