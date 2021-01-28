import * as React from 'react';
import { StyleSheet, Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen({ navigation }) {
	return (
		<View style={styles.home}>
			<Button
				title="Take Action Now!"
				onPress={() => navigation.navigate('Details')}
			/>
			<Button
				title="Polls"
				onPress={() => navigation.navigate('Details')}
			/>
			<Button
				title="Forum"
				onPress={() => navigation.navigate('Details')}
			/>
			<Button
				title="Websites"
				onPress={() => navigation.navigate('Details')}
			/>
			<Button
				title="About Us"
				onPress={() => navigation.navigate('Details')}
			/>
			<Button
				title="Contact Us"
				onPress={() => navigation.navigate('Details')}
			/>
		</View>
	);
}

function LogoTitle() {
	return (
		<Image
			style={styles.logo}
			source={require('./assets/logo.png')}
		/>
	);
}

function ProfileScreen({ navigation }) {
	return (
		<View style={styles.details}>
		</View>
	);
}

function SettingsScreen({ navigation }) {
	return (
		<View style={styles.details}>
			
		</View>
	);
}

function DetailsScreen({ navigation }) {
	return (
		<View style={styles.details}>
			<Text>Details Screen</Text>
			<Button
				title="Go to Details... again"
				onPress={() => navigation.push('Details')}
			/>
		</View>
	);
}
const Tab = createBottomTabNavigator();
const SettingsStack = createStackNavigator();
const HomeStack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Home">
					{() => (
						<HomeStack.Navigator>
							<HomeStack.Screen 
								name="Home" 
								component={HomeScreen} 
								options={{ headerTitle: props => <LogoTitle {...props} /> }}
							/>
							<HomeStack.Screen name="Details" component={DetailsScreen} />
						</HomeStack.Navigator>
					)}
				</Tab.Screen>
				<Tab.Screen name="Profile">
					{() => (
						<SettingsStack.Navigator>
							<SettingsStack.Screen name="Profile" component={ProfileScreen} />
						</SettingsStack.Navigator>
					)}
				</Tab.Screen>
				<Tab.Screen name="Settings">
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

const styles = StyleSheet.create({
	home: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FC9C73'
	},
	logo: {
		width: 50,
		height: 50
	},
	details: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FC9C73'
	},
});