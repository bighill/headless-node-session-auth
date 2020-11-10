"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (p) => {
    return {
        request: `${p.request.method} ${p.request.originalUrl}`,
        message: p.message,
        error: p.error || null,
        data: p.data || null,
    };
};
//# sourceMappingURL=globalReply.js.map