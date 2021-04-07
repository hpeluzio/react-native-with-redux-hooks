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
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-bottom: 1%;
`

export const TextStyled = styled.Text`
    color: black;
`

export const AccordionTitle = styled.TouchableOpacity`
    background: white;
    flex: 1;
    flex-direction: row;
    width: 98%;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-left-width: 1px;
    padding-left: 8%;
`
export const AccordionIcon = styled.Text`
    margin-left: auto;
    padding-right: 8%;
    background-color: red;
    font-size: 30px;
`

export const AccordionContent = styled.View`
    flex: 1;
    background: green;
    align-items: center;
    justify-content: center;
    width: 98%;
    /* height: 500px; */
    /* flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-left-width: 1px; */
`

export const AccordionOption = styled.View`
    flex: 1;
    flex-direction: row;
    background: tomato;
    align-items: center;
    justify-content: space-around;
    width: 98%;
    /* height: 500px; */
    /* flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-left-width: 1px; */
`

export const AccordionItem = styled.Text`
    background: blue;
    align-items: center;
    justify-content: center;
    margin-bottom: 1%;
    /* width: 98%; */
    /* height: 30px; */
    /* flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-left-width: 1px; */
`
export const OptionButton = styled.TouchableOpacity`
    background: purple;
    height: 30px;
    width: 100px;
    align-items: center;
    justify-content: center;
    margin: 5px;
    border-radius: 5px;
    /* margin-bottom: 10px; */
    /* color: white; */
`
