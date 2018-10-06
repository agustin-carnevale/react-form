import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form';
import RegistrationField from '../fields/RegistrationField';
import {validateThirdPage} from '../validate';

class RegistrationFormThirdPage extends Component {

  state={
    visiblePassword:false
  }

  showPassword=()=>{
    this.setState({visiblePassword: !this.state.visiblePassword});
  }

  renderFields(){
    return (
        <React.Fragment>
        <div className="form-line">

          <Field name="email" type="email"
            component={RegistrationField} label="Email" size="full"
            placeholder="Ingresá tu dirección de correo"/>

        </div>
        <div className="form-line">

          <Field name="password" type={(this.state.visiblePassword)? "text":"password"}
            component={RegistrationField} label="Password" size="full"
            placeholder="Debe ser alfanumérica de al menos 8 caracteres"/>

        </div>

        <div className="form-line">
          <label className="container-check">Mostrar contraseña
            <input type="checkbox" onChange={this.showPassword} />
            <span className="checkmark"></span>
          </label>
        </div>
        </React.Fragment> 
      
    );
  }

  render() {
    const {onSubmit, invalid, pristine, submitting} = this.props;
    return (
      <form className="form-page" onSubmit={onSubmit}>
        {this.renderFields()}
        <button type="button" className="previous boton-form" onClick={this.props.previousPage}>
          Atras
        </button>
        <button type="submit" className="next boton-form" disabled={invalid || submitting || pristine}>
          Finalizar
        </button>
      </form>
    );
  }
}


export default reduxForm({
  form: 'registrationForm', 
  destroyOnUnmount: false, 
  forceUnregisterOnUnmount: true,
  validate: validateThirdPage
})(RegistrationFormThirdPage);
