import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import RegistrationForm from './registration/RegistrationForm';
import RegistrationSuccess from './registration/pages/RegistrationSuccess';
import '../styles/App.css';

class App extends Component {

  submit = (event) =>{
    event.preventDefault();
    const formData = this.props.form.values;
    const cuil=formData.cuil;
    formData.cuil= cuil.replace(/[-]+/g,'');
    
    this.props.submitRegistrationForm(formData);
  }

  reset = ()=>{
    this.props.resetRegistrationForm();
  } 

  render() {
    return (
      <div>
        {!this.props.success && 
        <RegistrationForm onSubmit={this.submit}/>}
        {this.props.success && 
        <RegistrationSuccess onClick={this.reset}/>}
      </div>
    );
  }
}

function mstp(state){
  return ({
    form: state.form.registrationForm,
    success: state.success
  })
}

export default connect(mstp,actions)(App);
