interface Value {
  val?: string | undefined;
}

interface Credentials {
  email: Value;
  password: Value;
}

const validate = {
  isValidString: (val: Value): boolean => val !== undefined && val !== "",

  email: (val: Value) => {
    if (!validate.isValidString(val)) {
      return false;
    }
    return true;
  },

  password: (val: Value): boolean => {
    if (!validate.isValidString(val)) {
      return false;
    }
    return true;
  },

  credentials: (credentials: Credentials): boolean => {
    if (!validate.email(credentials.email)) {
      return false;
    }
    if (!validate.password(credentials.password)) {
      return false;
    }
    return true;
  },
};

export default validate;
