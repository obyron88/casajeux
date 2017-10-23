// crée une collection coté client pour évier de surcharger celle coté serveur
Panierlist = new Mongo.Collection('panierlist', {connection: null});
