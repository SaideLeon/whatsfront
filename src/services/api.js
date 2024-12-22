"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var api = axios_1.default.create({
    baseURL: 'https://api-sessions-production.up.railway.app/api/v1"
    // Adicionar token automaticamente, se disponível
    ,
    // Adicionar token automaticamente, se disponível
    api: api,
    : .interceptors.request.use(function (config) {
        var token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = "Bearer ".concat(token);
        }
        return config;
    }),
    export: , default: api
});
