import api from '~/config/api'

class MenuService {
    async get({ token }) {
        const _response = await api
            .get('/food-plan')
            .then((r) => r)
            .catch((e) => e.response)

        return _response
    }
}

export default new MenuService()
