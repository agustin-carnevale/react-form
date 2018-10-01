import {SUBMITTED_FORM, RESET_FORM} from './types';
import {reset} from 'redux-form';
import axios from 'axios';

export const submitRegistrationForm  = (formData) => async dispatch => {
    const res = await axios.post('http://www.mocky.io/v2/5bb111412e00008300927103',formData);
    dispatch({
        type:SUBMITTED_FORM,
        payload:res.data
    })
};

export const resetRegistrationForm  = () => dispatch => {
    dispatch(reset('registrationForm'));
    dispatch({
        type:RESET_FORM
    })
};