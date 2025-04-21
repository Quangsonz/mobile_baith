import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const beverages = [
  {
    id: 1,
    name: 'Diet Coke',
    volume: '355ml',
    price: 1.99,
    image: require('../assets/coke.png'),
  },
  {
    id: 2,
    name: 'Sprite Can',
    volume: '325ml',
    price: 1.50,
    image: require('../assets/sprite.png'),
  },
  {
    id: 3,
    name: 'Apple & Grape Juice',
    volume: '2L',
    price: 15.99,
    image: require('../assets/apple-juice.png'),
  },
  {
    id: 4,
    name: 'Orange Juice',
    volume: '2L',
    price: 15.99,
    image: require('../assets/orange-juice.png'),
  },
  {
    id: 5,
    name: 'Coca Cola Can',
    volume: '325ml',
    price: 4.99,
    image: require('../assets/coca-cola.png'),
  },
  {
    id: 6,
    name: 'Pepsi Can',
    volume: '325ml',
    price: 4.99,
    image: require('../assets/pepsi.png'),
  },
];

const BeveragesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={30} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Beverages</Text>
        <TouchableOpacity>
          <Icon name="tune-vertical" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.grid}>
          {beverages.map((beverage) => (
            <View key={beverage.id} style={styles.productCard}>
              <Image source={beverage.image} style={styles.productImage} />
              <Text style={styles.productName}>{beverage.name}</Text>
              <Text style={styles.productVolume}>{beverage.volume}, Price</Text>
              <View style={styles.priceRow}>
                <Text style={styles.price}>${beverage.price.toFixed(2)}</Text>
                <TouchableOpacity style={styles.addButton}>
                  <Icon name="plus" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  productVolume: {
    fontSize: 14,
    color: '#999',
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    width: 36,
    height: 36,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BeveragesScreen; 