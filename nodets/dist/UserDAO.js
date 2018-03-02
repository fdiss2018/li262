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
const monClient = require('mongodb').MongoClient;
class UserDAO {
    getAll(cb) {
        return __awaiter(this, void 0, void 0, function* () {
            // cb = callback on lui passera : "le res.json(data);"
            if (1 != 1) {
                // Méthode 1 : call back détaillé        
                console.log("Méthode 1");
                // Connection a la base de donnée
                monClient.connect("mongodb://localhost:27017/formation", function (err, db) {
                    if (err) {
                        // erreur de connexion
                        console.log(err);
                    }
                    else {
                        // collection :  "utilisateurs" = collections interrogée, callback = fonction qui reçoit une erreur  et la db object returnée par db.collection
                        // cf https://mongodb.github.io/node-mongodb-native/api-generated/mongoclient.html
                        db.collection("utilisateurs", function (err2, collection) {
                            if (err2) {
                                console.log(err2);
                            }
                            else {
                                collection.find().toArray(function (err3, utilisateurs) {
                                    if (err3) {
                                        console.log(err3);
                                    }
                                    else {
                                        cb(null, utilisateurs);
                                    }
                                });
                            }
                        });
                    }
                });
            }
            else {
                // Méthode 2 : métode asynchrone // 
                // identique à ce qu'il y a ci-dessus mais en asynchrone
                console.log("Méthode 2");
                try {
                    const myConnect = yield monClient.connect("mongodb://localhost:27017/formation");
                    const mycollection = yield myConnect.collection("utilisateurs");
                    const myUtilisateurs = yield mycollection.find().toArray();
                    cb(null, myUtilisateurs);
                }
                catch (mysEsc) {
                    console.log(mysEsc);
                }
            }
        });
    }
    crtUser(myUser) {
        return __awaiter(this, void 0, void 0, function* () {
            // cb = callback on lui passera : "le res.json(data);"
            // Méthode 2 : métode asynchrone // 
            // identique à ce qu'il y a ci-dessus mais en asynchrone
            console.log("Crt User");
            try {
                const myConnect = yield monClient.connect("mongodb://localhost:27017/formation");
                const mycollection = yield myConnect.collection("utilisateurs");
                yield mycollection.insert(myUser);
                return myUser;
                // cb(null, myUtilisateurs);
            }
            catch (mysEsc) {
                console.log(mysEsc);
            }
        });
    }
}
exports.UserDAO = UserDAO;
//# sourceMappingURL=UserDAO.js.map