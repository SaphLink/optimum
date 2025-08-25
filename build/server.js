"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var next_1 = __importDefault(require("next"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
var PORT = process.env.PORT || 3000;
var app = (0, next_1.default)({ dev: process.env.NODE_ENV !== 'production' });
var handle = app.getRequestHandler();
app.prepare().then(function () {
    var server = (0, express_1.default)();
    server.use((0, cors_1.default)());
    server.all('*', function (req, res) {
        return handle(req, res);
    });
    server.listen(PORT, function () {
        console.log("> Ready on http://localhost:".concat(PORT));
    });
});
