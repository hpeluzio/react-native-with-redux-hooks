import api from '~/config/api'

class MealsService {
    async getPae({ token, id, profissional_id }) {
        const _response = await api
            .get(`/food-plan/pae/${id}/${profissional_id}`)
            .then((r) => r)
            .catch((e) => e.response)

        return _response
    }

    async getPlan({ token, id }) {
        const _response = await api
            .get(`/food-plan/plan/${id}`)
            .then((r) => r)
            .catch((e) => e.response)

        return _response
    }

    async getHours(token) {
        let _hours = []
        let _response = await api.get('/food-plan/hours', {
            headers: {
                authorization: `bearer ${token}`,
            },
        })

        if (_response.status == 200) {
            _hours = _response.data
        }

        return _hours
    }
}

export default new MealsService()
