import flushPromises from "flush-promises"
import nock from "nock"
import api from "@/api"
import userFixture from "./fixtures/user"

describe("api", () => {
    it("searches for the user", async () => {
        // arrange
        const expectedUser = "bryan"

        const request = nock("https://api.github.com")
            .get(`/users/${expectedUser}`)
            .reply(200, userFixture)

        // do
        const result = await api.searchUser(expectedUser)
        await flushPromises

        // assert
        expect(result).toEqual(userFixture)
        expect(request.isDone()).toBe(true)
    })
})