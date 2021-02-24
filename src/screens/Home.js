import * as React from 'react';
import { SafeAreaView, View } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

import styles from '../../styles'

const Home = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.home}>
			<View style={styles.buttonContainer}>
				<Ionicons.Button name="megaphone" style={styles.homeButtons} onPress={() => navigation.navigate('Take Action Now')}>
					Take Action Now!
				</Ionicons.Button>
			</View>

			<View style={styles.buttonContainer}>
				<Ionicons.Button name="ios-globe-outline" style={styles.homeButtons} onPress={() => navigation.navigate('Websites')}>
					Websites
				</Ionicons.Button>
			</View>

			<View style={styles.buttonContainer}>
				<FontAwesome.Button name="group" style={styles.homeButtons} onPress={() => navigation.navigate('About Us')}>
					About Us
				</FontAwesome.Button>
			</View>

			<View style={styles.buttonContainer}>
				<MaterialIcons.Button name="contact-page" style={styles.homeButtons} onPress={() => navigation.navigate('Contact Us')}>
					Contact Us
				</MaterialIcons.Button>
			</View>
		</SafeAreaView>
	);
}

export default Home