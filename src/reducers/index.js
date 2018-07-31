import { combineReducers } from 'redux';
import films from './films';
import vehicles from './vehicles';

const rootReducer = combineReducers({
    films,
    vehicles,
});

export default rootReducer;