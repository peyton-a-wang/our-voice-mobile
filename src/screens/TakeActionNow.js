import * as React from 'react';
import { SafeAreaView, Button, Linking } from 'react-native';
import styles from '../../styles'

const TakeActionNow = () => {
	return (
		<SafeAreaView style={styles.features}>
			<Button
				title="Call Your Rep"
				onPress={() => Linking.openURL('https://google.com')}
			/>
			<Button
				title="Sign Petition"
				onPress={() => Linking.openURL('https://google.com')}
			/>
			<Button
				title="Volunteer"
				onPress={() => Linking.openURL('https://google.com')}
			/>
			<Button
				title="Pledge"
				onPress={() => Linking.openURL('https://google.com')}
			/>
			<Button
				title="Send Postcard"
				onPress={() => Linking.openURL('https://google.com')}
			/>
			<Button
				title="Join"
				onPress={() => Linking.openURL('https://google.com')}
			/>
		</SafeAreaView>
	);
}

export default TakeActionNow