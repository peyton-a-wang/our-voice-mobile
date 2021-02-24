import * as React from 'react';
import { SafeAreaView, Button, Linking } from 'react-native';
import styles from '../../styles'

const Websites = () => {
	return (
		<SafeAreaView style={styles.features}>
            <Button
				title="Take Action Now"
				onPress={() => Linking.openURL('https://www.ovtakeaction.com/')}
			/>
			<Button
				title="Our Company"
				onPress={() => Linking.openURL('https://our-voice.github.io/company-website/')}
			/>
			<Button
				title="Instagram"
				onPress={() => Linking.openURL('https://www.instagram.com/ovtakeaction/')}
			/>
			<Button
				title="LinkedIn"
				onPress={() => Linking.openURL('https://www.linkedin.com/company/our-voice-mobile-app/')}
			/>
			<Button
				title="Facebook"
				onPress={() => Linking.openURL('https://www.facebook.com/ourvoicemobileapp/')}
			/>
		</SafeAreaView>
	);
}

export default Websites