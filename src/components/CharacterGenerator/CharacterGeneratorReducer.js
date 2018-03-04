const initialState = {
    name: '',
    class: '',
    race: '',
    abilityScores: {
        str: '',
        dex: '',
        const: '',
        int: '',
        wis: '',
        char: ''
    },
    health: 0,
    background: ''
}

export default function CharacterGenerator(store = initialState, action){
    const {type, payload} = action;

    switch(type) {

        case 'UPDATE_RACE' : {
            return {
                ...store,
                race: payload
            };
        }

        case 'UPDATE_CLASS' : {
            return {
                ...store,
                class: payload
            };
        }

        case 'UPDATE_ABILITY' : {
            return {
                ...store,
                abilityScores: payload
            }
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