/***
 * @description app route stack navigator
 */

import SpendingLimit from '../modules/spending-limit';
import {React} from '@shared-import';

import {createStackNavigator} from '@react-navigation/stack';
import {dashboard, SCREENS, spendingLimit} from './labels';
import TabNavigator from './app-tab';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREENS.DASHBOARD} component={TabNavigator} />
      <Stack.Screen name={SCREENS.SPENDING_LIMIT} component={SpendingLimit} />
    </Stack.Navigator>
  );
};

export default MyStack;
