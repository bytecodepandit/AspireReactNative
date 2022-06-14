import {
  CreditSvg,
  DebitCardSvg,
  HomeSvg,
  LeftRightArrowSvg,
  ProfileSvg,
} from '@assets/svg';
import {SCREENS} from '@routes/labels';
import {React} from '@shared-import';

interface MyTabBarIconProps {
  color: any;
  focused: any;
  route: any;
}

const MyTabBarIcon = ({route, color, focused}: MyTabBarIconProps) => {
  const tabBarIcon = (route: string, color: string) => {
    switch (route) {
      case SCREENS.HOME:
        return <HomeSvg color={color} />;
      case SCREENS.DEBIT_CARD:
        return <DebitCardSvg color={color} />;
      case SCREENS.CREDIT:
        return <CreditSvg color={color} />;
      case SCREENS.PAYMENT:
        return <LeftRightArrowSvg color={color} />;
      case SCREENS.PROFILE:
        return <ProfileSvg color={color} />;
      default:
        return <HomeSvg color={color} />;
    }
  };
  return tabBarIcon(route, color);
};

export default MyTabBarIcon;
