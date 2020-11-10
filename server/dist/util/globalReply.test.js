"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globalReply_1 = __importDefault(require("./globalReply"));
test("Global reply all params", () => {
    const params = {
        request: { method: "GET", originalUrl: "/test" },
        message: "This is only a test.",
    };
    const expected = {
        request: "GET /test",
        message: "This is only a test.",
        error: null,
        data: null,
    };
    expect(globalReply_1.default(params)).toEqual(expected);
});
//# sourceMappingURL=globalReply.test.js.map