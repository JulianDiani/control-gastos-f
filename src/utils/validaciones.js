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
  var date1 = new Date(date);
  var mes,
    dia = 0;
  var anio = date1.getFullYear();
  var zero = '0';
  if (date1.getMonth() < 10) {
    mes = zero.repeat(1) + date1.getMonth();
  } else {
    mes = date1.getMonth();
  }

  if (date1.getDay() < 10) {
    dia = zero.repeat(1) + date1.getDay();
  } else {
    dia = date1.getMonth();
  }

  var format = dia + '-' + mes + '-' + anio;

  return `${format}`;
};

export const formatYear = (date) => {
  var date1 = new Date(date);
  var format = date1.getFullYear();
  return `${format}`;
};
