import axios from "axios";

const instanse = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

const params = {
    'api_key': '9513ed8e703d28f1add7f2b34deac434',
    'language': 'ru',
    'region': 'ru'
}

export default class API {
    static async getMovies(page) {
        const response = await instanse.get('movie/popular', {
            params: {...params, page: page}
        })
        return response.data
    }

    static async getMovie(id) {
        const response = await instanse.get('movie/' + id, {
            params: params
        })
        return response.data
    }

    static async getRecommendMovie(id) {
        const response = await instanse.get('movie/' + id + '/recommendations', {
            params: params
        })
        return response.data
    }

    static async getSearchedMovies(query, page) {
        const response = await instanse.get('search/movie', {
            params: {...params, query: query, page: page}
        })
        return response.data
    }
}