import passport from "passport";
import passportLocal from "passport-local";
import bcrypt from "bcrypt";
import { User } from "../model";
const LocalStrategy = passportLocal.Strategy;

passport.serializeUser((user: any, done: any) => {
  done(null, user.id);
});

passport.deserializeUser((id: any, done: any) => {
  User.findById(id, (err, user) => done(err, user));
});

passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    console.log("passport.use(new LocalStrategy())");
    User.findOne({ email: email })
      .then((user) => {
        if (!user) {
          /* register new user */
          const newUser = new User({ email, password });
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) {
                throw err;
              }
              newUser.password = hash;
              newUser
                .save()
                .then((user) => done(null, user))
                .catch((err) => done(null, false, { message: err }));
            });
          });
        } else {
          /* compare password */
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
              throw err;
            }
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: "Wrong password" });
            }
          });
        }
      })
      .catch((err) => {
        return done(null, false, { message: err });
      });
  })
);

export default passport;
