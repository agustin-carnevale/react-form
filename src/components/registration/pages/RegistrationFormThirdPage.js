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
      <div>
        <Field name="email" type="email"
          component={RegistrationField}
          label="Email"
        />
        <Field name="password" type={(this.state.visiblePassword)? "text":"password"}
          component={RegistrationField}
          label="Password"
        />
        <input type="checkbox" onChange={this.showPassword} />
        <label>Mostrar contraseña</label>
      </div>
    );
  }

  render() {
    const {onSubmit, invalid, pristine, submitting} = this.props;
    return (
      <form onSubmit={onSubmit}>
      {this.renderFields()}
      <div className="btn-container">
        <button type="button" className="previous boton-form" onClick={this.props.previousPage}>
          Atras
        </button>
        <button type="submit" className="next boton-form" disabled={invalid || submitting || pristine}>
          Finalizar
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
  validate: validateThirdPage
})(RegistrationFormThirdPage);
