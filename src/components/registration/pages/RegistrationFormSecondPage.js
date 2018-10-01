import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form';
import RegistrationField from '../fields/RegistrationField';
import ProvinciaField from '../fields/ProvinciaField';
import LocalidadField from '../fields/LocalidadField';
import {validateSecondPage} from '../validate';


class RegistrationFormSecondPage extends Component {
  
  renderFields(){
    return ( 
      <div>
        <Field name="calle" type="text"
          component={RegistrationField}
          label="Calle"
        />
        <Field name="numero" type="text"
          component={RegistrationField}
          label="Número"
        />
        <Field name="provincia" type="text"
          component={ProvinciaField}
          label="Provincia"
        />
        <Field name="localidad" type="text"
          component={LocalidadField}
          label="Localidad"
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
        <button type="button" className="previous boton-form" onClick={this.props.previousPage}>
          Atras
        </button>
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
  validate: validateSecondPage
})(RegistrationFormSecondPage);
