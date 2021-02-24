import * as React from 'react';
import { SafeAreaView, Text } from 'react-native';
import styles from '../../styles'

const ContactUs = () => {
    return (
        <SafeAreaView style={styles.features}>
            <Text>
                Interested in getting involved? Want us to feature an action item? Reach out to our
                team here or at ourvoicemobileapp@gmail.com.
            </Text>
        </SafeAreaView>
    );
}

export default ContactUs