// screens/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnboardingScreen');
    }, 2000); 
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo.png')} 
          style={styles.carrotIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#53B175', // Green background
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  carrotIcon: {
    width: 250,
    height: 65,
    marginRight: 10,
  },
  logoText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
  },
});

export default SplashScreen;