import React, { useState, useRef, useEffect } from 'react'
import {
    TouchableOpacity,
    Button,
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

    const [count, setCount] = useState(0)
    const prevCount = usePrevious(count)

    function usePrevious(value) {
        const ref = useRef()
        useEffect(() => {
            ref.current = value
        })
        return ref.current
    }

    return (
        <View style={styles.container}>
            <Text style={{ padding: 10, fontSize: 18, fontWeight: 'bold' }}>
                Anterior: {prevCount}, Atual: {count}
            </Text>
            <View style={{ padding: 10 }}>
                <Button
                    title={'INCREMENTAR'}
                    onPress={() => setCount(count + 1)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
