import mutations from "@/store/mutations"
import initialState from "@/store/state"
import user from "./fixtures/user"

describe("mutations", () => {
    let state

    beforeEach(() => {
        state = { initialState }
    })

    it("sets the new user", () => {
        // arrange
        const expectedUser = user
        // do

        mutations.SET_USER(state, expectedUser)

        // assert
        expect(state.user).toEqual(expectedUser)
        expect(state.user).not.toBe(expectedUser)
    })
})