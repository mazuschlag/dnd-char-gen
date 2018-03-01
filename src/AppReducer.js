const initialState ={
    step: 'WELCOME',
    componentType: 'Welcome'
}

export default function CharacterGenerator(store = initialState, action){
    const {type, payload} = action;

    switch(type){
        case 'TAKE_STEP' : {
            return {
                ...store,
                step: payload.step,
                componentType: payload.componentType
            };
        }

        default: {
            return store;
        }
    }
}