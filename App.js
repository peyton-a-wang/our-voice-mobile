import * as React from 'react';
import { SafeAreaView, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles'

import Home from './src/screens/Home'
import TakeActionNow from './src/screens/TakeActionNow'
import AboutUs from './src/screens/AboutUs'
import Websites from './src/screens/Websites'

/* Logo */
function LogoTitle() {
	return (
		<Image
			style={styles.logo}
			source={require('./assets/logo.png')}
		/>
	);
}

function Polls() {
	return (
		<SafeAreaView style={styles.features}>
			<Text>Polls Screen</Text>
		</SafeAreaView>
	);
}
function Forum() {
	return (
		<SafeAreaView style={styles.features}>
			<Text>Forum Screen</Text>
		</SafeAreaView>
	);
}

function ContactUs() {
	return (
		<SafeAreaView style={styles.features}>
			<Text>Contact Us Screen</Text>
		</SafeAreaView>
	);
}

/* Profile */
function Profile() {
	return (
		<SafeAreaView style={styles.features}>
		</SafeAreaView>
	);
}

/* Settings */
function Settings() {
	return (
		<SafeAreaView style={styles.features}>

		</SafeAreaView>
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
							<HomeStack.Screen name="Polls" component={Polls} />
							<HomeStack.Screen name="Forum" component={Forum} />
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