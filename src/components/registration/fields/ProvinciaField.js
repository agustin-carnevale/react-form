import React,{Component} from 'react';
import {connect} from 'react-redux';

class ProvinciaField extends Component {

    state={
        provincias:null
    }

    componentDidMount(){
        const api = 'https://geopagos-challenge.s3.amazonaws.com/provinces.json';
        const fetchProvincias = async () => {
            const res = await fetch(api);
            const provincias  = await res.json();
            this.setState({provincias});
        }
        fetchProvincias();
    }

    renderProvincias=()=>{
        return(this.state.provincias &&  
            this.state.provincias.map( provincia =>
                <option key={provincia.id} value={provincia.id}>
                    {provincia.name}
                </option>
        ));
    }
   
    render(){
        const {input, type, name, label, meta:{error, touched}} = this.props;
        return (
            <div>
                <label className="label-form">{label}</label>
                <select {...input} type={type} name={name} className="input-form" required>
                    {this.renderProvincias()}
                </select>
                <div className="mensaje-error">
                    {touched && error}
                </div>
            </div>
        );
    }
};

function mstp(state){
    return({provinciaID: state.form.registrationForm.values.provincia});
}

export default connect(mstp)(ProvinciaField)