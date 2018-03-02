interface Personne {
    showDescription():string;
}

class Utilisateur implements Personne{
    description:string;
    constructor(public nom : string, public prenom : string) {
        this.description = " " + this.nom + " " + this.prenom;
    }

    showDescription(): string {
        return this.description
    }

}


function disBonjour2(utilisateur : Personne): string {
    return "bonjour" + utilisateur.showDescription();
}

function disBonjour(utilisateur : Utilisateur): string {
    return "bonjour" + utilisateur.nom;
}

const user = new Utilisateur("sportelli","Felix");
console.log(disBonjour(user));
console.log(disBonjour2(user));

// document.body.innerHTML = disBonjour(user);
