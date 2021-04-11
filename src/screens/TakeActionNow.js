import * as React from 'react';
import { SafeAreaView, Text, View, Button, Linking } from 'react-native';
import styles from '../../styles'

const TakeActionNow = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.features}>
			<Text></Text> 
			<View style={styles.buttonContainer}>
				<Button
					title="Black Lives Matter"
					onPress={() => navigation.navigate('Action Items Template')}
				/>
			</View>

			<View style={styles.buttonContainer}>
				<Button
					title="Climate Change"
					onPress={() => Linking.openURL('https://google.com')}
				/>
			</View>
			
			<View style={styles.buttonContainer}>
				<Button
					title="Women's Rights"
					onPress={() => Linking.openURL('https://google.com')}
				/>
			</View>

			<View style={styles.buttonContainer}>
				<Button
					title="Gun Control"
					onPress={() => Linking.openURL('https://google.com')}
				/>
			</View>

			<View style={styles.buttonContainer}>
				<Button
					title="LGBTQ+ Rights"
					onPress={() => Linking.openURL('https://google.com')}
				/>
			</View>

			<View style={styles.buttonContainer}>
				<Button
					title="Recommend More Topics!"
					onPress={() => Linking.openURL('https://google.com')}
				/>
			</View>
		</SafeAreaView>
	);
}

export default TakeActionNow