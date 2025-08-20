import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CampusScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Services</Text>
      <Text style={styles.subtitle}>Campus features coming soon!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0066cc',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});

export default CampusScreen;
