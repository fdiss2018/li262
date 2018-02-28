let lstPeople = [];

$(document).ready(function(){
    $.ajax(
        {
            "url": "/js/Ajax/serveur_liste.php",
            "type":"GET"
            
        }
    ).done(function(data) {
        lstPeople = JSON.parse(data);
        console.log(lstPeople);
        afficheTableau();

    }).fail(function() {
        // gestion des exceptions
        console.log("Appel Ajax en erreur");
        // throw "Appel Ajax en erreur";
    }).always(function () {
        // Avec ou sans erreur on passe ici
        console.log("Je passe toujours ici");
    });
});


function afficheTableau() {
    document.querySelector("#lstPersonne").innerHTML = "";
    for (let i = 0; i < lstPeople.length; i++) {

        let IdB = "myButton" + lstPeople[i].id;

        document.querySelector("#lstPersonne").innerHTML += "<TR>";
        document.querySelector("#lstPersonne").innerHTML += "<TD>" + lstPeople[i].id + "</TD><TD>" + lstPeople[i].nom + "</TD><TD>" + lstPeople[i].prenom + "</TD><TD>" + lstPeople[i].age + "</TD>" + '<TD><input type="button" id = "' + IdB + '" value = "DEL"></TD>';
        document.querySelector("#lstPersonne").innerHTML += "</TR>";

        // console.log(document.querySelector("#"+Id)+ " _ " + Id);
    }

    for (let i = 0; i < lstPeople.length; i++) {
            let IdB = "myButton" + lstPeople[i].id;
            document.querySelector("#" + IdB).onclick = function () {
            DelLigne(lstPeople[i].id);
        };
    }
}

let DelLigne = function (id) {
    console.log(id);
    for (let j = 0; j < lstPeople.length; j++) {
        if (lstPeople[j].id == id) {
            lstPeople.splice(j, 1);
        }
    }
    afficheTableau();
}