Meteor.subscribe("panierlist");
// crée le template paniercount qui va afficher le nombre d'objets dans la collection Panierlist
Template.panier.helpers({
    paniertotal: function(){return Panierlist.find().count()},
    paniercount: function () {paniercount = 0;
        //cherche dans la collection les fields avec countitem et parcour le document avec map
        Panierlist.find({}, {fields:{countitem:1}}).map(function(doc) {
            // le paniercount est égal à tt les countitem du doc additionné
            paniercount += doc.countitem;
        });
        return paniercount;
    },
    prixtotal: function () {prixtotal = 0;
        //cherche dans la collection les fields avec itemprice et parcour le document avec map
        Panierlist.find({}, {fields:{itemprice:1}}).map(function(doc) {
            // le prixtotal est égal à tt les itemprice du doc additionné
            prixtotal += doc.itemprice;
        });
        return Math.round((prixtotal)*100)/100;
    },
});
