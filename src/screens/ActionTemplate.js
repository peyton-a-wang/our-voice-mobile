import * as React from 'react';
import { SafeAreaView, View, Button, Text, Linking } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import styles from '../../styles'

const ActionTemplate = () => {
	return (
        <SafeAreaView style={styles.action}>
           <Text style={styles.subHeader}>Action Items</Text> 

            <View style={styles.buttonContainerRow}>
                <Ionicons.Button name="mail" style={styles.actionButtons} onPress={() => Linking.openURL('https://action.aclu.org/send-message/reparations-slavery-now')}>
                    Email Rep
                </Ionicons.Button>

                <Ionicons.Button name="pencil" style={styles.actionButtons} onPress={() => Linking.openURL('https://act.colorofchange.org/sign/de-blasio-stop-targeting-black-coronavirus?source=coc_main_website/')}>
                    Petition
                </Ionicons.Button>
            </View>

            <View style={styles.buttonContainerRow}>
                <Ionicons.Button name="call" style={styles.actionButtons} onPress={() => Linking.openURL('https://act.ayannapressley.com/call/accountability')}>
                    Call Rep
                </Ionicons.Button>
            
                <Ionicons.Button name="warning" style={styles.actionButtons} onPress={() => Linking.openURL('https://blacklivesmatter.com/help-us-fight-disinformation/')}>
                    Report Disinformation
                </Ionicons.Button>
            </View>

            <View style={styles.buttonContainerRow}>
                <Ionicons.Button name="cart" style={styles.actionButtons} onPress={() => Linking.openURL('https://store.blacklivesmatter.com/store/')}>
                    Shop
                </Ionicons.Button>
                
                <Ionicons.Button name="heart" style={styles.actionButtons} onPress={() => Linking.openURL('ttps://secure.actblue.com/contribute/page/support-us?refcode=coc_website_popup')}>
                    Donate
                </Ionicons.Button>
            </View>

            <Text></Text><Text></Text>
            <Text style={styles.subHeader}>Reading & Resources</Text>
            <Text>Placeholder for list of resources</Text>

            <Text></Text><Text></Text>
            <Text style={styles.subHeader}>Podcasts</Text>
            <Text>Placeholder for clickable podcast icons</Text>

            <Text></Text><Text></Text>
            <Text style={styles.subHeader}>Organizations</Text>
            <Text>Placeholder for clickable organization icons</Text>
        </SafeAreaView>
    );
}

export default ActionTemplate