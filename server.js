var logNow = function(texte) { console.log(new Date()+" - "+ texte);};
logNow("---------------------------------------------------------------");
logNow("CityExplorer v1. Author: @flrent");
logNow("---------------------------------------------------------------");
logNow("Initialisation du serveur "+__dirname+" réussie.");

/* modules */
var express = require('express');
/* --------- */

/* init */
var app = express();
app.use(require('express').bodyParser());


app.configure(function(){
  app.use(express.static(__dirname + '/public'));
});


/* routes */
app.get('/', function(req, res){
	logNow("CityExplorer initialisée.");
 	res.render('./public/index.html');
});

app.listen(3000);