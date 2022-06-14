import { Text } from '@atoms';
import {React, SafeAreaView} from '@shared-import';
import colors from '@theme/colors';
import {StyleSheet} from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text variant="h1">Home</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
