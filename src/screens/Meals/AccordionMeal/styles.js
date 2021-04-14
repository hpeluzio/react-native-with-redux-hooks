import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
} from 'react-native'
import styled from 'styled-components'

export const Container = styled.SafeAreaView`
    /* flex: 1; */
    align-items: center;
    justify-content: center;
    width: 100%;
    /* min-height: 20px; */
    height: 60px;
    padding-bottom: 1%;
    background: #556b2f;
`

export const TextStyled = styled.Text`
    color: black;
`

export const AccordionTitle = styled.TouchableOpacity`
    background: white;
    flex: 1;
    flex-direction: row;
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-left-width: 1px;
    padding-left: 8%;
`
export const AccordionIcon = styled.Text`
    margin-left: auto;
    padding-right: 5%;
    padding-left: 5%;
    background-color: red;
    font-size: 30px;
`

export const AccordionContent = styled.View`
    flex: 1;
    background: green;
    align-items: flex-start;
    justify-content: center;
    /* height: auto; */
    /* width: 100%; */
    /* border-bottom-width: 1px; */
    /* border-left-width: 1px; */
`

export const AccordionOption = styled.View`
    flex: 1;
    flex-direction: row;
    background: tomato;
    align-items: center;
    justify-content: space-around;
    height: 10%;
    width: 100%;
    border-bottom-width: 1px;
    border-left-width: 1px;
`

export const OptionButton = styled.TouchableOpacity`
    flex: 1;
    background: purple;
    height: 30px;
    width: 80px;
    align-items: center;
    justify-content: center;
    margin: 5px;
    border-radius: 5px;
    /* margin-bottom: 10px; */
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
