const initialState ={
    step: 'RACE',
    componentType: 'Pick',
    nextOptions: ['Human', 'Elf']
}

export default function CharacterGenerator(store = initialState, action){
    const {type, payload} = action;

    switch(type){
        case 'TAKE_STEP' : {
            return {
                ...store,
                step: payload.step,
                componentType: payload.componentType,
                options: payload.options
            };
        }

        default: {
            return store;
        }
    }
}