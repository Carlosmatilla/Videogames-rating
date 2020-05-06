const { floor, random } = Math

export default function () {

    const gameRandom = floor(random() * 18)
    const averageRandom = floor(random() * 5) + 1
    const timeRandom = floor(random() * 4000)

    return new Promise(resolve => {
        setTimeout(() => {
            resolve({gameRandom, averageRandom})
        }, timeRandom)
    })
}

