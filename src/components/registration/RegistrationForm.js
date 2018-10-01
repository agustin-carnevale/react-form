import React, { Component } from 'react';
import RegistrationFormFirstPage from './pages/RegistrationFormFirstPage';
import RegistrationFormSecondPage from './pages/RegistrationFormSecondPage';
import RegistrationFormThirdPage from './pages/RegistrationFormThirdPage';


class RegistrationForm extends Component {
  
  state = {
    page: 1
  }

  nextPage = ()=> {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage = ()=> {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const {onSubmit} = this.props;
    return (
      <div className="form-container">
        {this.state.page === 1 && 
        <RegistrationFormFirstPage 
            onSubmit={this.nextPage} />}
        {this.state.page === 2 && 
          <RegistrationFormSecondPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}/>}
        {this.state.page === 3 && 
          <RegistrationFormThirdPage
            previousPage={this.previousPage}
            onSubmit={onSubmit} />}
      </div>
    );
  }
}

export default RegistrationForm;

