import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CartScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF9E5" />
      
      {/* Top Section with Header and Image */}
      <View style={styles.topSection}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Shopping Cart</Text>
          <TouchableOpacity>
            <Icon name="trash-outline" size={22} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Main Burger Image */}
        <View style={styles.mainImageContainer}>
          <Image 
            source={require('../assets/burger2.png')} 
            style={styles.mainImage}
            resizeMode="cover"
          />
          <View style={styles.discountTag}>
            <Text style={styles.discountText}>10%{'\n'}OFF</Text>
          </View>
          
          {/* Small Burger Images */}
          <View style={styles.smallBurgersContainer}>
            <Image 
              source={require('../assets/burger.png')} 
              style={styles.smallBurger}
              resizeMode="cover"
            />
            <Image 
              source={require('../assets/burger.png')} 
              style={styles.smallBurger}
              resizeMode="cover"
            />
            <Image 
              source={require('../assets/burger.png')} 
              style={styles.smallBurger}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        {/* Product Details */}
        <View style={styles.productDetails}>
          <View style={styles.titleRow}>
            <Text style={styles.burgerTitle}>BURGER</Text>
            <Text style={styles.price}>$28</Text>
          </View>
          <View style={styles.ratingRow}>
            <View style={styles.ratingContainer}>
              <Icon name="star" size={14} color="#FFD700" />
              <Text style={styles.ratingText}>4.5 (3k+ Rating)</Text>
            </View>
            <View style={styles.quantityControl}>
              <TouchableOpacity style={styles.quantityButton}>
                <Icon name="remove" size={18} color="#000" />
              </TouchableOpacity>
              <Text style={styles.quantity}>02</Text>
              <TouchableOpacity style={styles.quantityButton}>
                <Icon name="add" size={18} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Delivery Address */}
        <View style={styles.addressContainer}>
          <View style={styles.addressLeft}>
            <Icon name="location-outline" size={20} color="#000" />
            <Text style={styles.addressText}>Dhaka, Bangladesh</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Icon name="create-outline" size={18} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Payment Method */}
        <View style={styles.paymentContainer}>
          <View style={styles.paymentLeft}>
            <Icon name="card-outline" size={20} color="#000" />
            <Text style={styles.paymentText}>Payment Method</Text>
          </View>
          <TouchableOpacity style={styles.changeButton}>
            <Text style={styles.changeText}>Change</Text>
          </TouchableOpacity>
        </View>

        {/* Order Summary */}
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryTitle}>Checkout Summary</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryText}>Subtotal (2)</Text>
            <Text style={styles.summaryValue}>$56</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryText}>Delivery Fee</Text>
            <Text style={styles.summaryValue}>$6.20</Text>
          </View>
          <View style={[styles.summaryRow, styles.totalRow]}>
            <Text style={styles.totalText}>Payable Total</Text>
            <Text style={styles.totalAmount}>$62.2</Text>
          </View>
        </View>

        {/* Confirm Button */}
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmText}>Confirm Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9E5',
  },
  topSection: {
    backgroundColor: '#FFF9E5',
    paddingTop: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  mainImageContainer: {
    width: '92%',
    height: 200,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  mainImage: {
    width: '100%',
    height: '100%',
  },
  discountTag: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#5D3EBD',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  discountText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 11,
    textAlign: 'center',
    lineHeight: 14,
  },
  smallBurgersContainer: {
    position: 'absolute',
    bottom: 15,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  smallBurger: {
    width: 80,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#5D3EBD',
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 15,
  },
  productDetails: {
    paddingHorizontal: 20,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  burgerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    color: '#5D3EBD',
    fontWeight: '600',
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 13,
    color: '#666',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  quantityButton: {
    padding: 3,
  },
  quantity: {
    marginHorizontal: 12,
    fontSize: 14,
    fontWeight: '500',
  },
  addressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E8FAF0',
    marginHorizontal: 20,
    marginTop: 15,
    padding: 12,
    borderRadius: 12,
  },
  addressLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  addressText: {
    fontSize: 14,
    color: '#000',
  },
  editButton: {
    backgroundColor: '#5D3EBD',
    padding: 8,
    borderRadius: 8,
  },
  paymentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 12,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
  },
  paymentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  paymentText: {
    fontSize: 14,
    color: '#000',
  },
  changeButton: {
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  changeText: {
    color: '#5D3EBD',
    fontSize: 13,
    fontWeight: '500',
  },
  summaryContainer: {
    margin: 20,
    marginTop: 15,
  },
  summaryTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 12,
    color: '#000',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryText: {
    fontSize: 13,
    color: '#666',
  },
  summaryValue: {
    fontSize: 13,
    color: '#000',
  },
  totalRow: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  totalText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  totalAmount: {
    fontSize: 14,
    fontWeight: '600',
    color: '#5D3EBD',
  },
  confirmButton: {
    backgroundColor: '#5D3EBD',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  confirmText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default CartScreen;

