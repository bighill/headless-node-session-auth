export default {
  /* Log when in dev environment */
  dev: (mess: string) => {
    if (process.env.NODE_ENV) {
      return false;
    }
    if (!process.env.IS_DEV) {
      return false;
    }
    console.log(mess);
  },
  /* Log when in test environment */
  test: (mess: string) => {
    if (process.env.NODE_ENV === "test") {
      console.log(mess);
    }
  },
  /* Log all errors */
  error: (mess: string) => {
    console.log(mess);
    /*
    This is would be a good place to implement notifications
    */
  },
};
