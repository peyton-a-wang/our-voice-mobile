import * as React from 'react';
import { Button, Linking } from 'react-native';
import styles from './styles'

const TakeActionNowScreen = () => {
	return (
		<View style={styles.features}>
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
		</View>
	);
}

export default TakeActionNowScreen