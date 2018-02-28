// charger le module Http
const http = require('http');

const module1 = require('./modules/module1');

http.createServer(function (requete, reponse) {
    console.log("requête reçue");
    reponse.writeHead(200,{"Content-Type": "text/html"});
    // reponse.write("Bonjour!<BR>");
    reponse.write(module1.disBonjour()+"!<BR>");
    reponse.write(module1.disQlqc("Rebonjour")+"!<BR>");
    // finit obligatoirement par un .end sinon la connexion reste ouvert.
    reponse.end("Bye");
}).listen(3000);
