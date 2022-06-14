import { Text } from '@atoms';
import colors from '@theme/colors';
import typography from '@theme/typography';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Payments = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text variant="h1">Payments</Text>
    </SafeAreaView>
  );
};

export default Payments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
