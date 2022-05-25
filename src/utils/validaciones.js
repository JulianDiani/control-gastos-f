const regexString = new RegExp('^[a-zA-Z]+$');
const regexInteger = new RegExp('^[0-9]+');
//TODO regexCuit & regexEmail

export const validateField = (input, value, setState) => {
  if (input === 'email') {
    setState(!regexString.test(value));
  }
  if (input === 'cuit') {
    setState(!regexInteger.test(value));
  }
  if (input === 'int') {
    setState(!regexInteger.test(value));
  } else {
    setState(!regexString.test(value));
  }
};

export const formatPrice = (price) => {
  const format = new Intl.NumberFormat('de-DE').format(price);

  return `$${format}`;
};
