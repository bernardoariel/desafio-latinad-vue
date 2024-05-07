import HomePage from "@/landing/pages/HomePage.vue"

import { shallowMount } from "@vue/test-utils"

import Card from 'primevue/card';
describe('<HomePage />',()=>{

    test('should be render correctly', ()=>{
        const wrapper = shallowMount(HomePage,{
            components: {
                Card
              }
        })
        console.log(wrapper.html())
        expect(wrapper.find('my-toolbar-stub').exists()).toBe(true)
        expect(wrapper.html()).toContain('my-form-stub')
        expect(wrapper.find('my-metter-stub').exists()).toBe(true)
        expect(wrapper.html()).toContain('card-stub')
       
    })
})