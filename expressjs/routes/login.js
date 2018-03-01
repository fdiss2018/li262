const express = require('express');
const router = express.Router();

// utiisation de l'Id pour récuperer une instance de l'objet
router.post('/', function(req,res){
    console.log("requete post");
    
    const user = {};
    user.email=req.body.email;
    user.password=req.body.password;
    if (user.password != "toto") {
        // On retourne l'erreur 
        let message = "Erreur login!";
        // res.write("<br><Strong> Erreur login! <Strong>");   
        res.render("login", {"message": message}); 
    } else {
        let message2 = "Hello "+user.email;
        // res.write("<br><Strong> Erreur login! <Strong>");   
        res.render("home", {"message": message2}); 
    }
    res.end();
})

router.get("/",function(req, res){
    // On passe un JSOn à la vue pour affichage
    res.render("login", {});
});

module.exports = router;