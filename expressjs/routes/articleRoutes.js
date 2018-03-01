const express = require('express');
const router = express.Router();

router.get('/', function(req,res){
    const articles = ["Pomme", "Poire", "carotte"];
    res.json(articles);
})

// utiisation de l'Id pour récuperer une instance de l'objet
router.get('/:id', function(req,res){
    const articles = [{"nom":"Pomme", "poid":"20g"} , {"nom":"Pomme", "poid":"20g"}, {"nom":"Pomme", "poid":"20g"}];
    res.json(articles[req.params.id]);
})

// utiisation de l'Id pour récuperer une instance de l'objet
router.get('/:id/:prop', function(req,res){
    const articles = [{"nom":"Pomme", "prix":"20"} , {"nom":"Pomme", "prix":"2"}, {"nom":"Pomme", "prix":"4"}];
    res.json(articles[req.params.id][req.params.prop]);
})


// utiisation de l'Id pour récuperer une instance de l'objet
router.post('/', function(req,res){
    console.log("requete post");
    
    const produit = {};
    // la methode body. est disponible à condition d'avoir inclu bodyparser dans index.js 
    // idem on diot preciser qu'il doit pouvoir recevoir du JSON
    // app.use(bodyParser.urlencoded({extended:false}));
    // app.use(bodyParser.json());
    produit.nom=req.body.nom;
    produit.prix=req.body.prix;
    // Prix max provient du fichier de config config.json
    const config = require("../config.json")  ;
    if (produit.prix >= config.prixMax) {
        // le retour 500 permet de retourner un internel server erreur.
        res.status(500);
        res.write("<br><Strong> Too expensive! <Strong>");    
    } else {
        res.write("<br> reçu "+JSON.stringify(produit));
    }
    res.end();
})

module.exports = router;