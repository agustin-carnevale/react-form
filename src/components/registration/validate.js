
export const validateFirstPage = values => {
    const errors = {}

    //Nombre Completo
    if (!values.nombre) {
      errors.nombre = 'Campo Requerido';
    }
    else {
      const nombres = values.nombre.match(/\w+/g);
      if ( nombres? (nombres.length <2):true) {
        errors.nombre = 'Debes ingresar nombre completo';
      }
    }

    //Cuil validado por máscara
    if (!values.cuil) {
      errors.cuil = 'Campo Requerido';
    }
    
    return errors
  }
  
export const validateSecondPage = values => {
  const errors = {}

  //Direccion
  if (!values.calle) {
    errors.calle = 'Campo Requerido';
  }
  if (!values.numero) {
    errors.numero = 'Campo Requerido';
  }
  if (!values.provincia) {
    errors.provincia = 'Campo Requerido';
  }
  if (!values.localidad) {
    errors.localidad = 'Campo Requerido';
  }

  return errors
}


export const validateThirdPage = values => {
  const errors = {}

  //Email
  if (!values.email) {
    errors.email = 'Campo Requerido';
  }else{
    //regex para validacion de mail
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(values.email)===false)
      errors.email = 'Debes ingresar un mail válido';
  }

  //Password
  if (!values.password) {
    errors.password= 'Campo Requerido'
  }else{
    //regex para validacion de contraseña
    const re = /^(?=\w*\d)(?=\w*[a-z])\S{8,20}$/;
    if (re.test(values.password)===false)
      errors.password = 'Debe contener 8-20 caracteres, incluyendo por lo menos un número';
  }

  return errors
}
