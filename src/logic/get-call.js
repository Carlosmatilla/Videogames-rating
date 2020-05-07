import api from '../api/api'

export default async function () {

    const response = await api.get()

    const { status } = response

    if (status === 200) {

        return response.data

    } else if(status === 418) {

        throw new Error("I'm a teapot")

    }else {
        
        throw new Error("Unable to fetch games")

    }
}