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

    //Refresh Control da screen meals
    const onRefresh = useCallback(() => {
        setLoading(true)
        loadMeals(plan).then(() => {
            setLoading(false)
        })
    }, [loading, meals])

    useEffect(() => {
        //Pegando o _item enviado por parametro da screen meals
        let _item = route.params.item

        if (_item) setPlan(_item)

        //Carrega as meals da API
        loadMeals(_item)
    }, [])

    //Chamada da API
    const loadMeals = useCallback(
        async (_plan) => {
            if (!_plan || !_plan.id) {
                return
            }

            setLoading(true)

            try {
                let _response = null

                //Verifcando se o _item recebido é plano equivalente ou por alimento
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
                }

                //Checa a resposta
                if (_response.status === 200) {
                    const { plan: planData } = _response.data

                    //Ordenando as refeicoes por alimento
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

                    //Ordenando as refeicoes por equivalentes
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
                }
            } catch (error) {}
            setLoading(false)
        },
        [plan]
    )

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
                    {meals.length == 0 && (
                        <View>
                            <Text>Não há refeições</Text>
                        </View>
                    )}

                    {meals.length > 0 &&
                        meals.map((meal) => {
                            return <AccordionMeal key={meal.id} meal={meal} />
                        })}

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
