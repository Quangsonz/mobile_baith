import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens
import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import BeveragesScreen from './screens/BeveragesScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Placeholder screen for tabs that aren't implemented yet
const EmptyScreen = () => (
  <View style={styles.emptyScreen}>
    <Text>Coming Soon</Text>
  </View>
);

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: '#999',
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingTop: 10,
          paddingBottom: 10,
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#E2E2E2',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 5,
        },
      }}>
      <Tab.Screen
        name="Shop"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="storefront-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="magnify" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="cart-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="heart-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="account-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Beverages"
          component={BeveragesScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  emptyScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
