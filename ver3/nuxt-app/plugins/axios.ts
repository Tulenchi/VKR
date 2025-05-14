import axios from "axios"

export default defineNuxtPlugin(() => {
    const instance = axios.create({
        baseURL: 'https://localhost:8000/api',  // Backend API
    })

    return {
        provide: {
            axios: instance,
        }
    }
})