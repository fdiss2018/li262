class People {
    constructor (nom, prenom, age = 18) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    getNomComplet(){
        return this.nom + " " + this.prenom;
    }

    get identite() {
        return this.nom.toUpperCase() + " " + this.prenom;
    }

}

class Custumer extends People{
    constructor (numClient, nom, prenom, age) {
        super(nom, prenom, age);
        this.numClient = numClient;
        this.articles = [];
    }

    get identite() {
        return "Client " + this.numClient + " - " + super.identite;
    }

    addArticle(article) {
        this.articles.push(article);
    }

    ShowCA() {
        let total = 0;
        for ( let i = 0; i< this.articles.length; i++) {
            this.articles[i].ShowArticle();   
            total += this.articles[i].price;
        }
        console.log("------------------");
        console.log("total : " + total);
    }

}

class Article {
    constructor (idArticle, article, price) {
        this.idArticle = idArticle;
        this.article = article;
        this.price = price;
    }

    ShowArticle() {
        console.log("Id : " + this.idArticle + " - Article : " + this.article + " - Price : " + this.price);
    }
}


let felix = new People("Filicci", "Felix", 32);
console.log("Nom : " + felix.nom);
console.log("Prenom : " + felix.prenom);
console.log("Age : " + felix.age);
console.log(felix.getNomComplet());
console.log(felix.identite);

console.log("--- === === ---");

let client = new Custumer(123, "Terolu", "Fabien");
console.log("Nom : " + client.nom);
console.log("Prenom : " + client.prenom);
console.log("Age : " + client.age);
console.log(client.getNomComplet());
console.log(client.identite);

console.log("--- === === ---");

client.addArticle(new Article(1, "Crayon", 5));
client.addArticle(new Article(2, "Papier", 7,5));
client.addArticle(new Article(3, "Regle", 2));
client.ShowCA();
