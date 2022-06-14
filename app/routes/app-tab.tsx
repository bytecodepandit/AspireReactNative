/***
 * @description tab navigator setup
 * @property any
 * @returns tab navigator
 */

import {React, RFValue, scale, verticalScale} from '@shared-import';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SCREENS} from './labels';
import Home from '../modules/app-tabs/home';
import DebitCardScreen from '../modules/app-tabs/debit-card';
import PaymentsScreen from '../modules/app-tabs/payments';
import CreditScreen from '../modules/app-tabs/credit';
import ProfileScreen from '../modules/app-tabs/profile';
import {MyTabBarIcon} from '@atoms';
import colors from '@theme/colors';
import appStyle from '@theme/app.style';
import {primary} from '@theme/fonts';
import Device from "react-native-device-detection";

const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tabs.Navigator
      initialRouteName={SCREENS.DEBIT_CARD}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: colors.disable,
        tabBarItemStyle: {
          display: 'flex',
          flexDirection: 'column'
        },
        tabBarLabelStyle: {
          fontFamily: primary.demiBold,
          paddingBottom: verticalScale(Device.isIphoneX || Device.isTablet ?  0 : 5),
          marginTop: verticalScale(-5),
          marginLeft: scale(0),
          fontSize: RFValue(9)
        },
        tabBarIcon: ({focused}) => {
          return (
            <MyTabBarIcon
              route={route.name}
              color={focused ? colors.secondary : colors.disable}
              focused={focused}
            />
          );
        },
        headerShown: false,
        tabBarStyle: {
          paddingTop: verticalScale(Device.isIphoneX || Device.isTablet ?  5 : 0),
          height: verticalScale(Device.isIphoneX || Device.isTablet ? 70 : 50),
          paddingBottom: verticalScale(Device.isIphoneX || Device.isTablet ? 15 : 0),
          ...appStyle.tabBarShadow,
        },
      })}>
      <Tabs.Screen
        options={{
          title: 'Home',
        }}
        name={SCREENS.HOME}
        component={Home}
      />
      <Tabs.Screen
        options={{
          title: 'Debit Cards',
        }}
        name={SCREENS.DEBIT_CARD}
        component={DebitCardScreen}
      />
      <Tabs.Screen
        options={{
          title: 'Payments',
        }}
        name={SCREENS.PAYMENT}
        component={PaymentsScreen}
      />
      <Tabs.Screen
        options={{
          title: 'Credit',
        }}
        name={SCREENS.CREDIT}
        component={CreditScreen}
      />
      <Tabs.Screen
        options={{
          title: 'Profile',
        }}
        name={SCREENS.PROFILE}
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
