import * as express from 'express';
import * as path from 'path';
import {UserDAO} from './UserDAO.js';
import {json, raw, text, urlencoded} from 'body-parser';

class App {
    public express;
    constructor(){
        this.express = express();
        this.setup();
    }
    setup(){
        const router = express.Router();

        this.express.use('/', router); 
        this.express.use(express.static(path.join(__dirname, '../static')));

        this.express.get('/users' , function (req, res) {
            res.json({"prenom": "felix", "nom":"sportelli"});
        });

        this.express.get('/UsersDb', function(req, res){
            // Recuperation des données utilisateurs
            new UserDAO().getAll(function(err, data){
                res.json(data);
            });
        });

        this.express.use(json());
        this.express.use(raw());
        this.express.use(text());
        this.express.use(urlencoded({extended:true}));

        this.express.post('/add_user', async function(req, res){
        // Recuperation des données utilisateurs pour les enregistrer dans la base

        // reqbody contient déja un objet formaté
        const user = await new UserDAO().crtUser(req.body);
        res.json(user);
        }); 

    }
}
export {App};