import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    SafeAreaView,
    Button,
    TouchableOpacity,
} from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'

import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { enableScreens } from 'react-native-screens'
enableScreens()
const Stack = createNativeStackNavigator()

import TestingServices from './TestingServices'
import OtherTesting from './OtherTesting'

function ProductForm({ navigation, route }) {
    return (
        <Stack.Navigator
            initialRouteName="ProductFormNav"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="Settings Navigation"
                component={ProductFormNav}
            />
            <Stack.Screen name="TestingServices" component={TestingServices} />
            <Stack.Screen name="OtherTesting" component={OtherTesting} />
            {/* <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings" component={Settings} /> */}
        </Stack.Navigator>
    )
}

function ProductFormNav({ navigation }) {
    return (
        <SafeAreaView
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text>Product Form Screen</Text>
            <Button
                title="Go to TestingServices"
                onPress={() => navigation.navigate('TestingServices')}
            />
            <Button
                title="Go to OtherTesting"
                onPress={() => navigation.navigate('OtherTesting')}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        marginTop: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default ProductForm
