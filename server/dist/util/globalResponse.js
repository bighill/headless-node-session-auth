"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (p) => {
    return {
        error: p.error || null,
        request: `${p.request.method} ${p.request.originalUrl}`,
        message: p.message,
        data: p.data || null,
    };
};
//# sourceMappingURL=globalResponse.js.map