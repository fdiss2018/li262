// charger le module Http
const http = require('http');

const url = require('url');


http.createServer(function (requete, reponse) {
    console.log("requête reçue");
    reponse.writeHead(200,{"Content-Type": "text/html"});

    // url demandée
    const urlappelee = requete.url;
    console.log("url appel : " + urlappelee + "<br>");
    reponse.write("url appel : " + urlappelee + "<br>") ;

    // Type de requete : GET/POST
    const method = requete.method;
    reponse.write("type requete : " + method + "<br>") ;

    // Distinguer Url et parametres du get
    const urlObjet = url.parse(urlappelee, true);
    reponse.write("url sans param : " + urlObjet.pathname + "<br>") ;
    reponse.write("Arguments : <br>") ;
    for(const key in urlObjet.query){
        reponse.write("Arg  "+key + ":" + urlObjet.query[key] + "<br>") ;
    }
    // affichage du JSON dans la console log
    console.log(urlObjet.query);

    // 

    // fermeture de la connexion
    reponse.end("Bye");
}).listen(3000);
 