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

function AccordionSubstitute({ alimento }) {
    //TOGGLE DO ACORDION
    const [toggleAccordion, setToggleAccordion] = useState(false)

    //RENDERIZACAO SEM CONDICIONAL
    //USANDO O MECANISMO DE 'OU' É FEITO A TRANSICAO
    //TANTO DE ALIMENTO DA REFEICAO POR ALIMENTO
    //QUANTO A REFEICAO POR EQUIVALENTES

    return (
        <>
            <Container>
                <AccordionTitle
                    onPress={() => setToggleAccordion(!toggleAccordion)}
                >
                    <Text style={{ color: 'blue', backgroundColor: 'yellow' }}>
                        {alimento.nome}
                    </Text>
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
                <Text>
                    {alimento.quantidade_medida || alimento.quantidade}{' '}
                    {alimento.medida_caseira}- [{alimento.gramas}]g
                </Text>
            </Container>

            {toggleAccordion &&
                (
                    alimento.plano_alimentar_alimento_equivalentes ||
                    alimento.pa_refeicao_substituta_alimento_equivalentes ||
                    alimento.pae_alimento_equivalentes
                ).map((subEach) => {
                    return (
                        <AccordionContent key={subEach.id}>
                            <Text>
                                {subEach.nome_alimento ||
                                    subEach.descricao_dos_alimentos}
                            </Text>
                            <Text>
                                {subEach.quantidade || subEach.unidade}{' '}
                                {subEach.medidas_caseiras ||
                                    subEach.medida_caseira_equivalente}{' '}
                                - [{subEach.gramas || subEach.gramas_unidade}]g
                            </Text>
                        </AccordionContent>
                    )
                })}

            {toggleAccordion &&
                (
                    alimento.plano_alimentar_alimento_equivalentes ||
                    alimento.pa_refeicao_substituta_alimento_equivalentes ||
                    alimento.pae_alimento_equivalentes
                ).length == 0 && (
                    <AccordionContent>
                        <Text>Não há alimentos substitutos para esse.</Text>
                    </AccordionContent>
                )}
        </>
    )
}

export default AccordionSubstitute
