import {combineReducers} from 'redux';
import { reducer as formReducer} from 'redux-form';
import successReducer from './successReducer';

export default combineReducers({
    form: formReducer,
    success: successReducer
});