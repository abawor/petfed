import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import '@expo/metro-runtime'
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen from "./screens/LoadingScreen";
import HomeScreen from "./screens/HomeScreen";
import AddNewPet from "./screens/AddNewPet";
import FeedScreen from './screens/FeedScreen';
import RemindersScreen from './screens/RemindersScreen';
import SettingsScreen from './screens/SettingsScreen';
import { Text } from 'react-native';

// Create Stack and Tab Navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigation Component (Home, Feed, Reminders, Settings)
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // Define icons based on the route name
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Feed') {
            iconName = 'cutlery';
          } else if (route.name === 'Reminders') {
            iconName = 'bell';
          } else if (route.name === 'Settings') {
            iconName = 'cog';
          }

          // Return the icon component
          return <Icon name={iconName} size={50} color={color} />;
        },
        tabBarLabel: ({ focused }) => {
          return (
            <Text style={{ color: focused ? 'black' : 'grey', fontSize: 12 }}>
              {route.name}
            </Text>
          );
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: { height: 80 }, // Adjust height to fit icon + text
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Feed" component={FeedScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Reminders" component={RemindersScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

// Stack Navigation Component (Loading Screen, Add New Pet, TabNavigator)
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingScreen">
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="AddNewPet" component={AddNewPet} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
