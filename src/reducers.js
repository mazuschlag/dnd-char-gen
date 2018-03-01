import { combineReducers } from 'redux';
import CharacterGeneratorReducer from './components/CharacterGenerator/CharacterGeneratorReducer'
import AppReducer from './AppReducer.js';

const rootReducer =  combineReducers({
    character: CharacterGeneratorReducer,
    app: AppReducer
});

export default rootReducer;