// chargement du module FS : FileSystem
const fs = require('fs');

// chargement du module url
const xml2js = require('xml2js');

    try {
  
        console.log("try ...");
        // fichier de trace
        const pathTrace = "./resources/exemple.xml";

        console.log("Lecure du xml ...");
        // Retourne la liste des urls en lisant le fichier de trace
        fs.readFile(pathTrace, function(err, data){
            if(err) {
                console.log("Erreur de lecture : " + err);
            } else {
                // On charge les data
                xml2js.parseString(data, function(err2, result){
                    if(err2) {
                        console.log("Erreur de lecture : " + err2);
                    } else {
                        console.log(result);
                        // Parcours du xml
                        const noeudUtilisateur = result.utilisateurs.utilisateur;

                        // On va stocker les utilisateursdns un tableau
                        let utilisateurs = [];
                        console.log("============ Remplissage du tableau =================");
                        for ( let i = 0; i<noeudUtilisateur.length; i++) {
                            // console.log(noeudUtilisateur[i]);
                            // noeudUtilisateur[i].nom ou noeudUtilisateur[i].nom[0] : 

                            console.log(noeudUtilisateur[i].nom[0] + " "+ noeudUtilisateur[i].prenom[0] + " " + noeudUtilisateur[i].nom);

                            let indice = utilisateurs.length;
                            utilisateurs[indice] = {};
                            utilisateurs[indice].nom = noeudUtilisateur[i].nom[0];
                            utilisateurs[indice].prenom = noeudUtilisateur[i].prenom[0];
                            utilisateurs[indice].id = (noeudUtilisateur[i].$ != null)? noeudUtilisateur[i].$.id:"0";
                        }
                        console.log("=============Affichage tableau d'objets ================");
                        console.log(utilisateurs);
                    }
                });
           }
        }); 
    } catch (erreur) {
        console.log( "KO : " + erreur);
    } finally {
        // 
    }
   
