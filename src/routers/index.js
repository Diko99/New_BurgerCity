import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  SplashScreen,
  SignInScreen,
  LoginScreen,
  ForgetScreen,
  HomeScreen,
  OurBurgerScreen,
  FavouriteScreen,
  ProfileScreen,
  BurgerMenuScreen,
} from '../screens';
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Our Burgers" component={OurBurgerScreen} />
      <Tab.Screen name="Favourites" component={FavouriteScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const Routers = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Forget" component={ForgetScreen} />
      <Stack.Screen name="Home" component={MainApp} />
      <Stack.Screen name="BurgerMenu" component={BurgerMenuScreen} />
    </Stack.Navigator>
  );
};

export default Routers;
