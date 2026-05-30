export default class Validator {
  validateUsername(username) {
    if (typeof username !== 'string') {
      return false;
    }
    
    if (/\d{4,}/.test(username)) {
      return false;
    }

    // ^[a-zA-Z] первый символ - лат мал и загл буква
    // [a-zA-Z]$ послед сим - лат мал и загл буква
    // [a-zA-Z0-9_-]* лат мал и загл буквы, тире, подчеркивание, цифры 0-9
    // \d{4,} люб цифры подряд более 3 цифр

    const regex = /^[a-zA-Z][a-zA-Z0-9_-]*[a-zA-Z]$/;
    return regex.test(username);
  }
}
