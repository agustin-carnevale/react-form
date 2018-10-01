import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form';
import RegistrationField from '../fields/RegistrationField';
import CuilField from '../fields/CuilField';
import {validateFirstPage} from '../validate';

class RegistrationFormFirstPage extends Component {

  renderFields(){
    return ( 
      <div>
        <Field name="nombre" type="text"
          component={RegistrationField}
          label="Nombre Completo"
        />
        <Field name="cuil" type="text"
          component={CuilField}
          label="Nº de CUIL"
        />
      </div>
    );
  }

  render() {
    const {onSubmit,invalid, pristine, submitting} = this.props;
    return (
      <form onSubmit={onSubmit}>
      {this.renderFields()}
      <div className="btn-container">
        <button type="submit" className="next boton-form" disabled={invalid || submitting || pristine}>
          Siguiente
        </button>
      </div>
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

