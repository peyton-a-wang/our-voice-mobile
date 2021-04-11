import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home'
import TakeActionNow from '../screens/TakeActionNow'
import Websites from '../screens/Websites'
import AboutUs from '../screens/AboutUs'
import ContactUs from '../screens/ContactUs'
import ActionTemplate from '../screens/ActionTemplate'

const HomeStack = createStackNavigator();

const HomeTab = () => {
    return (
        <Tab.Screen
            name="Home"
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }
            }>
            {() => (
                <HomeStack.Navigator>
                    <HomeStack.Screen
                        name="Home"
                        component={Home}
                        options={{ headerTitle: props => <LogoTitle {...props} /> }}
                    />
                    <HomeStack.Screen name="Take Action Now" component={TakeActionNow} />
                    <HomeStack.Screen name="Websites" component={Websites} />
                    <HomeStack.Screen name="About Us" component={AboutUs} />
                    <HomeStack.Screen name="Contact Us" component={ContactUs} />
                    <HomeStack.Screen name="Action Template" component={ActionTemplate} />
                </HomeStack.Navigator>
            )}
        </Tab.Screen >
    )
}
 
export default HomeTab