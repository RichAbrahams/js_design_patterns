const telValidator = {
    validate: (value) => {
      return (/^[0-9]{11}$/g).test(value);
    }
};

export default telValidator;
