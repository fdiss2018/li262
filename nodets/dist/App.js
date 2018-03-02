"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const UserDAO_js_1 = require("./UserDAO.js");
const body_parser_1 = require("body-parser");
class App {
    constructor() {
        this.express = express();
        this.setup();
    }
    setup() {
        const router = express.Router();
        this.express.use('/', router);
        this.express.use(express.static(path.join(__dirname, '../static')));
        this.express.get('/users', function (req, res) {
            res.json({ "prenom": "felix", "nom": "sportelli" });
        });
        this.express.get('/UsersDb', function (req, res) {
            // Recuperation des données utilisateurs
            new UserDAO_js_1.UserDAO().getAll(function (err, data) {
                res.json(data);
            });
        });
        this.express.use(body_parser_1.json());
        this.express.use(body_parser_1.raw());
        this.express.use(body_parser_1.text());
        this.express.use(body_parser_1.urlencoded({ extended: true }));
        this.express.post('/add_user', function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                // Recuperation des données utilisateurs pour les enregistrer dans la base
                const user = yield new UserDAO_js_1.UserDAO().crtUser(req.body);
                res.json(user);
            });
        });
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map