import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  const categories = [
    { id: 'pizza', icon: 'pizza', label: 'PIZZA', color: '#00CD7E' },
    { id: 'burger', icon: 'fast-food', label: 'BURGER', color: '#F0F0F0' },
    { id: 'drink', icon: 'wine', label: 'DRINK', color: '#F0F0F0' },
    { id: 'rice', icon: 'restaurant', label: 'RICI', color: '#F0F0F0' },
  ];

  const popularItems = [
    { id: 'burger', image: require('../assets/burger.png'), label: 'BURGER' },
    { id: 'pizza', image: require('../assets/pizza.jpg'), label: 'PIZZA' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF9E5" />
      <View style={styles.headerBackground}>
        <View style={styles.header}>
          <View style={styles.locationContainer}>
            <Image
              source={require('../assets/avata1.png')}
              style={styles.profileImage}
            />
            <View style={styles.locationTextContainer}>
              <Text style={styles.locationLabel}>Your Location</Text>
              <View style={styles.locationRow}>
                <Icon name="location-outline" size={14} color="#000" />
                <Text style={styles.locationText}>Savar, Dhaka</Text>
              </View>
            </View>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity 
              style={styles.iconButton}
              onPress={() => navigation.navigate('InboxScreen')}
            >
              <Icon name="chatbox-outline" size={22} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="notifications-outline" size={22} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <Icon name="search-outline" size={20} color="#fff" />
            <TextInput
              placeholder="Search your food"
              style={styles.searchInput}
              placeholderTextColor="#fff"
            />
            <Icon name="menu" size={20} color="#fff" />
          </View>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Categories */}
        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[styles.categoryButton, { backgroundColor: category.color }]}
            >
              <Icon name={category.icon} size={24} color={category.color === '#00CD7E' ? '#fff' : '#000'} />
              <Text style={[styles.categoryText, { color: category.color === '#00CD7E' ? '#fff' : '#000' }]}>
                {category.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Promo Banner */}
        <View style={styles.promoBanner}>
          <View style={styles.promoContent}>
            <View style={styles.promoTag}>
              <Text style={styles.promoTagText}>10% OFF</Text>
            </View>
            <Text style={styles.promoTitle}>BURGER</Text>
            <Text style={styles.promoSubtitle}>Today's Hot Offer</Text>
            <View style={styles.ratingContainer}>
              <Icon name="star" size={16} color="#FFD700" />
              <Text style={styles.ratingText}>4.9 (5k+ Rating)</Text>
            </View>
          </View>
          <Image
            source={require('../assets/burger.png')}
            style={styles.promoBurgerImage}
            resizeMode="contain"
          />
        </View>

        {/* Popular Items */}
        <View style={styles.popularSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Items</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.popularItemsGrid}>
            {popularItems.map((item) => (
              <View key={item.id} style={styles.popularItemCard}>
                <Image source={item.image} style={styles.popularItemImage} />
                <Text style={styles.popularItemLabel}>{item.label}</Text>
              </View>
            ))}
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
  headerBackground: {
    backgroundColor: '#FFF9E5',
    paddingTop: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    marginRight: 10,
  },
  locationTextContainer: {
    justifyContent: 'center',
  },
  locationLabel: {
    fontSize: 11,
    color: '#666',
    marginBottom: 2,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 2,
    color: '#000',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 5,
    marginLeft: 15,
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5D3EBD',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 45,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    color: '#fff',
    fontSize: 14,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  categoryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 15,
  },
  categoryText: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '600',
  },
  promoBanner: {
    backgroundColor: '#1B1B1B',
    margin: 20,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 15,
    overflow: 'hidden',
  },
  promoContent: {
    flex: 1,
  },
  promoTag: {
    backgroundColor: '#5D3EBD',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    marginBottom: 10,
  },
  promoTagText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  promoTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  promoSubtitle: {
    color: '#fff',
    opacity: 0.8,
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: '#fff',
    marginLeft: 5,
  },
  promoBurgerImage: {
    width: 120,
    height: 120,
  },
  popularSection: {
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAllText: {
    color: '#666',
  },
  popularItemsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  popularItemCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
  },
  popularItemImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  popularItemLabel: {
    fontSize: 16,
    fontWeight: '600',
    padding: 10,
    textAlign: 'center',
  },
});

export default HomeScreen;