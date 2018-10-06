import React from 'react';

export default ({input,size, placeholder, type ,label, meta:{error, touched}}) => {
    var classes="form-field "+size;

    return (
        <div className={classes}>
            <label className="label-form">{label}</label>
            <input {...input} type={type} className="input-form" 
                    placeholder={placeholder} required/>
            <div className="mensaje-error">
                {touched && error}
            </div>
        </div>
    );
};