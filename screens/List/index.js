import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native'

import { Feather as Icon } from '@expo/vector-icons'

import { connect } from 'react-redux'

function List() {
    return (
        <View style={styles.container}>
            <Text>Lists!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default List
