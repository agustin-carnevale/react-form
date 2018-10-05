import React from 'react';

export default ({input, type, label, meta:{error, touched}}) => {

    return (
        <div className="form-field full">
            <label className="label-form">{label}</label>
            <input required {...input} type={type} className="input-form form-control" 
                data-mask="99-99999999-9" 
                placeholder="CUIL"
            />
            <div className="mensaje-error">
                {touched && error}
            </div>
        </div>
    );
};