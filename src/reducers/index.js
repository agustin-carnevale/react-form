import {combineReducers} from 'redux';
import { reducer as formReducer} from 'redux-form';
import successReducer from './successReducer';
import localidadesReducer from './localidadesReducer';

export default combineReducers({
    form: formReducer,
    success: successReducer,
    localidades: localidadesReducer
});