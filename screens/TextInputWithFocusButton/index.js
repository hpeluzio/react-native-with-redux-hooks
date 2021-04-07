import React, { useRef } from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native'

function TextInputWithFocusButton() {
    const inputEl = useRef(null)

    const onButtonClick = () => {
        // `current` aponta para o evento de `focus` gerado pelo campo de texto
        console.log('onButtonClick')
        inputEl.current.focus()
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} ref={inputEl}></TextInput>
            <TextInput style={styles.input}></TextInput>
            {/* <Text>TextInputWithFocusButton!</Text> */}
            <TouchableOpacity style={styles.button} onPress={onButtonClick}>
                <Text>Focus no input!</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
    },
    inputContainer: {
        flex: 1,
        marginTop: 30,
        // width: '95%',
        width: '100%',
        padding: 20,
        // borderTopLeftRadius: 10,
        // borderTopRightRadius: 10,
        alignItems: 'stretch',
        backgroundColor: '#fff',
    },
    input: {
        marginTop: 20,
        height: 60,
        width: 160,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 18,
        alignItems: 'stretch',
        borderWidth: 0.5,
    },
    button: {
        marginTop: 10,
        height: 60,
        backgroundColor: 'blue',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 18,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        shadowOpacity: 20,
        shadowColor: '#ccc',
        flexDirection: 'row',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
})

export default TextInputWithFocusButton
