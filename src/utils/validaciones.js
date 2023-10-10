const regexString = new RegExp('^[a-zA-Z0-9_ ñÑ]*$');
const regexInteger = new RegExp('^[0-9]+');
// eslint-disable-next-line no-useless-escape
const regexCuit = /^\d{2}\-\d{8}\-\d{1}$/;
// eslint-disable-next-line no-useless-escape
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//TODO regexCuit & regexEmail

export const validateField = (input, value, setState) => {
  if (input === 'email') {
    setState(!regexEmail.test(value)); //TODO: Validaciones para email
    return;
  }
  if (input === 'cuit') {
    setState(!regexCuit.test(value)); //TODO: Validaciones para CUIT
    return;
  }
  if (input === 'int') {
    setState(!regexInteger.test(value));
    return;
  } else {
    setState(!regexString.test(value));
    return;
  }
};

export const validateMonto = (disponibleRubro, montoIngresado, setState) => {
  const canBuy = disponibleRubro - montoIngresado >= 0;
  setState(!canBuy);
};
export const formatPrice = (price) => {
  const format = new Intl.NumberFormat('de-DE').format(price);

  return `$${format}`;
};

export const valiString = (value) => {
  return regexString.test(value);
};

export const formatDate = (date) => {
  const fechaString = date;
  var partesFecha = fechaString.split('-');
  var fechaInvertida =
    partesFecha[2] + '-' + partesFecha[1] + '-' + partesFecha[0];

  return `${fechaInvertida}`;
};

export const formatYear = (date) => {
  var date1 = new Date(date);
  var format = date1.getFullYear();
  return `${format}`;
};
