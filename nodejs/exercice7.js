// charger le module Http
const http = require('http');

const loadxml = require('./modules/loadxml');

http.createServer(function (requete, reponse) {
   
    console.log("requête reçue");
    reponse.writeHead(200,{"Content-Type": "text/html"});

    loadxml.getUsers(function(err, users) {
        if(err){
            reponse.write("Erreur ! " + err + "<BR>");
        }else {
            for( let i = 0; i<users.length; i++){
                const user = users[i];
                reponse.write(" -  " + user.id + " " + user.nom + " " + user.prenom + "<br>");
            }
        }
        reponse.end("On ferme la connexion");
    });
    // finit obligatoirement par un .end sinon la connexion reste ouvert.
    
}).listen(3000);