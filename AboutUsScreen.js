import * as React from 'react';
import { Linking } from 'react-native';
import styles from './styles'

const AboutUsScreen = () => {
    return (
        <View style={styles.features}>
            <Text>Politics are complicated. Our Voice LLC is a mobile app designed by
                Gen Z for GenZ to give them all the tools they need to take action on
                the social and political issues they care about.
            </Text>

            <Text>CEO</Text>
            <Text onPress={() => Linking.openURL('https://google.com')} style={{color: 'blue'}}>
                Emily Pattison
            </Text>
            <Text>Current Wellesley College Senior double-majoring in Economics and 
                MAS, former intern at ACLU of NH and in consulting.
            </Text>

            <Text>COO</Text>
            <Text onPress={() => Linking.openURL('https://google.com')} style={{color: 'blue'}}>
                Anandhita Jha
            </Text>
            <Text>Current Northeastern student with past experience in marketing, consulting,
                and front-end web development.
            </Text>

            <Text>Founded: 2020</Text>

            <Text>Mission</Text>
            <Text>Our Voice aims to strengthen our democracy by increasing civic participation
                and engagement around Gen Z.
            </Text>

            <Text>Vision</Text>
            <Text>We imagine a political system where citizen and representatives have direct
                lines of communication, representatives are able to more accurately understand
                the views of their constitutents, and people are more easily able to organize
                towards the issues they care about. We believe in providing accessibility so 
                anybody can become an everyday activist.
            </Text>

            <Text>Accelerators</Text>
            <Text>Member of Babson College's Butler Fast Cohort 2020-2021 and Project W's 
                Project Pod Program, Summer 2020
            </Text>

            <Text>Contact Us</Text>
            <Text>Reach us at ourvoicemobileapp@gmail.com or epattiso@wellesley.edu to get 
                involved, hear more, partner, or offer opportunities for us to feature.
            </Text>

        </View>
    );
}

export default AboutUsScreen