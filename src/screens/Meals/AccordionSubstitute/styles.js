import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native'
import styled from 'styled-components'

export const Container = styled.View`
    flex: 1;
    /* align-items: center; */
    justify-content: center;
    /* width: 100%;
    height: 100%; */
    padding-left: 3%;
    background: blue;
    /* margin-bottom: 1%;
    margin-left: 10px; */
`

export const AccordionTitle = styled.TouchableOpacity`
    background: blue;
    flex: 1;
    flex-direction: row;
    width: 100%;
    /* height: 50px; */
    align-items: center;
    justify-content: center;
    /* border-bottom-width: 1px;
    border-left-width: 1px; */
    /* padding-left: 8%; */
`
export const AccordionIcon = styled.Text`
    margin-left: auto;
    padding-right: 5%;
    padding-left: 5%;
    background-color: purple;
    font-size: 30px;
`

export const AccordionContent = styled.View`
    flex: 1;
    background: #4682b4;
    align-items: flex-start;
    justify-content: center;
    /* height: auto; */
    width: 100%;
    /* border-bottom-width: 1px;
    border-left-width: 1px; */
`
