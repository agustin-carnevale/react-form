import React from 'react';

export default ({input,size, type ,label, meta:{error, touched}}) => {
    var classes="form-field "+size;

    return (
        <div className={classes}>
            <label className="label-form">{label}</label>
            <input {...input} type={type} className="input-form" required/>
            <div className="mensaje-error">
                {touched && error}
            </div>
        </div>
    );
};