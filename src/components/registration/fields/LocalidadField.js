import React,{Component} from 'react';
import {connect} from 'react-redux';

class LocalidadField extends Component {

    renderLocalidades=()=>{
        console.log('Render: Localidades');
        return (this.props.localidades &&  
            this.props.localidades.map( localidad =>
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
    return({localidades: state.localidades});
}

export default connect(mstp)(LocalidadField);

