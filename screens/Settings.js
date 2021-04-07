import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { enableScreens } from 'react-native-screens'
enableScreens()

import TextInputWithFocusButton from './TextInputWithFocusButton'
import AppUseRef from './AppUseRef'

const Stack = createNativeStackNavigator()

function SettingsNav({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text>Settings Screen</Text>
            <Button
                title="Go to TextInputWithFocusButton"
                onPress={() => navigation.navigate('TextInputWithFocusButton')}
            />
            <Button
                title="Go to AppUseRef"
                onPress={() => navigation.navigate('AppUseRef')}
            />
        </View>
    )
}

function Settings() {
    return (
        // <NavigationContainer>
        <Stack.Navigator initialRouteName="SettingsNav">
            <Stack.Screen name="Settings Navigation" component={SettingsNav} />
            <Stack.Screen name="AppUseRef" component={AppUseRef} />
            <Stack.Screen
                name="TextInputWithFocusButton"
                component={TextInputWithFocusButton}
            />
            {/* <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings" component={Settings} /> */}
        </Stack.Navigator>
        // </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Settings
