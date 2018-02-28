// charger le module Http
const http = require('http');

http.createServer(function (requete, reponse) {
    console.log("requête reçue");
    reponse.writeHead(200,{"Content-Type": "text/html"});
    reponse.write("Bonjour!<BR>");
    // finit obligatoirement par un .end sinon la connexion reste ouvert.
    reponse.end("Bye");
}).listen(3000);