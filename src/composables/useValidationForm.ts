import { computed, reactive } from 'vue';

export const useValidationForm = (displayData) => {
    const touched = reactive({
        name: false,
        description: false,
        price_per_day: false,
        resolution_height: false,
        resolution_width: false,
        type: false
    });
    // Función para verificar si el valor es numérico
    const isNumeric = (value) => !isNaN(parseFloat(value)) && isFinite(value);
    // Función para verificar si la longitud de un texto es menor a 3 caracteres
    const isShortText = (text) => text.length < 3;
    // Validaciones computadas
    const validations = computed(() => {
        return {
            nameValid: !touched.name || displayData.name.length >= 3,
            descriptionValid: !touched.description || displayData.description.length >= 3,
            priceValid: !touched.price_per_day || (isNumeric(displayData.price_per_day) && displayData.price_per_day > 0),
            resolutionHeightValid: !touched.resolution_height || (isNumeric(displayData.resolution_height) && displayData.resolution_height > 0),
            resolutionWidthValid: !touched.resolution_width || (isNumeric(displayData.resolution_width) && displayData.resolution_width > 0),
            typeValid: !touched.type || displayData.type !== ''
        };
    });

    // Función para verificar todas las validaciones
    const isValidForm = computed(() => {
        return Object.values(validations.value).every(Boolean);
    });

    const setTouched = (field) => {
        if (field in touched) touched[field] = true;
    };
    const setClearInput = () =>{
        Object.keys(touched).forEach(key => {
            touched[key] = false;
        });
    }
    const touchAll = () => {
        Object.keys(touched).forEach(field => {
            touched[field] = true;
        });
    };
    
    return {
        validations,
        isValidForm,
        touched,
        setTouched,
        setClearInput,
        touchAll
    };
};
