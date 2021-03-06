const initialState ={
    step: 'WELCOME',
    componentType: 'WELCOME',
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