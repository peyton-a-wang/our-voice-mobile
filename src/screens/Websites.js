import * as React from 'react';
import { SafeAreaView, View, Linking } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import styles from '../../styles'

const Websites = () => {
	return (
		<SafeAreaView style={styles.websites}>
			<View style={styles.buttonContainer}>
				<Ionicons.Button name="megaphone" style={styles.websiteButtons} onPress={() => Linking.openURL('https://www.ovtakeaction.com/')}>
					Take Action Now
				</Ionicons.Button>
			</View>

			<View style={styles.buttonContainer}>
				<FontAwesome.Button name="building" style={styles.websiteButtons} onPress={() => Linking.openURL('https://our-voice.github.io/company-website/')}>
					Our Company
				</FontAwesome.Button>
			</View>
			
			<View style={styles.buttonContainer}>
				<FontAwesome.Button name="instagram" style={styles.websiteButtons} onPress={() => Linking.openURL('https://www.instagram.com/ovtakeaction/')}>
					Instagram
				</FontAwesome.Button>
			</View>

			<View style={styles.buttonContainer}>
				<FontAwesome.Button name="linkedin" style={styles.websiteButtons} onPress={() => Linking.openURL('https://www.linkedin.com/company/our-voice-mobile-app/')}>
					LinkedIn
				</FontAwesome.Button>
			</View>

			<View style={styles.buttonContainer}>
				<FontAwesome.Button name="facebook" style={styles.websiteButtons} onPress={() => Linking.openURL('https://www.linkedin.com/company/our-voice-mobile-app/')}>
					Facebook
				</FontAwesome.Button>
			</View>
		</SafeAreaView>
	);
}

export default Websites