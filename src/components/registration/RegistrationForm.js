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

  renderPage=()=>{
    switch(this.state.page) {
      case 1:
          return (<RegistrationFormFirstPage 
                  onSubmit={this.nextPage} />);
      case 2:
          return (<RegistrationFormSecondPage
                  previousPage={this.previousPage}
                  onSubmit={this.nextPage}/>);
      case 3: 
          return (<RegistrationFormThirdPage
                  previousPage={this.previousPage}
                  onSubmit={this.props.onSubmit} />);
    }
  }

  render() {
    return (
      <div className="form-container">
        <div className="form-header">
          <h2 className="form-title">Registro</h2>
          <div className="page-indicator"></div>
        </div>
        {this.renderPage()}
      </div>
    );
  }
}

export default RegistrationForm;

