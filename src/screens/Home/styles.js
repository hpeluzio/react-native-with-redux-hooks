import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native'
import styled from 'styled-components'

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`

export const TextStyled = styled.Text`
    color: black;
`

export const Button = styled.TouchableOpacity`
    background: red;
    height: 50px;
    width: 100px;
    align-items: center;
    justify-content: center;
    /* color: white; */
`
