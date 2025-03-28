import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const menuItems = [
    { icon: 'home-outline', label: 'Home' },
    { icon: 'card-outline', label: 'My Card' },
    { icon: 'moon-outline', label: 'Dark Mode', isSwitch: true },
    { icon: 'location-outline', label: 'Track Your Order' },
    { icon: 'settings-outline', label: 'Settings' },
    { icon: 'help-circle-outline', label: 'Help Center' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF9E5" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileImageWrapper}>
          <View style={styles.profileImageContainer}>
            <Image
              source={require('../assets/avata2.png')}
              style={styles.profileImage}
            />
            <View style={styles.editIconContainer}>
              <Icon name="create-outline" size={14} color="#fff" />
            </View>
          </View>
        </View>
        <Text style={styles.profileName}>Rakibul Hasan</Text>
        <Text style={styles.profileEmail}>rakibhbrand@gmail.com</Text>
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity 
            key={index}
            style={[
              styles.menuItem,
              index !== menuItems.length - 1 && styles.menuItemBorder
            ]}
            onPress={() => {
              if (item.label === 'Dark Mode') return;
              // Handle navigation
            }}
          >
            <View style={styles.menuItemLeft}>
              <Icon name={item.icon} size={20} color="#000" />
              <Text style={styles.menuItemText}>{item.label}</Text>
            </View>
            {item.isSwitch ? (
              <Switch
                value={isDarkMode}
                onValueChange={setIsDarkMode}
                trackColor={{ false: '#D1D1D1', true: '#5D3EBD' }}
                thumbColor={'#fff'}
              />
            ) : (
              <Icon name="chevron-forward" size={18} color="#666" />
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
        <Icon name="log-out-outline" size={20} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9E5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 10,
  },
  profileImageWrapper: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileImageContainer: {
    position: 'relative',
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#5D3EBD',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
    color: '#000',
  },
  profileEmail: {
    fontSize: 13,
    color: '#666',
  },
  menuContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 25,
    marginHorizontal: 16,
    paddingVertical: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  menuItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  menuItemText: {
    fontSize: 14,
    color: '#000',
  },
  logoutButton: {
    backgroundColor: '#5D3EBD',
    marginHorizontal: 16,
    marginTop: 'auto',
    marginBottom: 80,
    padding: 14,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  logoutText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default ProfileScreen;
