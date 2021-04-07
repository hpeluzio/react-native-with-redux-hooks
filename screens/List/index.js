import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Feather as Icon } from '@expo/vector-icons'
import { Button, Container, TextStyled } from './styles.js'

import Accordion from './Accordion'

function List() {
    const data = useSelector((state) => state.mealsplans.data)

    function showData() {
        console.log('mealsplans data', plans)
        console.log('mealsplans data')
    }

    function dataTreatment(meal, substituteMeals) {
        // Concat
        // plans -> plano_alimentar_refeicaos[]
        // plans -> plano_alimentar_refeicaos[1].pa_refeicao_substituta: []

        return [meal, ...substituteMeals]
    }

    return (
        <Container>
            <ScrollView style={{ width: '100%' }}>
                {/* <Text>List</Text> */}
                {data.plans[0].plano_alimentar_refeicaos.map((par) => {
                    return (
                        <Accordion
                            key={par.id}
                            onPress={showData}
                            title={`${par.nome} - ${par.horario}`}
                            dataMealsEach={dataTreatment(
                                par,
                                par.pa_refeicao_substituta
                            )}
                            dataFoods={par.plano_alimentar_refeicao_alimentos}
                            dataFoodsSubstitutes={par.pa_refeicao_substituta}
                        >
                            {/* {par.plano_alimentar_refeicao_alimentos.map(
                                (alimento) => {
                                    return (
                                        <Text key={alimento.id}>
                                            {alimento.nome}
                                        </Text>
                                    )
                                }
                            )} */}
                        </Accordion>
                    )
                })}
            </ScrollView>
        </Container>
    )
}

export default List
