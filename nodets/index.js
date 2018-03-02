const express = require("express");
const http = require("http");
const path = require("path");
const app = express();

// permet d'indiquer que la requete s'appuie sur le repertoire static pour afficher une ressource (coté client).
app.use(express.static(path.join(__dirname, 'static')));



const server = http.createServer(app);
server.listen(3001);
