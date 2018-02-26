console.log("Bonjour");

var a = 2;
var b = 3;
var somme = a + b;
console.log(somme);
// My output concaténation
console.log("Somme : " + somme );

// Condition
// var : A bannir
// Utiliser let ou const
const d = 4
let c = 2;
if (true ) {
    // d = 4 cette ligne plante on ne peut pas modifier une const
    console.log(!false); 
}
console.log(c+d);

// Bonnes pratiques syntaxe et indentation condition 
if (a==2) {
    // blabla
} else if (a==2) {
    // blabla
} else {
    // blabla     
}


console.log("-==  Le typage ==- ");
// absence de typage : renvoie true
console.log( 2 == "2.0");
// absence de typage : renvoie false
console.log( 2 === "2.0");

// Objet JS : JSON (Javascript Object Notation)
console.log("-==  Les objets ==- ");
// Client
// => {"id" :2, "prenom" : "Felix", "Nom":"Sportelli"}
// Tableau : []
// => {"id" :2, "prenom" : "Felix", "Nom":"Sportelli"; "Commandes":[123, 423, 222]}

let client = {"id" :2, "prenom" : "Felix", "nom":"Sportelli", "commandes":[123, 423, 222]};
console.log("Nom : " + client.nom + " ou " + client["nom"]);
console.log("Commandes 1 : " + client.commandes[1]);

let testAjoutAttribut = [1212, 4545, 789]
client.testAjoutAttribut = testAjoutAttribut;
console.log("testAjoutAttribut : " + client.testAjoutAttribut);

client.lunette = "c'est vrai"
console.log("test type  : " + client.lunette);
client.lunette = true
console.log("test type  : " + client.lunette);
if (client.lunette){
    console.log(" Il a des lunettes ");
}

let pere = { "prenom" : "Thierry", "nom":"Sportelli"};
let enfantx = { "prenom" : "Marc", "nom":"Sportelli"};
pere.enfants = [enfantx, { "prenom" : "Martial", "nom":"Sportelli"} ]

console.log("le père : " + pere);
console.log("les enfants : " + pere.enfants );

// Tableaux
let tabEnfants = [];
const enfant1 = { "prenom" : "Julie", "nom":"Sportelli"};
const enfant2 = { "prenom" : "Marie", "nom":"Sportelli"};
const enfant3 = { "prenom" : "Sandra", "nom":"Sportelli"};
tabEnfants.push(enfant1);
tabEnfants.push(enfant2);
tabEnfants.push(enfant3);
// la boucle for
for (let i= 0; i< tabEnfants.length; i++) {
    console.log("Enfant : " + tabEnfants[i].prenom);
}
// la boucle while : Test effectué 
let i = 0;
while( i < tabEnfants.length) {
    console.log("Enfant : " );
    console.log(tabEnfants[i]);
    i++;
}
// la boucle while : Test effectué après
let j = 0;
do {
    console.log("Enfant : " );
    console.log(tabEnfants[j]);
    j++;
} while( j < tabEnfants.length)

console.log("-==  Post pré incremntation ==- ");
let k = 0;
console.log(++k); // affiche 1
console.log(k++); // affiche 1
console.log(k); // affiche 2

switch (pere.enfants.length) {
    case 1:
        console.log("Enfant unique");
        break;

    default:
        console.log("0 ou > 1");
        break;
}

