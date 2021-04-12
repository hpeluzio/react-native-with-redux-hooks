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

function Accordion({ title, dataMealsTreated }) {
    const plans = useSelector((state) => state.mealsplans.data)

    const [toggleAccordion, setToggleAccordion] = useState(false)
    const [dataMealsTreatedEach, setDataMealsTreatedEach] = useState()

    // Init dataMealsTreatedEach with the first
    // element of dataMealsTreated array
    useEffect(() => {
        setDataMealsTreatedEach(
            dataMealsTreated[0].plano_alimentar_refeicao_alimentos
        )
    }, [])

    function showDataConsole() {
        // console.log('dataFoodsSubstitutes:', dataMealsTreated)
        // dataMealsTreated.map((item) => console.log(item.nome))
        dataMealsTreated.map((item) => {
            if (item.plano_alimentar_refeicao_alimentos)
                item.plano_alimentar_refeicao_alimentos.map((alimento) => {
                    // console.log(alimento.nome)
                })
            if (item.pa_refeicao_substituta_alimentos)
                item.pa_refeicao_substituta_alimentos.map((alimento) => {
                    // console.log(alimento.nome)
                })
        })
    }

    function updateOptionMeal(foodSubstituteOption) {
        if (foodSubstituteOption.plano_alimentar_refeicao_alimentos)
            setDataMealsTreatedEach([
                ...foodSubstituteOption.plano_alimentar_refeicao_alimentos,
            ])

        if (foodSubstituteOption.pa_refeicao_substituta_alimentos)
            setDataMealsTreatedEach([
                ...foodSubstituteOption.pa_refeicao_substituta_alimentos,
            ])

        // console.log('foodSubstitute :', foodSubstituteOption.id)
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
                    dataMealsTreated.length > 1 &&
                    dataMealsTreated.map((foodSubstituteOption, index) => {
                        return (
                            <OptionButton
                                key={foodSubstituteOption.id}
                                onPress={() => {
                                    updateOptionMeal(foodSubstituteOption)
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
            <AccordionContent>
                {toggleAccordion &&
                    dataMealsTreatedEach.map((alimento) => {
                        // console.log('alimento: ', alimento)
                        return (
                            <AccordionItem key={alimento.id}>
                                <Text>{alimento.nome}</Text>
                            </AccordionItem>
                        )
                    })}
            </AccordionContent>
        </Container>
    )
}

export default Accordion
