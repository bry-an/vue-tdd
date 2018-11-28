import { shallowMount } from "@vue/test-utils"
import UserView from "@/views/UserView"

describe("UserView", () => {
    it("renders the component", () => {})
    //arrange
    const wrapper = shallowMount(UserView) // render only the first level of dependencies

    // assert
    expect(wrapper.html()).toMatchSnapshot()
})