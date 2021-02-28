import Settings from '../screens/Settings'

const SettingsStack = createStackNavigator();

const SettingsTab = () => {
    return (
        <Tab.Screen
            name="Settings"
            options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="cog" color={color} size={size} />
                ),
            }}>
            {() => (
                <SettingsStack.Navigator>
                    <SettingsStack.Screen name="Settings" component={Settings} />
                </SettingsStack.Navigator>
            )}
        </Tab.Screen>
    )
}

export default SettingsTab