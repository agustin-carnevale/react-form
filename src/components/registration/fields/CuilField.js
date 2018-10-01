import React from 'react';

export default ({input, type, label, meta:{error, touched}}) => {

    return (
        <div>
            <label className="label-form">{label}</label><br/>
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