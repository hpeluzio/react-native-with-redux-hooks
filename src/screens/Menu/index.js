import React, { useEffect, useState, useCallback } from 'react'
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

import MenuService from '~/services/MenuService'
import ListEmptyComponent from './ListEmptyComponent'
import ListItemWithIcon from './ListItemWithIcon'
import Meals from '~/screens/Meals'

import { Button, Container, List, TextStyled } from './styles.js'
import { setMenu } from '~/store/actions/menu/menuActions'
import { data as data_original_menu } from '~/store/data_original_menu'

import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { enableScreens } from 'react-native-screens'
enableScreens()
const Stack = createNativeStackNavigator()

function Menu({ navigation, route }) {
    return (
        <Stack.Navigator
            initialRouteName="Menu"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Menu Navigation" component={MenuScreen} />
            <Stack.Screen name="Meals" component={Meals} />
            {/* <Stack.Screen name="TestingServices" component={TestingServices} />
            <Stack.Screen name="OtherTesting" component={OtherTesting} /> */}
            {/* <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings" component={Settings} /> */}
        </Stack.Navigator>
    )
}

function MenuScreen({ navigation }) {
    const [isBusy, setIsBusy] = useState(false)
    const data = useSelector((state) => state.mealsplans.data)
    const plansf = useSelector((s) => s.menu)
    const dispatch = useDispatch()

    useEffect(() => {
        //Pegando todos os menus da api
        loadMenu()
        // console.log('plansf:', plansf)
    }, [])

    useEffect(() => {
        console.log('plansf::', plansf)
    }, [plansf])

    function showData() {
        console.log('showData')
        loadMenu()
        console.log('showData plansf: ', plansf)
        // console.log('data_original_menu: ', data_original_menu)
    }

    const loadMenu = useCallback(async () => {
        setIsBusy(true)

        try {
            const _response = await MenuService.get({
                token:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMzMywiaWF0IjoxNjE3NTQ1NjYwfQ.-2g_Pv3DcxBUVIir2NB0NwSYMbzLX0dn44MwT6JrqCI',
            })

            if (_response.status === 200) {
                // console.log('_response.status: ', _response.status)
                // console.log('_response.data: ', _response.data)
                const { plans: plansData, plans_equivalent } = _response.data

                dispatch(
                    // { type: 'SET_MENU', payload: _response.data }
                    setMenu({
                        plans: [
                            ...plansData,
                            ...plans_equivalent.map((v) => ({
                                ...v,
                                pae: true,
                            })),
                        ],
                    })
                )
                // setTimeout(() => {}, 3000)
            }
        } catch (error) {}

        setIsBusy(false)
    }, [dispatch])

    return (
        <Container>
            {/* <ScrollView style={{ width: '100%' }}> */}
            <Text>Menu</Text>
            {!isBusy && (
                <List
                    data={plansf.plans}
                    // keyExtractor={(item, index) => item.id}
                    keyExtractor={(item, index) => String(index)}
                    onRefresh={loadMenu}
                    refreshing={isBusy}
                    renderItem={({ item, index }) => (
                        <ListItemWithIcon
                            title={item.nome}
                            days={
                                item.plano_alimentar_refeicao_dias
                                    ? item.plano_alimentar_refeicao_dias
                                    : item.pae_refeicao_dias
                            }
                            data={item.data}
                            // Icon={MenuIcon}
                            onPress={() =>
                                navigation.navigate('Meals', { item })
                            }
                        />
                    )}
                    ListEmptyComponent={<ListEmptyComponent />}
                />
                // <List
                //     data={[1, 2, 3, 4, 5]}
                //     renderItem={() => {
                //         return <Text>Item</Text>
                //     }}
                // />
            )}
            <Button onPress={showData} />
            {isBusy && <Text>Loading</Text>}
            {/* </ScrollView> */}
        </Container>
    )
}

export default Menu
