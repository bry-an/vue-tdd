import { shallowMount } from "@vue/test-utils"
import VUserSearchForm from "@/components/VUserSearchForm"

describe("VUserSearchForm", () => {
    const build = () => {
        const wrapper = shallowMount(VUserSearchForm)

        return {
            wrapper, 
            input: () => wrapper.find("input"),
            button: () => wrapper.find("button")
        }
    }
    
    it("renders the component", () => {
        // arrange
       const { wrapper } = build()
       
       expect(wrapper.html()).toMatchSnapshot()

    })

    it("renders main child components", () => {
        // arrange
        const { input, button } = build()

        expect(input().exists()).toBe(true)
        expect(button().exists()).toBe(true)
    })

    it("calls 'submitted' event when submitting form", () => {
        const expectedUser = 'bryan'
        const { wrapper, button, input } = build()
        input().element.value = expectedUser // manually entering input value

        // do 
        input().trigger("input")
        button().trigger("click")
        button().trigger("submit")

        // assert
        expect(wrapper.emitted().submitted[0]).toEqual([expectedUser])
    })

})