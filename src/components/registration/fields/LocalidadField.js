import React,{Component} from 'react';
import {connect} from 'react-redux';

class LocalidadField extends Component {
    state={
        localidades:null
    }

    fetchLocalidades = async (id) => {
        const api = `https://geopagos-challenge.s3.amazonaws.com/provinces/${id}.json`;
        const res = await fetch(api);
        const provincia = await res.json();
        const localidades = provincia.cities;
        this.setState({localidades});
    }

    renderLocalidades=()=>{
        if(this.props.provinciaID){
            this.fetchLocalidades(this.props.provinciaID);
        } 
        return (this.state.localidades &&  
            this.state.localidades.map( localidad =>
                <option key={localidad.id} value={localidad.name}>{localidad.name}</option>
        ));
    }

    render(){
        const {input, type, name, label, meta:{error, touched}} = this.props;
        return (
            <div>
                <label className="label-form">{label}</label>
                <select {...input} type={type} name={name} className="input-form" required >
                    {this.renderLocalidades()}
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

export default connect(mstp)(LocalidadField);

