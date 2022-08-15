const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validate = (user) => {
  const isEmailValid = regexEmail.test(user.email);
  if (user.displayName.length < 8) {
    return {
      code: 400, data: { message: '"displayName" length must be at least 8 characters long' },
    };
  }
  if ((user.password.length < 6)) {
    return {
      code: 400, data: { message: '"password" length must be at least 6 characters long' },
    };
  }

  if (!isEmailValid) {
    return { code: 400, data: { message: '"email" must be a valid email' } };
  }

  return false;
};

module.exports = {
  validate,
};
