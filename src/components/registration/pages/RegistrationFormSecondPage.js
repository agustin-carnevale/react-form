import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form';
import RegistrationField from '../fields/RegistrationField';
import ProvinciaField from '../fields/ProvinciaField';
import LocalidadField from '../fields/LocalidadField';
import {validateSecondPage} from '../validate';


class RegistrationFormSecondPage extends Component {

  renderFields(){
    return (
      <React.Fragment>
        <div className="form-line">

          <Field name="calle" type="text"
            component={RegistrationField} label="Calle" size="big"
            placeholder="Ej.:Av. de Mayo"/>

          <Field name="numero" type="text"
            component={RegistrationField} label="Número" size="small"
            placeholder="Ej.:3651"/>

        </div>
        <div className="form-line">

          <Field name="provincia" type="text"
            component={ProvinciaField}
            label="Provincia"/>

          <Field name="localidad" type="text"
            component={LocalidadField}
            label="Localidad"/>
            
        </div>
      </React.Fragment> 
    );
  }

  render() {
    const {onSubmit,invalid, pristine, submitting} = this.props;
    return (
      <form className="form-page" onSubmit={onSubmit}>
        {this.renderFields()}
        <button type="button" className="previous boton-form" onClick={this.props.previousPage}>
          Atras
        </button>
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
  validate: validateSecondPage
})(RegistrationFormSecondPage);
