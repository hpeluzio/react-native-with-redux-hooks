import styled from 'styled-components/native'

import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native'

export const Container = styled.TouchableOpacity`
    min-height: 20px;
    width: 300px;
    flex-direction: row;
    padding: 15px 15px;
    border: 1px solid #e5e5e5;
    margin: 10px 10px 0;
    border-radius: 10px;
    align-items: center;
`

export const Circle = styled.View`
    height: 20px;
    width: 20px;
    margin-right: 10px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    background-color: #3cb24a;
    box-shadow: 2px 2px 2px #333;
    overflow: hidden;
`

export const Content = styled.View`
    flex: 1;
`

export const Title = styled.Text`
    font-size: 18px;
    /* font-family: Arial; */
    color: red;
`

export const Description = styled.Text`
    margin-top: 3px;
    font-size: 18px;
    /* font-family: Arial; */
    color: black;
`
