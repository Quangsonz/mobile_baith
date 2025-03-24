// screens/NumberScreen.js
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // For the back arrow

const NumberScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleKeyPress = (key) => {
    if (key === 'delete') {
      setPhoneNumber(phoneNumber.slice(0, -1));
    } else {
      setPhoneNumber(phoneNumber + key);
    }
  };

  const handleNext = () => {
    if (phoneNumber.length >= 10) { // Basic validation
      navigation.navigate('VerificationScreen', { phoneNumber });
    }
  };

  return (
    <View style={styles.container}>
      {/* Header with Back Arrow */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-back" size={30} color="#000" />
      </TouchableOpacity>

      {/* Title and Input */}
      <Text style={styles.title}>Enter your mobile number</Text>
      <Text style={styles.label}>Mobile Number</Text>
      <View style={styles.inputContainer}>
        <Image
          source={{ uri: 'https://flagcdn.com/w40/bd.png' }} // Bangladesh flag
          style={styles.flag}
        />
        <Text style={styles.countryCode}>+880</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          keyboardType="numeric"
          editable={false} // We'll use the custom keypad
        />
      </View>

      {/* Next Button */}
      <TouchableOpacity
        style={[styles.nextButton, { opacity: phoneNumber.length >= 10 ? 1 : 0.5 }]}
        onPress={handleNext}
        disabled={phoneNumber.length < 10}
      >
        <Icon name="arrow-forward" size={30} color="#fff" />
      </TouchableOpacity>

      {/* Custom Keypad */}
      <View style={styles.keypad}>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '+ * #', '0', 'delete'].map((key, index) => (
          <TouchableOpacity
            key={index}
            style={styles.key}
            onPress={() => handleKeyPress(key)}
          >
            <Text style={styles.keyText}>
              {key === 'delete' ? <Icon name="backspace" size={20} color="#000" /> : key}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backButton: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  countryCode: {
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  nextButton: {
    backgroundColor: '#53B175',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  key: {
    width: '33%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
  },
  keyText: {
    fontSize: 20,
    color: '#000',
  },
});

export default NumberScreen;