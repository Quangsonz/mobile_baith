import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  SafeAreaView,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CheckoutScreen = () => {
  const navigation = useNavigation();
  const [cardNumber, setCardNumber] = useState('5261 4141 0151 8472');
  const [cardHolder, setCardHolder] = useState('Christie Doe');
  const [expiryDate, setExpiryDate] = useState('06 / 2024');
  const [cvv, setCvv] = useState('915');

  const formatCardNumber = (input) => {
    const cleaned = input.replace(/\D/g, '');
    const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || cleaned;
    return formatted;
  };

  const handleCardNumberChange = (text) => {
    const formattedText = formatCardNumber(text);
    setCardNumber(formattedText);
  };

  const formatExpiryDate = (input) => {
    const cleaned = input.replace(/\D/g, '');
    const month = cleaned.slice(0, 2);
    const year = cleaned.slice(2, 6);

    let formattedMonth = month;
    if (month.length === 2) {
      const monthNum = parseInt(month, 10);
      if (monthNum < 1) formattedMonth = '01';
      if (monthNum > 12) formattedMonth = '12';
    }

    let formattedYear = year;
    if (year.length === 4) {
      const yearNum = parseInt(year, 10);
      const currentYear = new Date().getFullYear();
      if (yearNum < currentYear) formattedYear = currentYear.toString();
    }

    if (cleaned.length <= 2) {
      return formattedMonth;
    }
    return `${formattedMonth} / ${formattedYear}`;
  };

  const handleExpiryDateChange = (text) => {
    const formattedText = formatExpiryDate(text);
    setExpiryDate(formattedText);
  };

  const handlePayment = () => {
    navigation.navigate('PaymentSuccess');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Container with Drop Shadow */}
          <View style={styles.paymentContainer}>
            {/* Header */}
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" size={24} color="#007bff" />
              </TouchableOpacity>
              <View style={styles.titleContainer}>
                <Icon name="credit-card" size={18} color="#888" style={styles.titleIcon} />
                <Text style={styles.headerTitle}>Checkout</Text>
              </View>
              <View style={styles.totalContainer}>
                <Text style={styles.total}>₹ 1,527</Text>
                <Text style={styles.gst}>Including GST (18%)</Text>
              </View>
            </View>

            {/* Payment Options */}
            <View style={styles.paymentOptions}>
              <TouchableOpacity style={[styles.optionButton, styles.selectedOption]}>
                <Text style={[styles.optionText, styles.selectedOptionText]}>Credit card</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.optionText}>Apple Pay</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Card Number */}
          <Text style={styles.label}>Card number</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChangeText={handleCardNumberChange}
              keyboardType="numeric"
              maxLength={19}
            />
            <View style={styles.cardIcons}>
              <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg' }}
                style={styles.cardLogo}
              />
              <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg' }}
                style={styles.cardLogo}
              />
              <Icon name="credit-card" size={22} color="#888" style={styles.inputIcon} />
            </View>
          </View>

          {/* Cardholder Name */}
          <Text style={styles.label}>Cardholder name</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter name"
              value={cardHolder}
              onChangeText={setCardHolder}
            />
          </View>

          {/* Expiry Date and CVV */}
          <View style={styles.row}>
            <View style={styles.halfInputContainer}>
              <Text style={styles.label}>Expiry date</Text>
              <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="MM / YYYY"
                value={expiryDate}
                onChangeText={handleExpiryDateChange}
                keyboardType="numeric"
                maxLength={9}
              />
            </View>
            <View style={styles.halfInputContainer}>
              <Text style={styles.label}>
                CVV / CVC <Icon name="help-outline" size={16} color="#28a745" />
              </Text>
              <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="123"
                value={cvv}
                onChangeText={setCvv}
                keyboardType="numeric"
              />
            </View>
          </View>

          {/* Info Text */}
          <Text style={styles.infoText}>
            We will send you an order details to your email after the successful payment
          </Text>

          {/* Pay Button */}
          <View style={styles.payButtonContainer}>
            <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
              <Icon name="lock" size={18} color="#fff" style={styles.lockIcon} />
              <Text style={styles.payButtonText}>Pay for the order</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },
  paymentContainer: {
    backgroundColor: '#fff', // White background for the container
    borderRadius: 30, // Rounded corners for the container
    padding: 20, // Padding inside the container
    marginBottom: 15,
    // Drop shadow as per the image
    shadowColor: '#01763F', // Dark green shadow color
    shadowOffset: { width: 0, height: 2 }, // X: 0, Y: 2
    shadowOpacity: 0.4, // 40% opacity
    shadowRadius: 27, // Blur: 27
    elevation: 5, // Elevation for Android
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
  },
  titleIcon: {
    marginRight: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  totalContainer: {
    alignItems: 'flex-end',
  },
  total: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#28a745',
  },
  gst: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  paymentOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc', // Light gray border for the unselected button
    borderRadius: 25, // Match the rounded corners in the image
    backgroundColor: '#fff', // White background for unselected button
    marginHorizontal: 5, // Space between buttons
    // Drop shadow for the buttons to make them pop out
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6, // Elevation for Android to make the button appear raised
  },
  selectedOption: {
    backgroundColor: '#28a745', // Green background for selected option
    borderWidth: 0, // Remove border for selected option
    // Keep the same shadow properties for consistency
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  optionText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  selectedOptionText: {
    color: '#fff', // White text for selected option
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  cardIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardLogo: {
    width: 24,
    height: 16,
    marginRight: 5,
  },
  inputIcon: {
    paddingRight: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  halfInputContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  halfInput: {
    padding: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
    lineHeight: 20,
  },
  payButtonContainer: {
    marginHorizontal: 15,
    marginBottom: 20,
  },
  payButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  lockIcon: {
    marginRight: 5,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;