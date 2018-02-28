// charger le module Http
const http = require('http');

// chargement du module FS : FileSystem
const fs = require('fs');


http.createServer(function (requete, reponse) {
    console.log("requête reçue");
    reponse.writeHead(200,{"Content-Type": "text/html"});

    // 
    fs.readFile("./resources/exemple.html", function(err, data){
        if(err) {
            console.log(err);
        } else {
            reponse.write(data);
        }
        // fermeture de la connexion
        reponse.end("Bye");
    });
   
}).listen(3000);
 