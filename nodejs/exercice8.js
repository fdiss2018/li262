// charger les modules 
const http = require('http');
const loadxml = require('./modules/loadxml');
const url = require('url');
const fs = require('fs');
const savexml = require('./exercice8/writexml');

http.createServer(function (requete, reponse) {
   
    console.log("requête reçue");
    reponse.writeHead(200,{"Content-Type": "text/html"});


    // Analyse de la requête
    const urlappelee = requete.url;
    const urlObjet = url.parse(urlappelee, true);


    if (urlObjet.pathname == "/register") {

        let myBuffer = "";

        console.log("url sans param : " + urlObjet.pathname);
        console.log("Arguments : ") ;
        let user = {};
        for(const key in urlObjet.query){
            user[key] = urlObjet.query[key];
            console.log("Arg  "+key + ":" + urlObjet.query[key]) ;
        }
        console.log("End connexion");
        reponse.end("Bye");

        const pathTrace = "./exercice8/log.xml";
        
        // ecrire dans un fichier
        console.log("Url à tracer ...");
        // Ecrit l'url vistées dans un fichier de log.

        savexml.saveUser(user, function(err, users) {
            if(err){
                reponse.write("Erreur ! " + err + "<BR>");
            }else {
                reponse.end("inscription ok");
            }
            reponse.end("On ferme la connexion");
        });

    } else {
        // idealement traiter toutes les url et declencher du 404 pour mauvaise adresse ou du 301 pour la redirection.

        // On retourne la page de formulaire
        fs.readFile("./exercice8/form.html", function(err, data){
            if(err) {
                console.log(err);
            } else {
                reponse.write(data);
            }
            // fermeture de la connexion
            console.log("End connexion");
            reponse.end();
        });
    }
    
}).listen(3000);