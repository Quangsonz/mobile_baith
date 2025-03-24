// screens/SignInScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignInScreen = ({ navigation }) => { // Thêm { navigation } để nhận prop
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/banner.png')}
        style={styles.groceriesImage}
      />
      <Text style={styles.title}>Get your groceries with nectar</Text>

      <TouchableOpacity
        style={styles.countryCodeContainer}
        onPress={() => navigation.navigate('NumberScreen')} // Bây giờ navigation sẽ hoạt động
      >
        <Image
          source={{ uri: 'https://flagcdn.com/w40/bd.png' }} // Bangladesh flag
          style={styles.flag}
        />
        <Text style={styles.countryCode}>+880</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or connect with social media</Text>

      <TouchableOpacity style={[styles.button, styles.googleButton]}>
        <Icon name="google" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.facebookButton]}>
        <Icon name="facebook" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  groceriesImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  countryCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    marginVertical: 20,
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  countryCode: {
    fontSize: 16,
  },
  orText: {
    fontSize: 16,
    color: '#888',
    marginVertical: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
    marginVertical: 10,
    justifyContent: 'center',
  },
  googleButton: {
    backgroundColor: '#4285F4', // Google blue
  },
  facebookButton: {
    backgroundColor: '#3B5998', // Facebook blue
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignInScreen;