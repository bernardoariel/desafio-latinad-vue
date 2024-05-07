import MyForm from '@/components/MyForm.vue';
import { mount } from '@vue/test-utils';
import { reactive, ref, nextTick } from 'vue';
import Button from "primevue/button"
import Card from 'primevue/card';
import ProgressSpinner from 'primevue/progressspinner';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
describe('<MyForm />', () => {
    let wrapper;
    vi.mock('@/composables/useSelectedQuery', () => ({
        useSelectedQuery: () => ({
          itemSelected: reactive({ id: null, name: '', description: '', price_per_day: '', resolution_height: '', resolution_width: '', type: '' }),
          clearDataSelected: vi.fn()
        })
    }));
    vi.mock('@/composables/useDisplays', () => ({
        useDisplays: () => ({
          createDisplay: vi.fn(),
          updateDisplay: vi.fn()
        })
    }));
    vi.mock('@/composables/useValidationForm', () => ({
        useValidationForm: () => ({
          validations: reactive({
            nameValid: true,
            descriptionValid: true,
            priceValid: true,
            resolutionHeightValid: true,
            resolutionWidthValid: true,
            typeValid: true
          }),
          isValidForm: ref(true),
          touched: reactive({}),
          setTouched: vi.fn(),
          touchAll: vi.fn(),
          setClearInput: vi.fn()
        })
      }));
      beforeEach(() => {
        wrapper = mount(MyForm, {
            global: {
                components: {
                    Button,
                    Card,
                    ProgressSpinner,
                    InputText,
                    Dropdown
                },
                provide: {
                    // Proporcionar un objeto $primevue mock para evitar errores de configuración no encontrada
                    $primevue: {
                        config: {
                            ripple: true, // Ejemplo de configuración
                            inputStyle: 'outlined' // Ejemplo de estilo predeterminado
                        }
                    }
                },
                stubs: {
                    // 'Button': true,
                    'Card': true,
                    'ProgressSpinner': true,
                    'InputText': true,
                    'Dropdown': true
                }
            }
        });
    });

    test('initializes with default values', () => {
        expect(wrapper.vm.itemSelected.name).toBe('');
        expect(wrapper.vm.itemSelected.description).toBe('');
    });

    test('calls createDisplay when saving a new item', async () => {
        await wrapper.vm.saveDisplay();
    
        expect(wrapper.vm.createDisplay).toHaveBeenCalled();
    });
    test('Should call the save function when the Save button is clicked with valid data', async () => {
        // Asegurarse de que el estado del formulario es válido
        wrapper.vm.isValidForm = true;
        wrapper.vm.itemSelected = {
            name: "Valid Name",
            description: "Valid Description",
            price_per_day: 100,
            resolution_height: 1080,
            resolution_width: 1920,
            type: 'indoor',
            id: null
        };
    
        // Simula el evento click en el botón Guardar
        const button = wrapper.find('[data-testid="save-button"]');
        
        if (button.exists()) {
            await button.trigger('click');
            await nextTick(); 

            expect(createDisplayMock).toHaveBeenCalled();
        } else {
            console.error('The Save button was not found');
        }
    });
      
     

})