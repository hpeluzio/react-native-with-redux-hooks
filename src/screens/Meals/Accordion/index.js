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
    AccordionOption,
    Container,
    TextStyled,
    OptionButton,
} from './styles.js'
import AccordionItem from '../AccordionItem'

function Accordion({ meal }) {
    // const plans = useSelector((state) => state.mealsplans.data)

    const [toggleAccordion, setToggleAccordion] = useState(false)
    const [isPae, setIsPae] = useState(false)
    const [optionsMeal, setOptionsMeal] = useState([])
    const [selectedOptionMeal, setSelectedOptionMeal] = useState({})

    useEffect(() => {
        console.log('meal: ', meal)
        if (meal.plano_alimentar_refeicao_alimentos) setIsPae(false)
        if (meal.pae_refeicao_alimentos) setIsPae(true)
        setOptionsMealFunction()
        setSelectedOptionMeal(meal)
    }, [])

    useEffect(() => {
        // console.log('optionsMeal: ', optionsMeal)
        // console.log('selectedOptionMeal: ', selectedOptionMeal)
    }, [optionsMeal, selectedOptionMeal])

    function setOptionsMealFunction() {
        setOptionsMeal([meal, ...meal.pa_refeicao_substituta])
    }

    function updateSelectedOptionMeal(optionMeal) {
        if (isPae) return

        console.log('optionMeal:::', optionMeal)
        setSelectedOptionMeal(optionMeal)
    }

    return (
        <>
            <Container>
                <AccordionTitle
                    onPress={() => setToggleAccordion(!toggleAccordion)}
                >
                    <Text style={{ color: 'black' }}>{meal.nome}</Text>
                    {!toggleAccordion && (
                        <AccordionIcon style={{ color: 'black' }}>
                            +
                        </AccordionIcon>
                    )}
                    {toggleAccordion && (
                        <AccordionIcon style={{ color: 'black' }}>
                            -
                        </AccordionIcon>
                    )}
                </AccordionTitle>
            </Container>
            {!isPae && toggleAccordion && optionsMeal.length > 1 && (
                <AccordionOption>
                    {optionsMeal.map((optionMeal, index) => {
                        return (
                            <OptionButton
                                key={optionMeal.id}
                                onPress={() => {
                                    updateSelectedOptionMeal(optionMeal)
                                }}
                            >
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
            )}

            {toggleAccordion && (
                <AccordionContent>
                    {(
                        selectedOptionMeal.plano_alimentar_refeicao_alimentos ||
                        selectedOptionMeal.pa_refeicao_substituta_alimentos
                    ).map((alimento) => {
                        // console.log('alimento: ', alimento)
                        return (
                            <AccordionItem
                                key={alimento.id}
                                alimento={alimento.nome}
                            />
                        )
                    })}
                </AccordionContent>
            )}
        </>
    )
}

export default Accordion
