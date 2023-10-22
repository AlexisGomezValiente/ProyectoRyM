const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const validation = (inputs) => {
  const inputsArr = inputs.pass.split("");
  let veriNum = false;
  const errors = {};

  inputsArr.forEach((element) => {
    if (element / 1 == element) veriNum = true;
  });

  if (!regexEmail.test(inputs.email)) {
    errors.email = "Correo invalido";
  } else {
    errors.email = "";
  }

  if (inputs.pass.length < 6 || inputs.pass.length > 10) {
    errors.pass = "Debe tener entre 6 y 10 caracteres";
  } else if (!veriNum) {
    errors.pass = "Debe tener al menos un numero";
  } else {
    errors.pass = "";
  }

  return errors;
};

export default validation;
