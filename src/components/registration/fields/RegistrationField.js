import React from 'react';

export default ({input, type ,label, meta:{error, touched}}) => {

    return (
        <div>
            <label className="label-form">{label}</label><br/>
            <input {...input} type={type} className="input-form" required/>
            <div className="mensaje-error">
                {touched && error}
            </div>
        </div>
    );
};