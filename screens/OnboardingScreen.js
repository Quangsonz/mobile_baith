// screens/OnboardingScreen.js
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

const OnboardingScreen = ({ navigation }) => {

    const backgroundImage = require('../assets/background.jpg');

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Welcome to our store</Text>
          <Text style={styles.subtitle}>
            Get your groceries in as fast as one hour
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignInScreen')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    justifyContent: 'flex-end',
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
  textContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#53B175',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;