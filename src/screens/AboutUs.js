import * as React from 'react';
import { SafeAreaView, ScrollView, Text, Linking } from 'react-native';
import styles from '../../styles'

const AboutUs = () => {
    return (
        <SafeAreaView style={styles.features}>
            <ScrollView style={styles.body}>
                <Text>Politics are complicated. Our Voice LLC is a mobile app designed by
                    Gen Z for GenZ to give them all the tools they need to take action on
                    the social and political issues they care about.
                </Text>

                <Text onPress={() => Linking.openURL('https://www.linkedin.com/in/emily-pattison/')} style={styles.nameLink}>
                    Emily Pattison
                </Text>
                <Text style={styles.subHeader}>CEO</Text>
                <Text>Current Wellesley College Senior double-majoring in Economics and 
                    MAS, former intern at ACLU of NH and in consulting.
                </Text>

                <Text onPress={() => Linking.openURL('https://www.linkedin.com/in/anajha1/')} style={styles.nameLink}>
                    Anandhita Jha
                </Text>
                <Text style={styles.subHeader}>COO</Text>
                <Text>
                    Current Northeastern student with past experience in marketing, consulting,
                    and front-end web development.
                </Text>

                <Text>Founded: 2020</Text>

                <Text style={styles.header}>Mission</Text>
                <Text>
                    Our Voice aims to strengthen our democracy by increasing civic participation
                    and engagement around Gen Z.
                </Text>

                <Text style={styles.header}>Vision</Text>
                <Text>
                    We imagine a political system where citizen and representatives have direct
                    lines of communication, representatives are able to more accurately understand
                    the SafeAreaViews of their constitutents, and people are more easily able to organize
                    towards the issues they care about. We believe in providing accessibility so 
                    anybody can become an everyday activist.
                </Text>

                <Text style={styles.header}>Accelerators</Text>
                <Text>
                    Member of Babson College's Butler Fast Cohort 2020-2021 and Project W's 
                    Project Pod Program, Summer 2020
                </Text>

                <Text style={styles.header}>Contact Us</Text>
                <Text>
                    Reach us at ourvoicemobileapp@gmail.com or epattiso@wellesley.edu to get 
                    involved, hear more, partner, or offer opportunities for us to feature.
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default AboutUs