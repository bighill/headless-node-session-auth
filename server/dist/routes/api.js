"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const globalReply_1 = __importDefault(require("../util/globalReply"));
router.get("/test/", (req, res) => {
    const reply = globalReply_1.default({
        request: req,
        message: "API test",
    });
    res.send(reply);
});
exports.default = router;
//# sourceMappingURL=api.js.map