"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const app = (0, express_1.default)();
const PORT = 4000;
app.get('/', (req, res, next) => {
    res.send("hello from ts app");
});
app.use((req, res, next) => {
    next(new http_errors_1.default.NotFound());
});
const errorHandles = (err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        status: err.status || 500,
        message: err.message
    });
};
app.use(errorHandles);
const server = app.listen(PORT, () => {
    console.log("Server connect on port on ${PORT}");
});
