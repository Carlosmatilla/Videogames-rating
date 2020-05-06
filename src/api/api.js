import axios from "axios"

export default {

        get: () => axios.get(`http://localhost:2212/games`),
        update: (data, id ) => axios.put(`http://localhost:2212/games/${id}`, data)
        
}
    
