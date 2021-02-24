import * as React from 'react';
import { Button, View } from 'react-native';
import styles from './styles'

const HomeScreen = () => {
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

export default HomeScreen