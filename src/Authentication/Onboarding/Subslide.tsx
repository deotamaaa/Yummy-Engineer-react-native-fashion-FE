import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '../../components';

import { Text } from '../../components/Theme';

interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const Subslide = ({ subtitle, description, last, onPress }: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text variant="title2" style={styles.subtitle}>
        {subtitle}
      </Text>
      <Text variant="body" style={styles.description}>
        {description}
      </Text>
      <Button
        style={undefined}
        label={last ? "Let's get started" : 'Next'}
        variant={last ? 'primary' : 'default'}
        {...{ onPress }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  subtitle: {
    color: '#0c0d34',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    color: '#0c0d34',
    textAlign: 'center',
    marginBottom: 40,
  },
});
export default Subslide;
