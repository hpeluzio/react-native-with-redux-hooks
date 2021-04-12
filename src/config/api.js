import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

var instance = axios.create({
    baseURL: 'https://dietsystem-api-mobile.herokuapp.com/',
    // baseURL: 'http://10.0.2.2:3007',
    timeout: 25000,
})

instance.defaults.headers['Content-Type'] = 'application/json'

instance.interceptors.request.use(async (config) => {
    // let _token = await AsyncStorage.getItem('@Token')
    let _token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMzMywiaWF0IjoxNjE3NTQ1NjYwfQ.-2g_Pv3DcxBUVIir2NB0NwSYMbzLX0dn44MwT6JrqCI'

    if (_token) {
        config.headers.Authorization = `bearer ${_token}`
    }
    return config
})

export default instance
