import {defineStore} from "pinia"


let apiUrl = import.meta.env.VITE_API_URL

export const useBaseStore = defineStore('BaseStore', {
    state: () => ({
        token: null,
        user: null
    }),
    getters: {},
    actions: {
        async auth(){
            let res = await fetch(apiUrl + '/auth/', {
                method: 'POST',
                body: JSON.stringify({
                    'login': 'devtest',
                    'password': 'devtest'
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            })

            let json = await res.json()
            this.token = json.token
            this.user = json.user
        },
        async getDeals(id, pagination){
            let res = await fetch(apiUrl + `/transaction/?portfolio_id=${id}&limit=${pagination.limit}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer ' + this.token
                }
            })

            let json = await res.json()

            return {json, response: res}
        }
    }
})