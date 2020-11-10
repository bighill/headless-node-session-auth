"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const globalReply_1 = __importDefault(require("../util/globalReply"));
const catchAllMessage = (req, res) => {
    const reply = globalReply_1.default({ request: req, message: "Not found" });
    res.status(404).send(reply);
};
router.get("*", (req, res) => catchAllMessage(req, res));
router.post("*", (req, res) => catchAllMessage(req, res));
exports.default = router;
//# sourceMappingURL=catchall.js.map