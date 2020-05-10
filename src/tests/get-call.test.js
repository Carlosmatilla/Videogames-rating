import mockAxios from "axios"
import getCall from "../logic/get-call"


describe("getCall Logic", () => {
    
    it("executes getCall and fecth data on success", async () => {
        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: ['games'],
                status: 200
            })
        )

        const response = await getCall()

        expect.assertions(1)
        expect(response).toEqual(['games'])

    })

    it("should fail with 418 error", async () => {
        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: [],
                status: 418
            })
        )
        try {
            await getCall()
        } catch (error) {
            expect.assertions(1)
            expect(error.message).toEqual(`I'm a teapot`)
        }

    })

    it("should fail with when status !== 200", async () => {
        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: [],
                status: 384
            })
        )
        try {
            await getCall()
        } catch (error) {
            expect.assertions(1)
            expect(error.message).toEqual(`Unable to fetch games`)
        }

    })
})


