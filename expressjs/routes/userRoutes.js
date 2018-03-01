exports.listUsers = function(req, res) {
    const users = ["Martin", "Lucie"];
    // .json : 
    // transforme en Json n'importe quelle variable
    // renvoie la reponse <=> .write
    // et ferme la connexion .end
    res.json(users);
}