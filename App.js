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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Feed') {
            iconName = 'cutlery';
          } else if (route.name === 'Reminders') {
            iconName = 'bell';
          } else if (route.name === 'Settings') {
            iconName = 'cog';
          }

          return <Icon name={iconName} size={25} color={color} />;
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
        tabBarStyle: { height: 60 },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Feed" component={FeedScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Reminders" component={RemindersScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

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
