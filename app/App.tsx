/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import {
  NavigationContainer,
  Provider,
  React,
  SafeAreaProvider,
} from '@shared-import';
import {StatusBar} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {LoaderAtom} from './shared/atoms';
import {navigationRef} from './core/services/navigation/navigation.service';
import store from './store';
import MyStack from './routes';
import theme from './theme';
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen'


const App = () => {

  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000)
  }, [])
  return (
    <Provider store={store}>
      <StatusBar translucent barStyle="light-content" />
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <LoaderAtom />
          <Toast />
          <NavigationContainer ref={navigationRef}>
            <MyStack />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
