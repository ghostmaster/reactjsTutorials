import { combineReducers } from 'redux';

import characters from './charactersReducer';
import heroes from './heroesReducer'; 

const rootReducer = combineReducers({
    characters, 
    heroes
})

export default rootReducer;