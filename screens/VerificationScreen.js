// screens/VerificationScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // For the back arrow

const VerificationScreen = ({ navigation, route }) => {
  const { phoneNumber } = route.params; // Get phone number from previous screen
  const [code, setCode] = useState('');

  const handleKeyPress = (key) => {
    if (key === 'delete') {
      setCode(code.slice(0, -1));
    } else if (code.length < 4) {
      setCode(code + key);
    }
  };

  const handleNext = () => {
    if (code.length === 4) {
      // Proceed to the next screen (e.g., Home screen) after verification
      // For now, we'll just log the code
      console.log('Verification code:', code);
      // navigation.navigate('HomeScreen'); // Uncomment when you have a Home screen
    }
  };

  const handleResendCode = () => {
    // Logic to resend the code
    console.log('Resending code to', phoneNumber);
  };

  return (
    <View style={styles.container}>
      {/* Header with Back Arrow */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-back" size={30} color="#000" />
      </TouchableOpacity>

      {/* Title and Code Input */}
      <Text style={styles.title}>Enter your 4-digit code</Text>
      <Text style={styles.label}>Code</Text>
      <Text style={styles.codeInput}>{code || '----'}</Text>

      {/* Resend Code */}
      <TouchableOpacity onPress={handleResendCode}>
        <Text style={styles.resendText}>Resend Code</Text>
      </TouchableOpacity>

      {/* Next Button */}
      <TouchableOpacity
        style={[styles.nextButton, { opacity: code.length === 4 ? 1 : 0.5 }]}
        onPress={handleNext}
        disabled={code.length !== 4}
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
  codeInput: {
    fontSize: 24,
    letterSpacing: 10,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    marginBottom: 20,
  },
  resendText: {
    fontSize: 16,
    color: '#53B175',
    textAlign: 'center',
    marginBottom: 20,
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

export default VerificationScreen;