"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const mongoose_1 = __importDefault(require("mongoose"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const passport_1 = __importDefault(require("./passport"));
const securedMW_1 = __importDefault(require("./middleware/securedMW"));
const devMW_1 = __importDefault(require("./middleware/devMW"));
const auth_1 = __importDefault(require("./routes/auth"));
const api_1 = __importDefault(require("./routes/api"));
const catchall_1 = __importDefault(require("./routes/catchall"));
// TODO : tests that mock express requests (req, res)
const app = express_1.default();
const port = String(process.env.SERVER_PORT);
const MongoStore = connect_mongo_1.default(express_session_1.default);
const mongoUri = String(process.env.MONGO_URI);
mongoose_1.default
    .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`mongo connected at ${mongoUri}`))
    .catch(console.log);
app.use(express_session_1.default({
    store: new MongoStore({ mongooseConnection: mongoose_1.default.connection }),
    secret: "use a better secret",
    resave: false,
    saveUninitialized: true,
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
if (app.get("env") === "development") {
    app.use(devMW_1.default);
}
app.use("/auth", auth_1.default);
app.use("/api", securedMW_1.default, api_1.default);
app.use("*", catchall_1.default);
app.listen(port, () => {
    console.log(`Listening on localhost:${port}`);
});
//# sourceMappingURL=server.js.map