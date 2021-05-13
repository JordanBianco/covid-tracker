import axios from 'axios'

const covidApi = axios.create({
    baseURL: 'https://api.covid19api.com/',
    withCredentials: true,
})

export default covidApi