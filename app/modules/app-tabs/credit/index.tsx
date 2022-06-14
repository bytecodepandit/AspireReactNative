
import {React} from '@shared-import';
import colors from '@theme/colors';
import typography from '@theme/typography';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const Credit = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[typography.h1]}>Credit</Text>
    </SafeAreaView>
  );
};

export default Credit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
