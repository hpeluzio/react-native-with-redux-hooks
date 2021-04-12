import React, { useEffect, useState, useCallback } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import MenuService from '~/services/MenuService'
import { useSelector, useDispatch } from 'react-redux'
import { Feather as Icon } from '@expo/vector-icons'
import { Button, Container, TextStyled } from './styles.js'

import { setMenu } from '~/store/actions/menu/menuActions'

import Accordion from './Accordion'

function Meals({ navigation, route }) {
    const [isBusy, setIsBusy] = useState(false)
    const data = useSelector((state) => state.mealsplans.data)
    const [plan, setPlan] = useState({})
    const plansf = useSelector((s) => s.menu)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('route.params.item: ', route.params.item)
        if (route.params.item) setPlan(route.params.item)
        console.log('Object.keys(plan).length:  ', Object.keys(plan).length)

        // console.log('plan: ', plan)
        // console.log('data.plans[0]: ', data.plans[0])
        // console.log('route.params: ', route.params.item)
    }, [])

    useEffect(() => {
        console.log('plan: ', plan)
    }, [plan])

    function showData() {
        console.log('showData')
        // console.log('showData plansf: ', plansf)
    }

    function dataTreatment(meal, substituteMeals) {
        // Concat
        // plans -> plano_alimentar_refeicaos[]
        // plans -> plano_alimentar_refeicaos[1].pa_refeicao_substituta: []
        return [meal, ...substituteMeals]
    }

    if (Object.keys(plan).length === 0)
        return (
            <View>
                <Text>Sem PLAN</Text>
            </View>
        )
    else
        return (
            <Container>
                <ScrollView style={{ width: '100%' }}>
                    {/* <Text>Meals</Text> */}
                    {/* {data.plans[0].plano_alimentar_refeicaos.map((par) => { */}

                    {plan.plano_alimentar_refeicaos.map((par) => {
                        return (
                            <Accordion
                                key={par.id}
                                onPress={showData}
                                title={`${par.nome} - ${par.horario}`}
                                dataMealsTreated={dataTreatment(
                                    par,
                                    par.pa_refeicao_substituta
                                )}
                                obs_comment={par.obs}
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
                    <Button onPress={showData} />
                    {isBusy && <Text>Loading</Text>}
                </ScrollView>
            </Container>
        )
}

export default Meals
