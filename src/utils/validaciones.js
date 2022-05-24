const regexString = new RegExp('^[a-zA-Z]+$');
const regexInteger = new RegExp('^[0-9]+');

export const validateField = (input, value, setState) => {
  if (input !== 'monto') {
    setState(regexString.test(value));
  } else {
    setState(regexInteger.test(value));
  }
};
