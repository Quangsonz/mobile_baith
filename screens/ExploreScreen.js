import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const categories = [
  {
    id: 1,
    name: 'Fresh Fruits & Vegetable',
    image: require('../assets/hoaqua.png'),
    color: '#E6F2EA',
  },
  {
    id: 2,
    name: 'Cooking Oil & Ghee',
    image: require('../assets/cooking_oil.png'),
    color: '#FFF6E4',
  },
  {
    id: 3,
    name: 'Meat & Fish',
    image: require('../assets/meat_fish.png'),
    color: '#FFE9E5',
  },
  {
    id: 4,
    name: 'Bakery & Snacks',
    image: require('../assets/bakery.png'),
    color: '#F3EFFA',
  },
  {
    id: 5,
    name: 'Dairy & Eggs',
    image: require('../assets/egg.png'),
    color: '#FFF8E5',
  },
  {
    id: 6,
    name: 'Beverages',
    image: require('../assets/bever.png'),
    color: '#E6F2EA',
  },
];

const ExploreScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Find Products</Text>

      <View style={styles.searchContainer}>
        <Icon name="magnify" size={24} color="#999" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Store"
          placeholderTextColor="#999"
        />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.categoriesGrid}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[styles.categoryCard, { backgroundColor: category.color }]}
              onPress={() => {
                if (category.name === 'Beverages') {
                  navigation.navigate('Beverages');
                }
              }}>
              <Image source={category.image} style={styles.categoryImage} />
              <Text style={styles.categoryName}>{category.name}</Text>
            </TouchableOpacity>
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
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 12,
    marginBottom: 24,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  content: {
    flex: 1,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImage: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
    marginBottom: 12,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
});

export default ExploreScreen; 