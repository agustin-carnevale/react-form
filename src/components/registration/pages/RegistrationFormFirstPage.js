import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form';
import RegistrationField from '../fields/RegistrationField';
import CuilField from '../fields/CuilField';
import {validateFirstPage} from '../validate';

class RegistrationFormFirstPage extends Component {

  renderFields(){
    return ( 
      <React.Fragment> 
        <div className="form-line">

          <Field name="nombre" type="text"
            component={RegistrationField}
            label="Nombre Completo" size="full"/>

        </div>
        <div className="form-line">

          <Field name="cuil" type="text"
            component={CuilField}
            label="Nº de CUIL" size="full"/>
            
        </div>
        </React.Fragment> 
    );
  }

  render() {
    const {onSubmit,invalid, pristine, submitting} = this.props;
    return (
      <form className="form-page" onSubmit={onSubmit}>
        {this.renderFields()}
        <button type="submit" className="next boton-form" disabled={invalid || submitting || pristine}>
          Siguiente
        </button>
      </form>
    );
  }
}


export default reduxForm({
  form: 'registrationForm', 
  destroyOnUnmount: false, 
  forceUnregisterOnUnmount: true,
  validate:validateFirstPage
})(RegistrationFormFirstPage);

