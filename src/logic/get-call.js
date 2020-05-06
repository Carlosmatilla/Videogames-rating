import api from '../api/api'

export default async function () {

    const response = await api.get()

    const { status } = response

    if (status === 200) {

        return response.data

    } else {

        throw new Error("Unable to fetch games")

    }
}