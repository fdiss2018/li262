// charger le module Http
const http = require('http');

// chargement du module FS : FileSystem
const fs = require('fs');
// chargement du module url
const url = require('url');

http.createServer(function (requete, reponse) {
    console.log("Requête reçue");
    reponse.writeHead(200,{"Content-Type": "text/html"});

    try {
  
        console.log("try ...");
        // fichier de trace
        const pathTrace = "./resources/access.log";

        // trace les urls visitées
        const urlappelee = requete.url;
        const urlObjet = url.parse(urlappelee, true);
        let myBuffer = "\n";
        myBuffer += " L'url' " + urlObjet.pathname + "\n";
        myBuffer += " Les paramêtres " + JSON.stringify(urlObjet.query) + "\n";

        // Detection qu'on reçoit un paramêtre indiquant que le fichier est supprimé
        console.log("Analyse paramêtres ...");
        let delFile = false;
        for(const key in urlObjet.query){
            if ( key == "delete" && urlObjet.query[key] == "true"){
                delFile = true;
            }
        }        

        if (!delFile) {
            console.log("Url à tracer ...");
            // Ecrit l'url vistées dans un fichier de log.
            if ("/favicon.ico" != urlObjet.pathname) {
                fs.appendFile(pathTrace, myBuffer,  function(err){
                    if(err) {
                        console.log(err);
                    } else {
                        reponse.write("<br>Url tracée ");
                    }
                    // reponse.end("<br>Fin connexion");
                });
            }
            console.log("Lecure des Urls tracées ...");
            // Retourne la liste des urls en lisant le fichier de trace
            fs.readFile(pathTrace, function(err, data){
                if(err) {
                    console.log(err);
                } else {
                    reponse.write("<br>Les urls visitées ");
                    
                    reponse.write("<BR>"+data);
                }
                // fermeture de la connexion
                reponse.end("<Br>Fin connexion");
            });
        } else {    
            // Si on reçoit le parametre delete à true on supprime le fichier
            console.log( "Suppression du fichier de log ");
            reponse.write("<br>Suppression du fichier de log");
            fs.unlink(pathTrace, function(err){
                if(err) {
                    console.log("Erreur de suppression :" + err);
                } else {
                    reponse.write("<br>Trace supprimée");
                }
                reponse.end("<Br>Fin connexion");
            });
        }


    } catch (erreur) {
        console.log( "KO : " + erreur);
        reponse.write("KO : "+ erreur +" <br>");
        reponse.end("<Br>Finally : Fin connexion");
    } finally {
        // 
    }
   
}).listen(3000);
