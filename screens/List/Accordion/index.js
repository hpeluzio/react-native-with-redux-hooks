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
import {
    AccordionTitle,
    AccordionIcon,
    AccordionContent,
    AccordionItem,
    AccordionOption,
    Container,
    TextStyled,
    OptionButton,
} from './styles.js'

function Accordion({ title, dataFoods, dataFoodsSubstitutes, dataMealsEach }) {
    const plans = useSelector((state) => state.mealsplans.data)

    const [toggleAccordion, setToggleAccordion] = useState(false)
    const [ddataFoods, setDataFoods] = useState(dataFoods)

    useEffect(() => {
        // setDataFoods(dataMealsEach.plano_alimentar_refeicao_alimentos)
    }, [])

    function showData() {
        // console.log('dataFoodsSubstitutes:', dataMealsEach)
        dataMealsEach.map((item) => console.log(item.nome))
    }

    function foodConcatenate() {
        return [...dataFood, ...[dataFoodsSubstitutes]]
    }

    return (
        <Container>
            <AccordionTitle
                onPress={() => setToggleAccordion(!toggleAccordion)}
            >
                <Text style={{ color: 'black' }}>{title}</Text>
                {!toggleAccordion && (
                    <AccordionIcon style={{ color: 'black' }}>+</AccordionIcon>
                )}
                {toggleAccordion && (
                    <AccordionIcon style={{ color: 'black' }}>-</AccordionIcon>
                )}
            </AccordionTitle>
            <AccordionOption>
                {toggleAccordion &&
                    dataMealsEach.length > 1 &&
                    dataMealsEach.map((foodSubstitute, index) => {
                        return (
                            <OptionButton onPress={showData}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        color: 'white',
                                    }}
                                >
                                    Opção {index + 1}
                                </Text>
                            </OptionButton>
                        )
                    })}
            </AccordionOption>
            <AccordionContent>
                {toggleAccordion &&
                    ddataFoods.map((alimento) => {
                        return (
                            <AccordionItem key={alimento.id}>
                                {alimento.nome}
                            </AccordionItem>
                        )
                    })}
            </AccordionContent>
        </Container>
    )
}

export default Accordion
