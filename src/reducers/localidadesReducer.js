import {FETCH_LOCALIDADES, RESET_FORM} from '../actions/types';

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_LOCALIDADES:
            return action.payload;
        case RESET_FORM:
            return null;
    }
    return state;
}