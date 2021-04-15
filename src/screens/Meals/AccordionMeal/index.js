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

import AccordionSubstitute from '../AccordionSubstitute'

function AccordionMeal({ meal }) {
    //TOGGLE DO ACCORDION
    const [toggleAccordion, setToggleAccordion] = useState(false)

    //VERIFICANDO SE A REFEICAO EH POR ALIMENTO OU EQUIVALENTE
    const [isPae, setIsPae] = useState(
        meal.pae_refeicao_alimentos ? true : false
    )

    //OPCOES DE REFEICAO DO USUARIO
    const [optionsMeal, setOptionsMeal] = useState([])

    //REFEICAO SELECIONADA DO USUARIO
    //A PRIMEIRA REFEICAO SERA SEMPRE A PRIMEIRA - useState(meal)
    const [selectedOptionMeal, setSelectedOptionMeal] = useState(meal)

    useEffect(() => {
        //SETANDO A OPCAO ESCOLHIDA PELO USUARIO
        //CASO O PLANO SEJA POR ALIMENTO
        if (!isPae) {
            setOptionsMeal([meal, ...meal.pa_refeicao_substituta])
        }
    }, [])

    //RENDER
    //REFEICAO PLANO ALIMENTO EQUIVALENTE
    if (isPae)
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
                {/* <View>
                    {isPae ? <Text>Pae: true </Text> : <Text>Pae: false</Text>}
                </View> */}

                {toggleAccordion && (
                    <AccordionContent>
                        {meal.pae_refeicao_alimentos.map((alimento) => {
                            return (
                                <AccordionSubstitute
                                    key={alimento.id}
                                    alimento={alimento}
                                />
                            )
                        })}
                    </AccordionContent>
                )}
            </>
        )
    // REFEICAO POR ALIMENTO
    else
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

                {/* OPCOES DE ALIMENTO DO USUARIO */}
                {!isPae && toggleAccordion && optionsMeal.length > 1 && (
                    <AccordionOption>
                        {optionsMeal.map((optionMeal, index) => {
                            return (
                                <OptionButton
                                    key={optionMeal.id}
                                    onPress={() => {
                                        //SETANDO A OPCAO SELECIONADA DO USUARIO
                                        setSelectedOptionMeal(optionMeal)
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
                            return (
                                <AccordionSubstitute
                                    key={alimento.id}
                                    alimento={alimento}
                                />
                            )
                        })}
                    </AccordionContent>
                )}
            </>
        )
}

export default AccordionMeal
