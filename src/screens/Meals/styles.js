import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
} from 'react-native'
import styled from 'styled-components'

export const Container = styled.View`
    flex: 1;
    background-color: grey;
    align-items: center;
    /* justify-content: center; */
    padding-top: 10%;
    width: 100%;
    /* height: 100%; */
`
export const List = styled(FlatList)`
    flex: 1;
    /* flex-grow: 1; */
    background: blue;
    width: 100%;
    height: 50%;
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

export const FooterContent = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    /* min-height: 20px; */
    height: 80px;
    /* padding-bottom: 1%; */
`
export const Orientation = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    height: 60px;
    padding: 10px;
    /* background: white; */
`

export const OrientationIcon = styled.Image`
    height: 30px;
    width: 30px;
`

export const ShoppingList = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    height: 60px;
    padding: 10px;
    /* background: white; */
`

export const ShoppingListIcon = styled.Image`
    height: 30px;
    width: 30px;
`
