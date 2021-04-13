import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    ScrollView,
    Button,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Feather as Icon } from '@expo/vector-icons'

import { Container, TextStyled } from './styles.js'

function AccordionItem({ alimento }) {
    return (
        <Container>
            <Text>{alimento}</Text>
        </Container>
    )
}

export default AccordionItem
