import {SUBMITTED_FORM, RESET_FORM} from '../actions/types';

export default (state = false, action) => {
    switch(action.type) {
        case SUBMITTED_FORM:
            return true;
        case RESET_FORM:
            return false;
    }
    return state;
}