import React from 'react';

export default ({onClick}) => {
    return (
        <div className="success-container">
            <div className="success-page">
                <i className="far fa-check-circle icono-success"></i>
                <p className="mensaje-success">¡Te registraste exitosamente!</p>
                <button className="boton-form" onClick={onClick}>Volver</button>
            </div>
        </div>
    );
};