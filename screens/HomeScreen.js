import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.header}>
        <View style={styles.topHeader}>
          <Image 
            source={require('../assets/carrot-icon.png')} 
            style={styles.logo}
          />
        </View>
        <View style={styles.locationContainer}>
          <Icon name="map-marker-outline" size={20} color="#4CAF50" />
          <Text style={styles.locationText}>Dhaka, Banassre</Text>
        </View>
        <View style={styles.searchContainer}>
          <Icon name="magnify" size={20} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Store"
            placeholderTextColor="#999"
          />
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Banner */}
        <View style={styles.banner}>
          <Image
            source={require('../assets/banner.png')}
            style={styles.bannerImage}
          />
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>Fresh Vegetables</Text>
            <Text style={styles.bannerSubtitle}>Get Up To 40% OFF</Text>
            <View style={styles.bannerDots}>
              <View style={[styles.dot, styles.activeDot]} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
          </View>
          <Image 
            source={require('../assets/banner.png')} 
            style={styles.leafTopLeft} 
          />
          <Image 
            source={require('../assets/banner.png')} 
            style={styles.leafBottomRight} 
          />
        </View>

        {/* Exclusive Offer */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Exclusive Offer</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.productGrid}>
            <TouchableOpacity
              style={styles.productCard}
              onPress={() => navigation.navigate('ProductDetail')}>
              <Image
                source={require('../assets/banana.png')}
                style={styles.productImage}
              />
              <Text style={styles.productName}>Organic Bananas</Text>
              <Text style={styles.productWeight}>7pcs, Priced</Text>
              <View style={styles.productBottom}>
                <Text style={styles.productPrice}>$4.99</Text>
                <TouchableOpacity style={styles.addButton}>
                  <Icon name="plus" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.productCard}
              onPress={() => navigation.navigate('ProductDetail')}>
              <Image
                source={require('../assets/apple.png')}
                style={styles.productImage}
              />
              <Text style={styles.productName}>Red Apple</Text>
              <Text style={styles.productWeight}>1kg, Priced</Text>
              <View style={styles.productBottom}>
                <Text style={styles.productPrice}>$4.99</Text>
                <TouchableOpacity style={styles.addButton}>
                  <Icon name="plus" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Best Selling */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Best Selling</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.productGrid}>
            <TouchableOpacity style={styles.productCard}>
              <Image
                source={require('../assets/ot.png')}
                style={styles.productImage}
              />
              <Text style={styles.productName}>Fresh Tomato</Text>
              <Text style={styles.productWeight}>1kg, Priced</Text>
              <View style={styles.productBottom}>
                <Text style={styles.productPrice}>$4.99</Text>
                <TouchableOpacity style={styles.addButton}>
                  <Icon name="plus" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productCard}>
              <Image
                source={require('../assets/gung.png')}
                style={styles.productImage}
              />
              <Text style={styles.productName}>Ginger</Text>
              <Text style={styles.productWeight}>250gm, Priced</Text>
              <View style={styles.productBottom}>
                <Text style={styles.productPrice}>$4.99</Text>
                <TouchableOpacity style={styles.addButton}>
                  <Icon name="plus" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Groceries */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Groceries</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          
          {/* Category Cards */}
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.categoryScroll}
          >
            <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#FFF3E9' }]}>
              <Image
                source={require('../assets/nguvi.png')}
                style={styles.categoryImage}
              />
              <Text style={styles.categoryName}>Pulses</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#F3FFF3' }]}>
              <Image
                source={require('../assets/rice.png')}
                style={styles.categoryImage}
              />
              <Text style={styles.categoryName}>Rice</Text>
            </TouchableOpacity>
          </ScrollView>

          {/* Product Cards */}
          <View style={styles.productGrid}>
            <TouchableOpacity style={styles.productCard}>
              <Image
                source={require('../assets/meat.png')}
                style={styles.productImage}
              />
              <Text style={styles.productName}>Beef Bone</Text>
              <Text style={styles.productWeight}>1kg, Priced</Text>
              <View style={styles.productBottom}>
                <Text style={styles.productPrice}>$4.99</Text>
                <TouchableOpacity style={styles.addButton}>
                  <Icon name="plus" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productCard}>
              <Image
                source={require('../assets/chicken.png')}
                style={styles.productImage}
              />
              <Text style={styles.productName}>Broiler Chicken</Text>
              <Text style={styles.productWeight}>1kg, Priced</Text>
              <View style={styles.productBottom}>
                <Text style={styles.productPrice}>$4.99</Text>
                <TouchableOpacity style={styles.addButton}>
                  <Icon name="plus" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
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
    paddingTop: 10,
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: '#fff',
  },
  topHeader: {
    alignItems: 'center',
    marginBottom: 15,
  },
  logo: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  locationText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#333',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
  },
  content: {
    flex: 1,
  },
  banner: {
    height: 115,
    marginHorizontal: 16,
    marginBottom: 24,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#F3FFF3',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  bannerImage: {
    width: '45%',
    height: '90%',
    resizeMode: 'contain',
    position: 'absolute',
    left: 10,
  },
  bannerContent: {
    paddingRight: 20,
    width: '55%',
    position: 'absolute',
    right: 0,
    height: '100%',
    justifyContent: 'center',
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  bannerSubtitle: {
    fontSize: 14,
    color: '#4CAF50',
    marginBottom: 12,
  },
  bannerDots: {
    flexDirection: 'row',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#E2E2E2',
    marginRight: 4,
  },
  activeDot: {
    backgroundColor: '#4CAF50',
  },
  leafTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  leafBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAll: {
    color: '#4CAF50',
    fontSize: 14,
  },
  productGrid: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E2E2E2',
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  productWeight: {
    fontSize: 14,
    color: '#999',
    marginBottom: 8,
  },
  productBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productPrice: {
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
  categoryScroll: {
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginRight: 12,
    width: 200,
  },
  categoryImage: {
    width: 40,
    height: 40,
    marginRight: 12,
    resizeMode: 'contain',
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});

export default HomeScreen; 