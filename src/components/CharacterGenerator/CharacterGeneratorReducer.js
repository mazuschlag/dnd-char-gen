const initialState = {
    name: '',
    class: '',
    race: '',
    background: ''
}

export default function CharacterGenerator(store = initialState, action){
    const {type, payload} = action;

    switch(type){

        case 'UPDATE_CLASS' : {
            return {
                ...store,
                class: payload
            };
        }

        case 'UPDATE_RACE' : {
            return {
                ...store,
                race: payload
            };
        }

        case 'UPDATE_BACKGROUND' : {
            return {
                ...store,
                background: payload
            }
        }

        case 'UPDATE_NAME' : {
            return {
                ...store,
                name: payload
            };
        }

        default: {
            return store;
        }
    }
}