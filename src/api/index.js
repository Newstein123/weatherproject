import axios from "axios"

export const api = axios.create({
    baseURL : 'https://api.openweathermap.org/data/2.5'
})

export const appid = '444d33d2ecfd4a737eccb341356e3b87'