import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const HomeScreen = () => {
  const position = useRef(new Animated.Value(-200)).current;

  useEffect(() => {
    Animated.timing(position, {
      toValue: 0,
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.welcomeText, { transform: [{ translateX: position }] }]}>
        Welcome to My personal Website
      </Animated.Text>

      <Text style={styles.footer}>
        All rights reserved by Mehrnoush Alizade, 2023
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  footer: {
    marginTop: 16,
    textAlign: 'center',
    fontSize: 12,
    color: 'gray',
  },
});

export default HomeScreen;