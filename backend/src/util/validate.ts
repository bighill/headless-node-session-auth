import * as EmailValidator from "email-validator";

interface Value {
  val?: string | undefined;
}

interface Credentials {
  email: Value;
  password: Value;
}

const validate = {
  cleanString: (val: Value) => (val === undefined ? "" : val),
  minChar: (val: string, min: number): boolean => val.length >= min,

  email: (val: Value): boolean => {
    const cleanString: string = String(validate.cleanString(val));
    if (EmailValidator.validate(cleanString)) {
      return true;
    }
    return false;
  },

  password: (val: Value): boolean => {
    const cleanString: string = String(validate.cleanString(val));
    if (validate.minChar(cleanString, 8)) {
      return true;
    }
    return false;
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
