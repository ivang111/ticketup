import validate from "validate.js";

validate.validators.haveNumber = (value, options) => {
  const count = (value.match(/[0-9]+/g) || []).length;
  return count === 0 ? options.message : null;
};

validate.validators.haveSpecialChar = (value, options) => {
  const count = (value.match(/[^a-zA-Z0-9]+/g) || []).length;
  return count === 0 ? options.message : null;
};

validate.validators.haveUppercase = (value, options) => {
  const count = (value.match(/[A-Z]+/g) || []).length;
  return count === 0 ? options.message : null;
};

validate.validators.multiEmails = (value, options) => {
  const valueSplit = value.split(",");
  let valid = true;
  for (var n = 0; n < valueSplit.length; n++) {
    var member_info = valueSplit[n].trim();
    var validRegExp = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;

    if (member_info.search(validRegExp) === -1) {
      valid = false;
      break;
    }
  }
  return valid ? null : options.message;
};

export { validate };
