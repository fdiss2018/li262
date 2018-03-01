// chargement du module FS : FileSystem
const fs = require('fs');

// chargement du module url
const xml2js = require('xml2js');

exports.saveUser =  function(user, cb){

    try {
  
        console.log("try ...");
        // fichier de trace
        

        const builder  = new xml2js.Builder();
        const json = {};

        json.utilisateur = user;
        // on ajote un id
        json.utilisateur.$ = {};
        json.utilisateur.$.id = "23";

        const xml = builder.buildObject(json);
        console.log(xml);


        const pathTrace = "./exercice8/"+user.nom+"_"+user.prenom+".xml";
        console.log("ecriture du xml ...");
        // Retourne la liste des urls en lisant le fichier de trace
        fs.writeFile(pathTrace, xml ,function(err){
            if(err) {
                console.log("Erreur ecriture  : " + err);
                cb(err);
            } else {
                // On charge les data
                console.log("ecriture dans le fichier  ");
           }
        }); 
    } catch (erreur) {
        console.log( "KO : " + erreur);
    } finally {
        // 
    }

}
   
