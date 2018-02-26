let tab1 = [1, 2, 3];
let tab2 = [4, 5];

let tab3 = [];
tab3.push(tab1) ;
tab3.push(tab2) ;
console.log(tab3);

console.log("methode concat 0  (sans le 0)");
tab3 = [];
tab3 = tab2.concat(tab1);
console.log(tab3);

console.log("methode concat 1");
tab3 = [];
tab3.push(0) 
tab3 = tab3.concat(tab2.concat(tab1));
console.log(tab3);

console.log("methode concat 2");
tab3 = [0];
tab3 = tab3.concat(tab2).concat(tab1);
console.log(tab3);

console.log("methode concat 3");
tab3 = [0, ...tab1, ...tab2];
console.log(tab3);


console.log("-== Next ==-");

const somme = function(a, b, c ,d){
    return a+b+c+d;
}
let tab4 = [1, 2, 3, 4];
console.log("C'est pareil  : " + somme(tab4[0], tab4[1], tab4[2], tab4[3]));
console.log("Et : " + somme(...tab4));
tab4 = [1, 2, 3, 4, 5];
console.log("trop de  de $, on ignore ceux en trop : " + somme(...tab3));
tab4 = [1, 2, 3 ];
console.log("Pas assez de $ => NAN : " + somme(...tab4));

const identité = { "Nom": "dis", "prenom" : "franck"};
const tabEnfants = { "enfant": ["léo", "Léa"]};

let personne = {...identité, ...tabEnfants};
console.log("Ma personne  : ");
console.log(personne);

