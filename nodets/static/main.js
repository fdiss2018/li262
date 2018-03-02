var Utilisateur = /** @class */ (function () {
    function Utilisateur(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
        this.description = " " + this.nom + " " + this.prenom;
    }
    Utilisateur.prototype.showDescription = function () {
        return this.description;
    };
    return Utilisateur;
}());
function disBonjour2(utilisateur) {
    return "bonjour" + utilisateur.showDescription();
}
function disBonjour(utilisateur) {
    return "bonjour" + utilisateur.nom;
}
var user = new Utilisateur("sportelli", "Felix");
console.log(disBonjour(user));
console.log(disBonjour2(user));
// document.body.innerHTML = disBonjour(user);
