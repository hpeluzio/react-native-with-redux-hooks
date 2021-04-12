import React, { useEffect, useState, useCallback } from 'react'
import moment from 'moment'

import { Container, Description, Content, Title, Circle } from './styles'

export default function ListItemWithIcon({
    title,
    Icon,
    type = 'default',
    onPress,
    days,
    data,
    typeDate = 'Liberado',
}) {
    let formattedDays = []
    const [description, setDescription] = useState()
    useEffect(() => {
        setDescription(formatDescription(data))
    }, [data, formatDescription])
    const formatDescription = useCallback(
        (date) => {
            const newDate = type !== 'default' ? date * 1000 : date
            return `${typeDate} em: ${moment(newDate).format(
                'D [de] MMMM [de] YYYY'
            )}`
        },
        [type, typeDate]
    )

    if (days && days.length) {
        delete days.id_plano_alimentar
        delete days.id

        if (days[0].dom) {
            formattedDays.push('dom')
        }
        if (days[0].seg) {
            formattedDays.push('seg')
        }
        if (days[0].ter) {
            formattedDays.push('ter')
        }
        if (days[0].qua) {
            formattedDays.push('qua')
        }
        if (days[0].qui) {
            formattedDays.push('qui')
        }
        if (days[0].sex) {
            formattedDays.push('sex')
        }
        if (days[0].sab) {
            formattedDays.push('sab')
        }
    }

    return (
        <Container onPress={onPress}>
            {/* <Circle>
                <Text>ICON</Text>
            </Circle> */}
            <Content>
                <Title>{title}</Title>
                {days && (
                    // eslint-disable-next-line prettier/prettier
                    <Description>{`Para os dias: ${formattedDays.join(
                        ', '
                    )}`}</Description>
                )}
                <Description>{description}</Description>
            </Content>
        </Container>
    )
}
