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

        // 6 champs vident -------------------------------------------------------------------------------------------

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

        // 5 champs vident --------------------------------------------------------------------------------------------

        // si tt est vide sauf le nom est un autre champ, affiche le nom et l'autre champ
        if (priceEmptyInt && éditionEmpty && raretéEmpty && typeEmpty && premiumEmpty) {
            return Blanc.find({
                name: Session.get(name),
                mana: Session.get(mana),
            });
        }
        if (manaEmptyInt && éditionEmpty && raretéEmpty && typeEmpty && premiumEmpty) {
            return Blanc.find({
                name: Session.get(name),
                price: Session.get(price),
            });
        }
        if (manaEmptyInt && priceEmptyInt && raretéEmpty && typeEmpty && premiumEmpty) {
            return Blanc.find({
                name: Session.get(name),
                édition: Session.get(édition),
            });
        }
        if (manaEmptyInt && priceEmptyInt && éditionEmpty && typeEmpty && premiumEmpty) {
            return Blanc.find({
                name: Session.get(name),
                rareté: Session.get(rareté),
            });
        }
        if (manaEmptyInt && priceEmptyInt && éditionEmpty && raretéEmpty && premiumEmpty) {
            return Blanc.find({
                name: Session.get(name),
                type: Session.get(type),
            });
        }
        if (manaEmptyInt && priceEmptyInt && éditionEmpty && raretéEmpty && typeEmpty) {
            return Blanc.find({
                name: Session.get(name),
                premium: Session.get(premium),
            });
        }
        // fin de tt vide sauf name et un autres
        // si tt est vide sauf le prix est un autre champ, affiche le prix et l'autre champ
        if (raretéEmpty && éditionEmpty && nameEmpty && typeEmpty && premiumEmpty) {
            return Blanc.find({
                price: Session.get(price),
                mana: Session.get(mana),
            });
        }
        if (manaEmptyInt && éditionEmpty && nameEmpty && typeEmpty && premiumEmpty) {
            return Blanc.find({
                price: Session.get(price),
                rareté: Session.get(rareté),
            });
        }
        if (manaEmptyInt && raretéEmpty && nameEmpty && typeEmpty && premiumEmpty) {
            return Blanc.find({
                price: Session.get(price),
                édition: Session.get(édition),

            });
        }
        if (manaEmptyInt && raretéEmpty && éditionEmpty && nameEmpty && premiumEmpty) {
            return Blanc.find({
                price: Session.get(price),
                type: Session.get(type),
            });
        }
        if (manaEmptyInt && raretéEmpty && éditionEmpty && nameEmpty && typeEmpty) {
            return Blanc.find({
                price: Session.get(price),
                premium: Session.get(premium),
            });
        }
        // fin de tt vide sauf prix et autre
        // si tt est vide sauf le mana est un autre champ, affiche le mana et l'autre champ
        if (raretéEmpty && priceEmptyInt && éditionEmpty && nameEmpty && typeEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                premium: Session.get(premium),
            });
        }
        if (raretéEmpty && priceEmptyInt && éditionEmpty && nameEmpty && premiumEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                type: Session.get(type),
            });
        }
        if (raretéEmpty && priceEmptyInt && nameEmpty && typeEmpty && premiumEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                édition: Session.get(édition),
            });
        }
        if (priceEmptyInt && éditionEmpty && nameEmpty && typeEmpty && premiumEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                rareté: Session.get(rareté),
            });
        }
        // fin de tt vide sauf mana et autre
        // si tt est vide sauf l'édition est un autre champ, affiche l'édition et l'autre champ
        if (manaEmptyInt && priceEmptyInt && nameEmpty && raretéEmpty && typeEmpty) {
            return Blanc.find({
                édition: Session.get(édition),
                premium: Session.get(premium),
            });
        }
        if (manaEmptyInt && priceEmptyInt && nameEmpty && raretéEmpty && premiumEmpty) {
            return Blanc.find({
                édition: Session.get(édition),
                type: Session.get(type),
            });
        }
        if (manaEmptyInt && priceEmptyInt && nameEmpty && typeEmpty && premiumEmpty) {
            return Blanc.find({
                édition: Session.get(édition),
                rareté: Session.get(rareté),
            });
        }
        // fin de tt vide sauf édition et autre
        // si tt est vide sauf la rareté est un autre champ, affiche la rareté et l'autre champ
        if (manaEmptyInt && priceEmptyInt && éditionEmpty && nameEmpty && typeEmpty) {
            return Blanc.find({
                rareté: Session.get(rareté),
                premium: Session.get(premium),
            });
        }
        if (manaEmptyInt && priceEmptyInt && éditionEmpty && nameEmpty && premiumEmpty) {
            return Blanc.find({
                rareté: Session.get(rareté),
                type: Session.get(type),
            });
        }
        // fin de tt vide sauf rareté et autre
        // si tt est vide sauf le type est un autre champ, affiche le type et l'autre champ
        if (manaEmptyInt && priceEmptyInt && éditionEmpty && raretéEmpty && nameEmpty) {
            return Blanc.find({
                type: Session.get(type),
                premium: Session.get(premium),
            });
        }
        // fin de tt vide sauf type et autre (premium ok)

        // 3 champs vident ------------------------------------------------------------------------------------------

        // début de name.............................................................................................
        // début name price
        if (nameEmpty && priceEmptyInt && manaEmptyInt) {
            return Blanc.find({
                rareté: Session.get(rareté),
                type: Session.get(type),
                édition: Session.get(édition),
                premium: Session.get(premium),
            });
        }
        if (nameEmpty && priceEmptyInt && éditionEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                rareté: Session.get(rareté),
                type: Session.get(type),
                premium: Session.get(premium),
            });
        }
        if (nameEmpty && priceEmptyInt && raretéEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                type: Session.get(type),
                édition: Session.get(édition),
                premium: Session.get(premium),
            });
        }
        if (nameEmpty && priceEmptyInt && typeEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                rareté: Session.get(rareté),
                édition: Session.get(édition),
                premium: Session.get(premium),
            });
        }
        if (nameEmpty && priceEmptyInt && premiumEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                rareté: Session.get(rareté),
                type: Session.get(type),
                édition: Session.get(édition),
            });
        }
        // fin name price
        // début name mana
        if (nameEmpty && manaEmptyInt && éditionEmpty) {
            return Blanc.find({
                rareté: Session.get(rareté),
                type: Session.get(type),
                price: Session.get(price),
                premium: Session.get(premium),
            });
        }
        if (nameEmpty && manaEmptyInt && raretéEmpty) {
            return Blanc.find({
                price: Session.get(price),
                type: Session.get(type),
                édition: Session.get(édition),
                premium: Session.get(premium),
            });
        }
        if (nameEmpty && manaEmptyInt && typeEmpty) {
            return Blanc.find({
                price: Session.get(price),
                rareté: Session.get(rareté),
                édition: Session.get(édition),
                premium: Session.get(premium),
            });
        }
        if (nameEmpty && manaEmptyInt && premiumEmpty) {
            return Blanc.find({
                price: Session.get(price),
                rareté: Session.get(rareté),
                type: Session.get(type),
                édition: Session.get(édition),
            });
        }
        // fin name mana
        // début name édition
        if (nameEmpty && éditionEmpty && raretéEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                price: Session.get(price),
                type: Session.get(type),
                premium: Session.get(premium),
            });
        }
        if (nameEmpty && éditionEmpty && typeEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                price: Session.get(price),
                rareté: Session.get(rareté),
                premium: Session.get(premium),
            });
        }
        if (nameEmpty && éditionEmpty && premiumEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                price: Session.get(price),
                rareté: Session.get(rareté),
                type: Session.get(type),
            });
        }
        // fin name édition
        // début name rareté
        if (nameEmpty && raretéEmpty && typeEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                price: Session.get(price),
                premium: Session.get(premium),
                édition: Session.get(édition),
            });
        }
        if (nameEmpty && raretéEmpty && premiumEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                price: Session.get(price),
                édition: Session.get(édition),
                type: Session.get(type),
            });
        }
        // fin name rareté
        // début name type
        if (nameEmpty && typeEmpty && premiumEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                price: Session.get(price),
                édition: Session.get(édition),
                rareté: Session.get(rareté),
            });
        }
        // fin name type et premium par la même accasion
        // fin de name...............................................................................................

        // 2 champs vident ------------------------------------------------------------------------------------------

        //si 2 champs sont vides return les autres
        // début mana
        if (manaEmptyInt && priceEmptyInt) {
            return Blanc.find({
                rareté: Session.get(rareté),
                type: Session.get(type),
                édition: Session.get(édition),
                premium: Session.get(premium),
                name: Session.get(name),
            });
        }
        if (manaEmptyInt && nameEmpty) {
            return Blanc.find({
                price: Session.get(price),
                rareté: Session.get(rareté),
                type: Session.get(type),
                édition: Session.get(édition),
                premium: Session.get(premium),
            });
        }
        if (manaEmptyInt && éditionEmpty) {
            return Blanc.find({
                price: Session.get(price),
                rareté: Session.get(rareté),
                type: Session.get(type),
                premium: Session.get(premium),
                name: Session.get(name),
            });
        }
        if (manaEmptyInt && raretéEmpty) {
            return Blanc.find({
                price: Session.get(price),
                type: Session.get(type),
                édition: Session.get(édition),
                premium: Session.get(premium),
                name: Session.get(name),
            });
        }
        if (manaEmptyInt && typeEmpty) {
            return Blanc.find({
                price: Session.get(price),
                rareté: Session.get(rareté),
                édition: Session.get(édition),
                premium: Session.get(premium),
                name: Session.get(name),
            });
        }
        if (manaEmptyInt && premiumEmpty) {
            return Blanc.find({
                price: Session.get(price),
                rareté: Session.get(rareté),
                type: Session.get(type),
                édition: Session.get(édition),
                name: Session.get(name),
            });
        }
        // fin mana
        // début price
        if (priceEmptyInt && nameEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                rareté: Session.get(rareté),
                type: Session.get(type),
                édition: Session.get(édition),
                premium: Session.get(premium),
            });
        }
        if (priceEmptyInt && éditionEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                rareté: Session.get(rareté),
                type: Session.get(type),
                premium: Session.get(premium),
                name: Session.get(name),
            });
        }
        if (priceEmptyInt && raretéEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                type: Session.get(type),
                premium: Session.get(premium),
                name: Session.get(name),
                édition: Session.get(édition),
            });
        }
        if (priceEmptyInt && typeEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                édition: Session.get(édition),
                premium: Session.get(premium),
                name: Session.get(name),
                rareté: Session.get(rareté),
            });
        }
        if (priceEmptyInt && premiumEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                rareté: Session.get(rareté),
                édition: Session.get(édition),
                name: Session.get(name),
                type: Session.get(type),
            });
        }
        // fin price
        // début name
        if (nameEmpty && éditionEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                price: Session.get(price),
                rareté: Session.get(rareté),
                type: Session.get(type),
                premium: Session.get(premium),
            });
        }
        if (nameEmpty && raretéEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                price: Session.get(price),
                type: Session.get(type),
                édition: Session.get(édition),
                premium: Session.get(premium),
            });
        }
        if (nameEmpty && typeEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                price: Session.get(price),
                rareté: Session.get(rareté),
                édition: Session.get(édition),
                premium: Session.get(premium),
            });
        }
        if (nameEmpty && premiumEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                price: Session.get(price),
                rareté: Session.get(rareté),
                type: Session.get(type),
                édition: Session.get(édition),
            });
        }
        // fin name
        // début édition
        if (éditionEmpty && raretéEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                price: Session.get(price),
                type: Session.get(type),
                premium: Session.get(premium),
                name: Session.get(name),
            });
        }
        if (éditionEmpty && typeEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                price: Session.get(price),
                rareté: Session.get(rareté),
                premium: Session.get(premium),
                name: Session.get(name),
            });
        }
        if (éditionEmpty && premiumEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                price: Session.get(price),
                rareté: Session.get(rareté),
                type: Session.get(type),
                name: Session.get(name),
            });
        }
        // fin édition
        // début rareté
        if (raretéEmpty && typeEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                price: Session.get(price),
                édition: Session.get(édition),
                premium: Session.get(premium),
                name: Session.get(name),
            });
        }
        if (raretéEmpty && premiumEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                price: Session.get(price),
                type: Session.get(type),
                édition: Session.get(édition),
                name: Session.get(name),
            });
        }
        // fin rareté
        // début type
        if (typeEmpty && premiumEmpty) {
            return Blanc.find({
                mana: Session.get(mana),
                price: Session.get(price),
                rareté: Session.get(rareté),
                édition: Session.get(édition),
                name: Session.get(name),
            });
        }
        // fin type et premium est ok

        // 1 champ vide ----------------------------------------------------------------------------------------------

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
