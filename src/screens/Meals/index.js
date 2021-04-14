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
import {
    Button,
    Container,
    TextStyled,
    List,
    FooterContent,
    Orientation,
    OrientationIcon,
    ShoppingList,
    ShoppingListIcon,
} from './styles.js'

import { setMenu } from '~/store/actions/menu/menuActions'

import AccordionMeal from './AccordionMeal'

function Meals({ navigation, route }) {
    const [loading, setLoading] = useState(false)
    const data = useSelector((state) => state.mealsplans.data)

    const [plan, setPlan] = useState({})
    const [meals, setMeals] = useState([])
    const [meal, setMeal] = useState({})

    const plansf = useSelector((s) => s.menu)
    const dispatch = useDispatch()
    const [token, setToken] = useState(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMzMywiaWF0IjoxNjE3NTQ1NjYwfQ.-2g_Pv3DcxBUVIir2NB0NwSYMbzLX0dn44MwT6JrqCI'
    )

    const onRefresh = useCallback(() => {
        console.log('Loading meals')
        setLoading(true)
        loadMeals(plan).then(() => {
            console.log('Meals loaded')
            setLoading(false)
        })
    }, [loading, meals])

    useEffect(() => {
        console.log('route.params.item: ', route.params.item)
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

    // async function wait(ms) {
    //     return new Promise((resolve) => {
    //         setTimeout(resolve, ms)
    //     })
    // }

    const loadMeals = useCallback(
        async (_plan) => {
            if (!_plan || !_plan.id) {
                return
            }

            // console.log('loadMeals...')
            // console.log('_plan...', _plan)

            setLoading(true)

            try {
                let _response = null

                //Promise teste para testar o refresh control - loading
                // await wait(3000)

                if (_plan.pae) {
                    console.log('!!!!!!!!!!!!!!!! _plan.pae')
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

                    // if (_meals && _meals.length) {
                    //     mealSelected({ item: _meals[0] })
                    // }
                }
            } catch (error) {}
            setLoading(false)
        },
        [
            /*mealSelected, token, user*/
            plan,
        ]
    )

    function showData() {
        // console.log('showData')
        // console.log('showData plansf: ', plansf)
    }

    function dataTreatment(meal, substituteMeals) {
        // Concat
        // plans -> plano_alimentar_refeicaos[]
        // plans -> plano_alimentar_refeicaos[1].pa_refeicao_substituta: []
        // console.log('[meal, ...substituteMeals] ', [meal, ...substituteMeals])
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
                            refreshing={loading}
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

                    {meals.length == 0 && (
                        <View>
                            <Text>Não há refeições</Text>
                        </View>
                    )}

                    {meals.length > 0 &&
                        meals.map((meal) => {
                            return <AccordionMeal key={meal.id} meal={meal} />
                        })}

                    {/* <Button onPress={showData} /> */}
                    {loading && <Text>Loading</Text>}

                    <FooterContent>
                        <Orientation>
                            <OrientationIcon
                                source={require('~/images/ic_orientation.png')}
                            />
                            <Text>Lista de Compras</Text>
                        </Orientation>
                        <ShoppingList>
                            <ShoppingListIcon
                                source={require('~/images/ic_orientation.png')}
                            />
                            <Text>Orientações</Text>
                        </ShoppingList>
                    </FooterContent>
                </ScrollView>
            </Container>
        )
}

export default Meals
