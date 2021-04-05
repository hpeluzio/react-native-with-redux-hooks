import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
} from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'

function ProductForm({ navigation, route }) {
    return (
        <View style={styles.container}>
            <Text>Add!</Text>
        </View>
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
