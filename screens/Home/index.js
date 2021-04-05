import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
// import { connect } from 'react-redux'
import { Button, Container, TextStyled } from './styles.js'

function Home() {
    const courses = useSelector((state) => state.courses.data)
    const dispatch = useDispatch()
    // console.log('course: ', courses)

    const obj = {
        id: 3,
        title: 'RN Redux HOOOKS',
        lessons: [
            { id: 1, title: 'Quinta Aula' },
            { id: 2, title: 'Sexta aula' },
        ],
    }

    function addCourse() {
        console.log('Button addCourse')
        dispatch({ type: 'ADD_COURSE', payload: obj })
    }

    return (
        <Container>
            <TextStyled>Home!</TextStyled>
            {courses.map((course) => {
                return <TextStyled key={course.id}>{course.title}</TextStyled>
            })}

            <Button onPress={addCourse}>
                <TextStyled style={{ color: 'white' }}>ADD COURSE</TextStyled>
            </Button>
        </Container>
    )
}

// const mapStateToProps = (state) => {
//     console.log('Home.mapStateToProps: ', state)
//     return {}
// }

export default Home
// export default connect(mapStateToProps)(Home)
