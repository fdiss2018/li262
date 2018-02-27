class People {
    constructor(id, nom, prenom, age = 18) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.id = Math.floor(Math.random()) * 1000;
        this.id = id;
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

export {People};

