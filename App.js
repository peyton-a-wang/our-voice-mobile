import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles'

import Home from './src/screens/Home'
import Profile from './src/screens/Profile'
import Settings from './src/screens/Settings'

import TakeActionNow from './src/screens/TakeActionNow'
import Websites from './src/screens/Websites'
import AboutUs from './src/screens/AboutUs'
import ContactUs from './src/screens/ContactUs'

/* Logo */
function LogoTitle() {
	return (
		<Image
			style={styles.logo}
			source={require('./assets/logo.png')}
		/>
	);
}

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SettingsStack = createStackNavigator();

/* App */
function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen
					name="Home"
					options={{
						tabBarLabel: 'Home',
						tabBarIcon: ({ color, size }) => (
							<MaterialCommunityIcons name="home" color={color} size={size} />
						),
					}}>
					{() => (
						<HomeStack.Navigator>
							<HomeStack.Screen
								name="Home"
								component={Home}
								options={{ headerTitle: props => <LogoTitle {...props} /> }}
							/>
							<HomeStack.Screen name="Take Action Now" component={TakeActionNow} />
							<HomeStack.Screen name="Websites" component={Websites} />
							<HomeStack.Screen name="About Us" component={AboutUs} />
							<HomeStack.Screen name="Contact Us" component={ContactUs} />
						</HomeStack.Navigator>
					)}
				</Tab.Screen>
				<Tab.Screen
					name="Profile"
					options={{
						tabBarLabel: 'Profile',
						tabBarIcon: ({ color, size }) => (
							<MaterialCommunityIcons name="account" color={color} size={size} />
						),
					}}>
					{() => (
						<ProfileStack.Navigator>
							<ProfileStack.Screen name="Profile" component={Profile} />
						</ProfileStack.Navigator>
					)}
				</Tab.Screen>
				<Tab.Screen
					name="Settings"
					options={{
						tabBarLabel: 'Settings',
						tabBarIcon: ({ color, size }) => (
							<MaterialCommunityIcons name="cog" color={color} size={size} />
						),
					}}>
					{() => (
						<SettingsStack.Navigator>
							<SettingsStack.Screen name="Settings" component={Settings} />
						</SettingsStack.Navigator>
					)}
				</Tab.Screen>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

export default App;