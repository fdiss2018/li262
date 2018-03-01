const express = require("express");
const http = require("http");
const path = require("path");
const app = express();

const users = require("./routes/userRoutes.js");
const articlesR = require("./routes/articleRoutes.js");
const loginR = require("./routes/login.js");

// const loginR = require("./routes/login.js");

// NB dans package.json ce fichier est déclaré en tant que main. c'est donc le point d'entré de l'appli.

// Demnde à express de parser le body de la requete http. Permet de récuperer les paramêtres du formulaire (cf articles en post)
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// permet d'indiquer que la requete s'appuie sur le repertoire static pour afficher une ressource (coté client).
app.use(express.static(path.join(__dirname, 'static')));

console.log("Ma requete : ");

////////////////////////////////////////////////////////////////////////////////////////
//////////////      Mes routes                            //////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

// 1er routes
// basic pour afficher "bienvenu sur ma page"
app.get("/", function (req, res){
    res.send("Bienvenu sur ma page");
    res.end;
});


// 2d routes
// Methode crade : Le traitement de la route est directement gérées dans les routes
// Serveur REST
// Get /user => JSON des utilisates
app.get("/users", function(req, res) {
    const users = ["Felix", "Aurelie"];
    // .json : 
    // transforme en Json n'importe quelle variable
    // renvoie la reponse <=> .write
    // et ferme la connexion .end
    res.json(users);
}); 

// Methode plus propre : On associe une fonction à une route
app.get("/users2",users.listUsers); 

// Methode plus propre : On associe une fonction à une route
app.use("/articles",articlesR); 

///////////////////////////////////////////////////////////////////////////////////
// PUG : system de templating : necessite d'installer PUG : npm install pug -- save
///////////////////////////////////////////////////////////////////////////////////

// Cas de base
// Ici on indique le repertoire des template
app.set('views', path.join(__dirname, 'views'));
// ici on indique qu'on utilise pug pour le sytème de templating
app.set('view engine', 'pug');
// définition de la routes
app.get("/hello",function(req, res){
    // la view à appeler
    res.render("hello");
    // pas besoin de end, la connextion est automatiqument fermée
}); 


// Pour aller plus loin
app.get("/form/form.html",function(req, res){
    // On passe un JSOn à la vue pour affichage
    const title = "Création d'article";
    const produits = [];
    const p1 = {"titre" : "McBook", "prix":22};produits.push(p1);
    const p2 = {"titre" : "Iphone", "prix":12};produits.push(p2);
    const p3 = {"titre" : "Nokia3100" };produits.push(p3);
    res.render("article", {
        "myTitle": title,
        "inventaire" : produits
    });
});

///////////////////////////////////////////////////////////////////////////////////
// exercice login
///////////////////////////////////////////////////////////////////////////////////

app.get("/loginF",function(req, res){
    // On passe un JSOn à la vue pour affichage
    res.render("login", {});
});

// Methode plus propre : On associe une fonction à une route
app.use("/login",loginR);

const server = http.createServer(app);
server.listen(3001);
