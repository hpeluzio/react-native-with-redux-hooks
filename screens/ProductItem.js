import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'

function ProductItem(props) {
    return (
        <View style={styles.container}>
            <Text>Product Item!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: '2%',
        marginLeft: '10%',
        marginRight: '10%',
        width: '95%',
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
    },
    buttonsContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',

        paddingBottom: 10,
        marginTop: 10,
    },
    editButton: {
        marginLeft: 10,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 5,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center',
    },
    deleteButton: {
        marginLeft: 10,
        height: 40,
        width: 40,
        backgroundColor: 'red',
        borderRadius: 5,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    textItem: {
        fontSize: 20,
    },
})

export default ProductItem
