Template.search.events({
    'submit .formtri': function(e,t){
        // au submit du form .formtri récupère les values des inputs
        e.preventDefault();
        // prevent default reste sur la même page à l'action
        // crée manafilter qui correspond à la value récupéré de l'input de classe mana (parseInt transforme la value en integer)
        Session.set('manaFilter', parseInt($('.mana').val()));
        Session.set('priceFilter', parseInt($('.price').val()));
        Session.set('raretéFilter', $('.rareté').val());
        Session.set('typeFilter', $('.type').val());
        Session.set('éditionFilter', $('.édition').val());
        Session.set('premiumFilter', $('.premium').val());
        Session.set('nameFilter', $('.name').val());

    }
});

Template.search.helpers({
     // _.uniq évite les doublons
    type: function (){ return _.uniq(Blanc.find({}, {
    // sort tri par ordre alphabétique avec 1 (-1 tri ordre inversé)/ fields cherche dans la collection les fields type
    sort: {type: 1}, fields: {type: true}
    }).map(function(x) {
    return x.type;
    }), true);
    },

    édition: function (){ return _.uniq(Blanc.find({}, {
        sort: {édition: 1}, fields: {édition: true}
    }).map(function(x) {
        return x.édition;
    }), true);
    },

    rareté: function (){ return _.uniq(Blanc.find({}, {
        sort: {rareté: 1}, fields: {rareté: true}
    }).map(function(x) {
        return x.rareté;
    }), true);
    },

    prix: function (){ return _.uniq(Blanc.find({}, {
        sort: {price: 1}, fields: {price: true}
    }).map(function(x) {
        return x.price;
    }), true);
    },

    mana: function (){ return _.uniq(Blanc.find({}, {
        sort: {mana: 1}, fields: {mana: true}
    }).map(function(x) {
        return x.mana;
    }), true);
    },

    foil: function (){ return _.uniq(Blanc.find({}, {
        sort: {premium: -1}, fields: {premium: true}
    }).map(function(x) {
        return x.premium;
    }), true);
    },

    nom: function (){ return _.uniq(Blanc.find({}, {
        sort: {name: 1}, fields: {name: true}
    }).map(function(x) {
        return x.name;
    }), true);
    },

    results: function() {

        var empty = '';
        // je crée une variable qui transforme '' en integer
        var i = parseInt(empty);
        var mana = 'manaFilter';
        var price = 'priceFilter';
        var rareté = 'raretéFilter';
        var type = 'typeFilter';
        var édition = 'éditionFilter';
        var premium = 'premiumFilter';
        var name = 'nameFilter';
        // Session.equals vérifie si la variable mana est égale à la variable i('') donc cela vérifie si l'input est vide
        var manaEmptyInt = Session.equals(mana, i);
        var priceEmptyInt = Session.equals(price, i);
        var raretéEmpty = Session.equals(rareté, empty);
        var éditionEmpty = Session.equals(édition, empty);
        var nameEmpty = Session.equals(name, empty);
        var typeEmpty = Session.equals(type, empty);
        var premiumEmpty = Session.equals(premium, empty);

 // si tt les autres champs sont vide return name.
        if (manaEmptyInt && priceEmptyInt && éditionEmpty && raretéEmpty && typeEmpty && premiumEmpty) {
            return Blanc.find({
                name: Session.get(name),
            });
        }
        if (manaEmptyInt && raretéEmpty && éditionEmpty && nameEmpty && typeEmpty && premiumEmpty) {
            return Blanc.find({
                price: Session.get(price),
            });
        }
        if (raretéEmpty && priceEmptyInt && éditionEmpty && nameEmpty && typeEmpty && premiumEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
            });
        }
        if (manaEmptyInt && priceEmptyInt && nameEmpty && raretéEmpty && typeEmpty && premiumEmpty) {
            return Blanc.find({
                édition: Session.get(édition),
            });
        }
        if (manaEmptyInt && priceEmptyInt && éditionEmpty && nameEmpty && typeEmpty && premiumEmpty) {
            return Blanc.find({
                rareté: Session.get(rareté),
            });
        }
        if (manaEmptyInt && priceEmptyInt && éditionEmpty && raretéEmpty && nameEmpty && premiumEmpty) {
            return Blanc.find({
                type: Session.get(type),
            });
        }
        if (manaEmptyInt && priceEmptyInt && éditionEmpty && nameEmpty && typeEmpty && raretéEmpty) {
            return Blanc.find({
                premium: Session.get(premium),
            });
        }
        // fin de la condition un seul champ rempli
        // si tt est vide sauf le nom est un autre champ, affiche le nom
        if (priceEmptyInt && éditionEmpty && raretéEmpty && typeEmpty && premiumEmpty) {
            return Blanc.find({
                name: Session.get(name),
            });
        }
        if (manaEmptyInt && éditionEmpty && raretéEmpty && typeEmpty && premiumEmpty) {
            return Blanc.find({
                name: Session.get(name),
            });
        }
        if (manaEmptyInt && priceEmptyInt && raretéEmpty && typeEmpty && premiumEmpty) {
            return Blanc.find({
                name: Session.get(name),
            });
        }
        if (manaEmptyInt && priceEmptyInt && éditionEmpty && typeEmpty && premiumEmpty) {
            return Blanc.find({
                name: Session.get(name),
            });
        }
        if (manaEmptyInt && priceEmptyInt && éditionEmpty && raretéEmpty && premiumEmpty) {
            return Blanc.find({
                name: Session.get(name),
            });
        }
        if (manaEmptyInt && priceEmptyInt && éditionEmpty && raretéEmpty && typeEmpty) {
            return Blanc.find({
                name: Session.get(name),
            });
        }
        // fin de tt vide sauf name et autres
        // si tt est vide sauf le prix est un autre champ, affiche le prix
        if (raretéEmpty && éditionEmpty && nameEmpty && typeEmpty && premiumEmpty) {
            return Blanc.find({
                price: Session.get(price),
            });
        }
        if (manaEmptyInt && éditionEmpty && nameEmpty && typeEmpty && premiumEmpty) {
            return Blanc.find({
                price: Session.get(price),
            });
        }
        if (manaEmptyInt && raretéEmpty && nameEmpty && typeEmpty && premiumEmpty) {
            return Blanc.find({
                price: Session.get(price),
            });
        }
        if (manaEmptyInt && raretéEmpty && éditionEmpty && typeEmpty && premiumEmpty) {
            return Blanc.find({
                price: Session.get(price),
            });
        }
        if (manaEmptyInt && raretéEmpty && éditionEmpty && nameEmpty && premiumEmpty) {
            return Blanc.find({
                price: Session.get(price),
            });
        }
        if (manaEmptyInt && raretéEmpty && éditionEmpty && nameEmpty && typeEmpty) {
            return Blanc.find({
                price: Session.get(price),
            });
        }
        // fin de tt vide sauf name et prix
        // si un seul champ est vide affiche return les autres
        if (manaEmptyInt) {
            return Blanc.find({
                price: Session.get(price),
                rareté: Session.get(rareté),
                type: Session.get(type),
                édition: Session.get(édition),
                premium: Session.get(premium),
                name: Session.get(name),
            });
        }
        if (priceEmptyInt) {
            return Blanc.find({
                mana: Session.get(mana),
                rareté: Session.get(rareté),
                type: Session.get(type),
                édition: Session.get(édition),
                premium: Session.get(premium),
                name: Session.get(name),
            });
        }
        if (raretéEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                price: Session.get(price),
                type: Session.get(type),
                édition: Session.get(édition),
                premium: Session.get(premium),
                name: Session.get(name),
            });
        }
        if (nameEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                price: Session.get(price),
                rareté: Session.get(rareté),
                type: Session.get(type),
                édition: Session.get(édition),
                premium: Session.get(premium),
            });
        }
        if (éditionEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                price: Session.get(price),
                rareté: Session.get(rareté),
                type: Session.get(type),
                premium: Session.get(premium),
                name: Session.get(name),
            });
        }
        if (premiumEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                price: Session.get(price),
                rareté: Session.get(rareté),
                type: Session.get(type),
                édition: Session.get(édition),
                name: Session.get(name),
            });
        }
        if (typeEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                price: Session.get(price),
                rareté: Session.get(rareté),
                édition: Session.get(édition),
                premium: Session.get(premium),
                name: Session.get(name),
            });
        }
        // fin de la condition un seul champ vide
        else {
            return Blanc.find({
                mana: Session.get(mana),
                price: Session.get(price),
                rareté: Session.get(rareté),
                type: Session.get(type),
                édition: Session.get(édition),
                premium: Session.get(premium),
                name: Session.get(name),
            });
        }
    }
});
