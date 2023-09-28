export function validate(inputs) {
    //   const errors = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPassword = /^(?=.*\d).{6,10}$/;
    const errors = {};
  
    if (!regexPassword.test(inputs.password)) errors.password = "Se requiere password valido";
  
    if (!regexEmail.test(inputs.email) && inputs.password.length <= 36)
      errors.email = "Debe ser un correo electrónico valido";
  
    return errors;
  }
  