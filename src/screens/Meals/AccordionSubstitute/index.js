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
    Container,
} from './styles.js'
import AccordionItem from '../AccordionItem'

function AccordionSubstitute({ alimento }) {
    // const plans = useSelector((state) => state.mealsplans.data)

    const [toggleAccordion, setToggleAccordion] = useState(false)

    // useEffect(() => {
    //     console.log('alimento: ', alimento)
    // }, [])

    return (
        <>
            <Container>
                <AccordionTitle
                    onPress={() => setToggleAccordion(!toggleAccordion)}
                >
                    <Text style={{ color: 'black' }}>{alimento.nome}</Text>
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

            {toggleAccordion &&
                (
                    alimento.plano_alimentar_alimento_equivalentes ||
                    alimento.pa_refeicao_substituta_alimento_equivalentes
                ).map((subEach) => {
                    return (
                        <AccordionContent key={subEach.id}>
                            <Text>{subEach.nome_alimento}</Text>
                        </AccordionContent>
                    )
                })}

            {toggleAccordion &&
                (
                    alimento.plano_alimentar_alimento_equivalentes ||
                    alimento.pa_refeicao_substituta_alimento_equivalentes
                ).length == 0 && (
                    <AccordionContent>
                        <Text>Não há alimentos substitutos para esse.</Text>
                    </AccordionContent>
                )}
        </>
    )
}

export default AccordionSubstitute
