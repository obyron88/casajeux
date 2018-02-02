Meteor.subscribe("panierlist");

Template.panierlist.helpers({
     panierlist: function(){return Panierlist.find()},
    // fixe le template prixtotal à 0
    prixtotal: function () {prixtotal = 0;
    //cherche dans la collection les fields avec itemprice et parcour le document avec map
    Panierlist.find({}, {fields:{itemprice:1}}).map(function(doc) {
        // le prixtotal est égal à tt les itemprice du doc additionné
            prixtotal += doc.itemprice;
        });
        return Math.round(prixtotal*100)/100;
    },
});


//applique un event sur le template pizzas
Template.blanc.events({
    // aplique l'event quand on submit à partir du formulaire de classe formu
    'submit .formu'(event) {
        //reste sur la page même après avoir submit à partir du bouton
    event.preventDefault();
// crée une variable qui va appliquer un event sur la value de l'input avec pour name countitem ciblé par target parseint transforme en int au lieu de string
        var inputcount =  parseInt(event.target.countitem.value);
// insère dans la collection Panierlist
    Panierlist.insert({
        //crée le template countitem qui est égal  à la value de l'input count
        // (affiche la value inputcount dans l'html en marquant {{countitem}}
        countitem:inputcount,
        //crée le template itemprice qui est égal  à la value de l'inputcount* le prix
        itemprice:Math.round((this.price*inputcount)*100)/100,
        //créer un tamplate qui est égal au name de la collection Panierlist
        name:this.name,
        price:this.price,
        image:this.image,
        couleur:this.couleur,
        édition:this.édition,
        état:this.état,
        premium:this.premium,
        langue:this.langue,
        rareté:this.rareté,
        type:this.type,
        mana:this.mana,
        stock:this.stock
    });
},

});
Template.bleu.events({
    'submit .formu'(event) {
        event.preventDefault();

        var inputcount =  parseInt(event.target.countitem.value);

        Panierlist.insert({
            countitem:inputcount,
            itemprice:Math.round((this.price*inputcount)*100)/100,
            name:this.name,
            price:this.price,
            image:this.image,
            couleur:this.couleur,
            édition:this.édition,
            état:this.état,
            premium:this.premium,
            langue:this.langue,
            rareté:this.rareté,
            type:this.type,
            mana:this.mana,
            stock:this.stock
        });
    },
});
Template.noir.events({
    'submit .formu'(event) {
        event.preventDefault();

        var inputcount =  parseInt(event.target.countitem.value);

        Panierlist.insert({
            countitem:inputcount,
            itemprice:Math.round((this.price*inputcount)*100)/100,
            name:this.name,
            price:this.price,
            image:this.image,
            couleur:this.couleur,
            édition:this.édition,
            état:this.état,
            premium:this.premium,
            langue:this.langue,
            rareté:this.rareté,
            type:this.type,
            mana:this.mana,
            stock:this.stock
        });
    },
});

Template.rouge.events({
    'submit .formu'(event) {
        event.preventDefault();

        var inputcount =  parseInt(event.target.countitem.value);

        Panierlist.insert({
            countitem:inputcount,
            itemprice:Math.round((this.price*inputcount)*100)/100,
            name:this.name,
            price:this.price,
            image:this.image,
            couleur:this.couleur,
            édition:this.édition,
            état:this.état,
            premium:this.premium,
            langue:this.langue,
            rareté:this.rareté,
            type:this.type,
            mana:this.mana,
            stock:this.stock
        });
    },
});

Template.vert.events({
    'submit .formu'(event) {
        event.preventDefault();

        var inputcount = parseInt(event.target.countitem.value);

        Panierlist.insert({
            countitem:inputcount,
            itemprice:Math.round((this.price*inputcount)*100)/100,
            name:this.name,
            price:this.price,
            image:this.image,
            couleur:this.couleur,
            édition:this.édition,
            état:this.état,
            premium:this.premium,
            langue:this.langue,
            rareté:this.rareté,
            type:this.type,
            mana:this.mana,
            stock:this.stock
        });
    },
});

Template.vert.events({
    'submit .formu'(event) {
        event.preventDefault();
       // parseint transforme en int au lieu de string
        var inputcount = parseInt(event.target.countitem.value);

        Panierlist.insert({
            countitem:inputcount,
            itemprice:Math.round((this.price*inputcount)*100)/100,
            name:this.name,
            price:this.price,
            image:this.image,
            couleur:this.couleur,
            édition:this.édition,
            état:this.état,
            premium:this.premium,
            langue:this.langue,
            rareté:this.rareté,
            type:this.type,
            mana:this.mana,
            stock:this.stock
        });
    },
});

Template.multicolore.events({
    'submit .formu'(event) {
        event.preventDefault();
        //parseint transforme en int au lieu de string
        var inputcount = parseInt(event.target.countitem.value);

        Panierlist.insert({
            countitem:inputcount,
            itemprice:Math.round((this.price*inputcount)*100)/100,
            name:this.name,
            price:this.price,
            image:this.image,
            couleur:this.couleur,
            édition:this.édition,
            état:this.état,
            premium:this.premium,
            langue:this.langue,
            rareté:this.rareté,
            type:this.type,
            mana:this.mana,
            stock:this.stock
        });
    },
});

Template.panierlist.events({
    // au click sur l'élément avec la classe supprimer
    'click .supprimer'(event){
        event.preventDefault();
// remove dans la collection Panierlist
        Panierlist.remove({
            _id:this._id
        })
    },
});

Template.panierlist.events({
    //au click sur la classe inputcompt fait un event
    'click .inputcompt'(){
//crée une variable qui va récupérer la value en jquery de la classe id et donc par l'id parseint transforme en int au lieu de string
        var inputcount = parseInt($("."+this._id+"").val());
// va update dans la collection Panierlist à partir de l'id toute les infos ci dessous au click sur l'input
        Panierlist.update(this._id, {
            countitem:inputcount,
            itemprice:Math.round((this.price*inputcount)*100)/100,
            name:this.name,
            image:this.image,
            price:this.price,
            couleur:this.couleur,
            édition:this.édition,
            état:this.état,
            premium:this.premium,
            langue:this.langue,
            rareté:this.rareté,
            type:this.type,
            mana:this.mana,
            stock:this.stock,
            _id:this._id
        });
    },
});

