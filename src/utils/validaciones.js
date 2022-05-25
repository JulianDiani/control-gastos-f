const regexString = new RegExp('^[a-zA-Z]+$');
const regexInteger = new RegExp('^[0-9]+');

export const validateField = (input, value, setState) => {
  if (input !== 'monto') {
    console.log('ENTRO ACA');
    console.log(regexString.test(value));
    setState(!regexString.test(value));
  } else {
    setState(!regexInteger.test(value));
  }
};

export const formatPrice = (price) => {
  const format = new Intl.NumberFormat('de-DE').format(price);

  return `$${format}`;
};
