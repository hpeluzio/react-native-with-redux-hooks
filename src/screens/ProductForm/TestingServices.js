import React, { useState, useRef, useEffect, useCallback } from 'react'
import {
    TouchableOpacity,
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
    SafeAreaView,
} from 'react-native'

import MealsService from '~/services/MealsService'

function TestingServices() {
    useEffect(() => {
        loadMenu()
    }, [])

    const loadMenu = useCallback(async () => {
        try {
            let _response = null

            _response = await MealsService.getPlan({
                token:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMzMywiaWF0IjoxNjE3NTQ1NjYwfQ.-2g_Pv3DcxBUVIir2NB0NwSYMbzLX0dn44MwT6JrqCI',
                id: 1090,
            })

            console.log(_response.data)

            if (_response.status === 200) {
                const { plan: planData } = _response.data

                //   let _meals =
                //     planData.plano_alimentar_refeicaos || planData.pae_refeicaos;
                //   if (planData.plano_alimentar_refeicaos) {
                //     _meals = _meals.sort((mealA, mealB) => {
                //       if (
                //         mealA.plano_alimentar_refeicao_order &&
                //         mealA.plano_alimentar_refeicao_order.posicao &&
                //         mealB.plano_alimentar_refeicao_order &&
                //         mealB.plano_alimentar_refeicao_order.posicao
                //       ) {
                //         return (
                //           mealA.plano_alimentar_refeicao_order.posicao -
                //           mealB.plano_alimentar_refeicao_order.posicao
                //         );
                //       }
                //     });
                //   }

                //   if (planData.pae_refeicaos) {
                //     _meals = _meals.sort((mealA, mealB) => {
                //       if (
                //         mealA.pae_refeicao_order &&
                //         mealA.pae_refeicao_order.posicao &&
                //         mealB.pae_refeicao_order &&
                //         mealB.pae_refeicao_order.posicao
                //       ) {
                //         return (
                //           mealA.pae_refeicao_order.posicao -
                //           mealB.pae_refeicao_order.posicao
                //         );
                //       }
                //     });
                //   }

                //   setMeals(_meals);
                //   if (_meals && _meals.length) {
                //     mealSelected({item: _meals[0]});
                //   }
            }
        } catch (error) {
        } finally {
            console.log('FINALLY')
            // setIsBusy(false)
            // setLoading(false)
        }
    })

    return (
        <SafeAreaView style={styles.container}>
            <Text>TestingServices</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
    },
    inputContainer: {
        flex: 1,
        marginTop: 30,
        // width: '95%',
        width: '100%',
        padding: 20,
        // borderTopLeftRadius: 10,
        // borderTopRightRadius: 10,
        alignItems: 'stretch',
        backgroundColor: '#fff',
    },
    input: {
        marginTop: 20,
        height: 60,
        width: 160,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 18,
        alignItems: 'stretch',
        borderWidth: 0.5,
    },
    button: {
        marginTop: 10,
        height: 60,
        backgroundColor: 'blue',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 18,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        shadowOpacity: 20,
        shadowColor: '#ccc',
        flexDirection: 'row',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
})

export default TestingServices
