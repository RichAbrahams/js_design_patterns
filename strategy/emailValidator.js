const emailValidator = {
  validate: (value) => {
    return value.indexOf('@') !== -1;
  }
};

export default emailValidator;
