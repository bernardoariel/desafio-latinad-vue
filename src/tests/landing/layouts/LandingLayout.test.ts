import LandingLayout from "@/landing/layouts/LandingLayout.vue"
import router from "@/router"
import { shallowMount } from "@vue/test-utils"
import { RouterView } from "vue-router"

describe('<LandingLayout />',()=>{

    test('should be render correctly', ()=>{
        const wrapper = shallowMount(LandingLayout,{
            global:{
                plugins:[router]
            }
        })



        expect(wrapper.findComponent({name:'RouterView'}).exists()).toBe(true)
        expect(wrapper.findComponent(RouterView).exists()).toBe(true)
    })
})