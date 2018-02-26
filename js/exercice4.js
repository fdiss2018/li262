function extractObject(utilisateur){
    return {"id" : utilisateur.id, "nom" : utilisateur.nom}
}

function extractTab(utilisateur){
    return [utilisateur.id, utilisateur.nom];
}

const user = { "id" : 1, "nom": "dis", "prenom" : "franck"};

console.log(" Extraction d'objet:  id et nom doivent oprter le bon nom ");
console.log(extractObject(user));
let {id, nom} = extractObject(user);
console.log(id);
console.log(nom);

console.log(" Extraction de tableau, peut importe le le nom de la var ID et NOM l'ordre compte");
let [id2, nom2] = extractTab(user);
console.log(id);
console.log(nom);

