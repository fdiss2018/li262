class People {
    constructor(nom, prenom, age = 18) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    getNomComplet() {
        return this.nom + " " + this.prenom;
    }

    get identite() {
        return this.nom.toUpperCase() + " " + this.prenom;
    }

    get Id() {
        return this.id;
    }

}

export { People };

