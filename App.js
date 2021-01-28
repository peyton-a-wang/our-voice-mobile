import * as React from 'react';
import { StyleSheet, Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

/* Home Screen */
	function HomeScreen({ navigation }) {
		return (
			<View style={styles.home}>
				<Button
					title="Take Action Now!"
					onPress={() => navigation.navigate('Take Action Now')}
				/>
				<Button
					title="Polls"
					onPress={() => navigation.navigate('Polls')}
				/>
				<Button
					title="Forum"
					onPress={() => navigation.navigate('Forum')}
				/>
				<Button
					title="Websites"
					onPress={() => navigation.navigate('Websites')}
				/>
				<Button
					title="About Us"
					onPress={() => navigation.navigate('About Us')}
				/>
				<Button
					title="Contact Us"
					onPress={() => navigation.navigate('Contact Us')}
				/>
			</View>
		);
	}

	/* Logo */
		function LogoTitle() {
			return (
				<Image
					style={styles.logo}
					source={require('./assets/logo.png')}
				/>
			);
		}

	/* Features */
		function TakeActionNowScreen({ navigation }) {
			return (
				<View style={styles.features}>
					<Text>Take Action Now Screen</Text>
				</View>
			);
		}
		function PollsScreen({ navigation }) {
			return (
				<View style={styles.features}>
					<Text>Polls Screen</Text>
				</View>
			);
		}
		function ForumScreen({ navigation }) {
			return (
				<View style={styles.features}>
					<Text>Forum Screen</Text>
				</View>
			);
		}
		function WebsitesScreen({ navigation }) {
			return (
				<View style={styles.features}>
					<Text>Websites Screen</Text>
				</View>
			);
		}
		function AboutUsScreen({ navigation }) {
			return (
				<View style={styles.features}>
					<Text>About Us Screen</Text>
				</View>
			);
		}
		function ContactUsScreen({ navigation }) {
			return (
				<View style={styles.features}>
					<Text>Contact Us Screen</Text>
				</View>
			);
		}

/* Profile */
	function ProfileScreen({ navigation }) {
		return (
			<View style={styles.features}>
			</View>
		);
	}

/* Settings */
	function SettingsScreen({ navigation }) {
		return (
			<View style={styles.features}>

			</View>
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
						}}
					>
						{() => (
							<HomeStack.Navigator>
								<HomeStack.Screen
									name="Home"
									component={HomeScreen}
									options={{ headerTitle: props => <LogoTitle {...props} /> }}
								/>
								<HomeStack.Screen name="Take Action Now" component={TakeActionNowScreen} />
								<HomeStack.Screen name="Polls" component={PollsScreen} />
								<HomeStack.Screen name="Forum" component={ForumScreen} />
								<HomeStack.Screen name="Websites" component={WebsitesScreen} />
								<HomeStack.Screen name="About Us" component={AboutUsScreen} />
								<HomeStack.Screen name="Contact Us" component={ContactUsScreen} />
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
						}}
					>
						{() => (
							<ProfileStack.Navigator>
								<ProfileStack.Screen name="Profile" component={ProfileScreen} />
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
						}}
						>
						{() => (
							<SettingsStack.Navigator>
								<SettingsStack.Screen name="Settings" component={SettingsScreen} />
							</SettingsStack.Navigator>
						)}
					</Tab.Screen>
				</Tab.Navigator>
			</NavigationContainer>
		);
	}

	export default App;

/* Styles */
	const styles = StyleSheet.create({
		home: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: '#FC9C73'
		},
		logo: {
			width: 40,
			height: 40
		},
		features: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: '#FC9C73'
		},
	});