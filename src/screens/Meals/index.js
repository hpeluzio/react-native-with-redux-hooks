import React, { useEffect, useState, useCallback } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    RefreshControl,
    ScrollView,
} from 'react-native'
import MenuService from '~/services/MenuService'
import MealsService from '~/services/MealsService'
import { useSelector, useDispatch } from 'react-redux'
import { Feather as Icon } from '@expo/vector-icons'
import { Button, Container, TextStyled, List } from './styles.js'

import { setMenu } from '~/store/actions/menu/menuActions'

import Accordion from './Accordion'

// const wait = (timeout) => {
//     return new Promise((resolve) => setTimeout(resolve, timeout))
// }

function Meals({ navigation, route }) {
    const [isBusy, setIsBusy] = useState(true)
    const [loading, setLoading] = useState(false)
    const [refreshing, setRefreshing] = React.useState(false)
    const data = useSelector((state) => state.mealsplans.data)

    const [plan, setPlan] = useState({})
    const [meals, setMeals] = useState([])
    const [meal, setMeal] = useState({})

    const plansf = useSelector((s) => s.menu)
    const dispatch = useDispatch()
    const [token, setToken] = useState(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMzMywiaWF0IjoxNjE3NTQ1NjYwfQ.-2g_Pv3DcxBUVIir2NB0NwSYMbzLX0dn44MwT6JrqCI'
    )

    const onRefresh = useCallback(async () => {
        setRefreshing(true)
        console.log('Refreshing')
        // await setTimeout(() => {
        //     console.log('Hello')
        //     setRefreshing(false)
        // }, 2000)
        loadMeals(plan).then(() => {
            setRefreshing(false)
            console.log('setRefreshing(false)')
        })
        // wait(500).then(() => setRefreshing(false))
    }, [])

    useEffect(() => {
        // console.log('route.params.item: ', route.params.item)
        let _item = route.params.item
        if (_item) setPlan(_item)
        loadMeals(_item)

        // console.log('Object.keys(plan).length:  ', Object.keys(plan).length)

        // console.log('plan: ', plan)
        // console.log('data.plans[0]: ', data.plans[0])
        // console.log('route.params: ', route.params.item)
    }, [])

    useEffect(() => {
        console.log('plan: ', plan)
    }, [plan])

    useEffect(() => {
        console.log('meals::::: ', meals)
    }, [meals])

    const mealSelected = useCallback(({ item }) => {
        setMeal(item)

        if (item.pa_refeicao_substituta) {
            setLoading(true)
            let arrSubstitute = []
            item.pa_refeicao_substituta.map((refeicao_substituta, index) => {
                // console.log(refeicao_substituta);
                if (
                    refeicao_substituta.pa_refeicao_substituta_alimentos.length
                ) {
                    arrSubstitute.push(
                        refeicao_substituta.pa_refeicao_substituta_alimentos
                    )
                }
            })

            setSubstituteMeals(arrSubstitute)
            setSubstituteMeal(item)
            setLoading(false)
        }
        setShow(false)
    }, [])

    const loadMeals = useCallback(
        async (_plan) => {
            if (!_plan || !_plan.id) {
                return
            }

            // console.log('loadMeals...')
            // console.log('_plan...', _plan)

            setIsBusy(true)
            setLoading(true)
            try {
                let _response = null

                if (_plan.pae) {
                    _response = await MealsService.getPae({
                        token,
                        id: _plan.id,
                        profissional_id: 1,
                    })
                } else {
                    _response = await MealsService.getPlan({
                        token,
                        id: _plan.id,
                    })
                    // console.log('_response.status...', _response.status)
                }

                if (_response.status === 200) {
                    const { plan: planData } = _response.data

                    let _meals =
                        planData.plano_alimentar_refeicaos ||
                        planData.pae_refeicaos
                    if (planData.plano_alimentar_refeicaos) {
                        _meals = _meals.sort((mealA, mealB) => {
                            if (
                                mealA.plano_alimentar_refeicao_order &&
                                mealA.plano_alimentar_refeicao_order.posicao &&
                                mealB.plano_alimentar_refeicao_order &&
                                mealB.plano_alimentar_refeicao_order.posicao
                            ) {
                                return (
                                    mealA.plano_alimentar_refeicao_order
                                        .posicao -
                                    mealB.plano_alimentar_refeicao_order.posicao
                                )
                            }
                        })
                    }

                    if (planData.pae_refeicaos) {
                        _meals = _meals.sort((mealA, mealB) => {
                            if (
                                mealA.pae_refeicao_order &&
                                mealA.pae_refeicao_order.posicao &&
                                mealB.pae_refeicao_order &&
                                mealB.pae_refeicao_order.posicao
                            ) {
                                return (
                                    mealA.pae_refeicao_order.posicao -
                                    mealB.pae_refeicao_order.posicao
                                )
                            }
                        })
                    }

                    setMeals(_meals)
                    if (_meals && _meals.length) {
                        mealSelected({ item: _meals[0] })
                    }
                }
            } catch (error) {
            } finally {
                setIsBusy(false)
                setLoading(false)
            }
        },
        [mealSelected, token /*, user*/]
    )

    function showData() {
        // console.log('showData')
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
                <ScrollView
                    style={{ width: '100%' }}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    {/* <Text>Meals</Text> */}
                    {/* {data.plans[0].plano_alimentar_refeicaos.map((par) => { */}
                    {/* <List
                    data={meals}
                    keyExtractor={(item, index) => String(index)}
                    onRefresh={loadMeals}
                    refreshing={isBusy}
                    renderItem={({ item, index }) => <Accordion meal={item} />}
                /> */}

                    {meals.map((meal) => {
                        return <Accordion meal={meal} />
                    })}

                    {/* <Button onPress={showData} /> */}
                    {/* {isBusy && <Text>Loading</Text>} */}
                </ScrollView>
            </Container>
        )
}

export default Meals
