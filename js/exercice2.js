console.log("Bonjour");
// ---
function bonjour() {
    console.log("Hello");
}
bonjour();
// ---
function affSomme(a, b) {
    console.log( "Méthode def func 1 : " +  (a + b));
}
affSomme(5, 4);

// ---
affSomme(5, "3");

// ---
function Somme(a, b) {
    return a + b;
}
console.log( "Méthode def func 2 : " +  Somme(8, 4));

// ---
let sommeVar = function(a, b) {
    return a + b;
}
console.log( "Méthode def func 3 : " +  sommeVar(5, 4));

//  
let disBonjour = function() {
    console.log("Bonjour");
}

let lanceFonction = function(maFunc) {
    console.log("On va lancer ..."  + maFunc.name);
    setTimeout(() => {
        maFunc();
    }, 3000);
    console.log("c'est lancé");
}

lanceFonction(disBonjour);


// Step 2 : définir les méthodes d'un objet javascript
console.log(" -== STEP 2 ==- ");

let client = {};
client.nom = "Dupont";
client.prenom = "Marc";
client.disBonjour = disBonjour;
client.disBonjour();

client.commandes = [132, 46, 789]

client.getCommandes = function(){
    return this.commandes.length;
}

console.log(" Nombre de commande : "  + client.getCommandes());

client.ajoutCommande = function (nouvelleCommande) {
    this.commandes.push(nouvelleCommande);
}

client.ajoutCommande(54687);
console.log(" Nombre de commande maintenant : "  + client.getCommandes());

// Step 3 : définir l'age
client.age = 12;
client.isMajeur = function(){
    if(this.age >= 18) {
        return true;
    } else {
        return false;
    }
    // return this.age>=18;
    // let majeur = (this.age>=18)? true:false;
}

client.vielli = function(annee){
    this.age += annee;
}

client.afficheAge = function(annee){
    console.log ( "Age : " + this.age);
    console.log ( "Majeur : " + this.isMajeur());
}

client.afficheAge();
client.vielli(10);
client.afficheAge();