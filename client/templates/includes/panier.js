// crée le template paniercount qui va afficher le nombre d'objets dans la collection Panierlist
Template.panier.helpers({
    paniercount: function(){return Panierlist.find().count()}
});