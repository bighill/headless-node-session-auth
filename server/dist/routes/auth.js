"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const router = express_1.default.Router();
const globalReply_1 = __importDefault(require("../util/globalReply"));
router.post("/login", (req, res, next) => {
    passport_1.default.authenticate("local", (err, user, info) => {
        if (err) {
            const reply = globalReply_1.default({
                request: req,
                error: err,
                message: "Bad request",
            });
            return res.status(400).send(reply);
        }
        if (!user) {
            const reply = globalReply_1.default({
                request: req,
                message: "Unauthorized",
            });
            return res.status(401).send(reply);
        }
        req.logIn(user, (err) => {
            if (err) {
                const reply = globalReply_1.default({
                    request: req,
                    error: err,
                    message: "Bad request",
                });
                return res.status(400).send(reply);
            }
            const reply = globalReply_1.default({
                request: req,
                message: "Login was successful",
            });
            return res.send(reply);
        });
    })(req, res, next);
});
router.get("/logout", (req, res) => {
    req.logout();
    const reply = globalReply_1.default({
        request: req,
        message: "Logout was successful",
    });
    res.send(reply);
});
exports.default = router;
//# sourceMappingURL=auth.js.map