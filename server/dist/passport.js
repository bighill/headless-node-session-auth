"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const model_1 = require("./model");
const LocalStrategy = passport_local_1.default.Strategy;
passport_1.default.serializeUser((user, done) => {
    done(null, user.id);
});
passport_1.default.deserializeUser((id, done) => {
    model_1.User.findById(id, (err, user) => done(err, user));
});
passport_1.default.use(new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    console.log("passport.use(new LocalStrategy())");
    model_1.User.findOne({ email: email })
        .then((user) => {
        if (!user) {
            // register new user
            const newUser = new model_1.User({ email, password });
            bcrypt_1.default.genSalt(10, (err, salt) => {
                bcrypt_1.default.hash(newUser.password, salt, (err, hash) => {
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
        }
        else {
            // compare password
            bcrypt_1.default.compare(password, user.password, (err, isMatch) => {
                if (err) {
                    throw err;
                }
                if (isMatch) {
                    return done(null, user);
                }
                else {
                    return done(null, false, { message: "Wrong password" });
                }
            });
        }
    })
        .catch((err) => {
        return done(null, false, { message: err });
    });
}));
exports.default = passport_1.default;
//# sourceMappingURL=passport.js.map