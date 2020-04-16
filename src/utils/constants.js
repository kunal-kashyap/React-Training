export const REGEX = {
  PASSWORD: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[$_!@])[A-Za-z\d$@!_]{8,12}$/,
  PAN: /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,
  PIN_CODE: /^\d{6}$/,
  MOBILE_NUMBER: /^\d{10}$/,
  EMAIL_ID: /^[a-z0-9]+([-._][a-z0-9]+)*@([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,4}$/,
  NAME: /^([a-zA-Z])|([a-zA-Z].[a-zA-Z])|([a-zA-Z].)/,
  USER_ID: /^([a-zA-Z0-9!_@$.]){6,26}$/,
  QUESTION: /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/,
  USER_NAME: /^([a-zA-Z])|([a-zA-Z].[a-zA-Z])|([a-zA-Z].)/,
  PASSWORD_REGISTRATION: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[$_!@])[A-Za-z\d$@!_]{8,12}$/,
  VIRTUAL_PAYMENT_ADDRESS: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+$/,
  DATE: /^((02?[1-9]|[12][0-9]|3[01])[- /.](02?[1-9]|1[012])[- /.](19|20)[0-9]{2})*$/,
  SPECIAL_CHARACTERS: /[^a-zA-Z0-9]/,
  ARN: /^[a-zA-Z0-9-]+$/,
};

export const getAuthToken = () => {
  return localStorage.getItem('loginToken') || null;
};
