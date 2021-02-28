import Profile from '../screens/Profile'

const ProfileStack = createStackNavigator();

const ProfileTab = () => {
    return (
        <Tab.Screen
            name="Profile"
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
            }}>
            {() => (
                <ProfileStack.Navigator>
                    <ProfileStack.Screen name="Profile" component={Profile} />
                </ProfileStack.Navigator>
            )}
        </Tab.Screen>
    )
}

export default ProfileTab