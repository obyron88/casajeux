Template.searchmulticolore.onCreated(function() {
    this.sortMulticolore = new ReactiveVar(1);
});

Template.searchmulticolore.events({
    'click #sorting': function(r) {
        r.preventDefault();
        var self = Template.instance();
        self.sortMulticolore.set(self.sortMulticolore.get() * -1);
    },

    'submit .formtri': function(e){
        // au submit du form .formtri recupère les values des inputs
        e.preventDefault();
        // prevent default reste sur la même page à l'action
        // cree manafilter qui correspond à la value recupere de l'input de classe mana (parseInt transforme la value en integer)
        Session.set('manaFilter', parseInt($('.mana').val()));
        Session.set('priceFilter', parseFloat($('.price').val()));
        Session.set('rareteFilter', $('.rarete').val());
        Session.set('typeFilter', $('.type').val());
        Session.set('editionFilter', $('.edition').val());
        Session.set('premiumFilter', $('.premium').val());
        Session.set('nameFilter', $('.name').val());
        Session.set('couleursFilter', $('.couleurs').val());

    }
});

Template.searchmulticolore.helpers({
    // _.uniq evite les doublons
    type: function (){ return _.uniq(Multicolore.find({}, {
        // sort tri par ordre alphabetique avec 1 (-1 tri ordre inverse)/ fields cherche dans la collection les fields type
        sort: {type: 1}, fields: {type: true}
    }).map(function(x) {
        return x.type;
    }), true);
    },

    couleurs: function (){ return _.uniq(Multicolore.find({}, {
        sort: {couleurs: 1}, fields: {couleurs: true}
    }).map(function(x) {
        return x.couleurs;
    }), true);
    },

    edition: function (){ return _.uniq(Multicolore.find({}, {
        sort: {edition: 1}, fields: {edition: true}
    }).map(function(x) {
        return x.edition;
    }), true);
    },

    rarete: function (){ return _.uniq(Multicolore.find({}, {
        sort: {rarete: 1}, fields: {rarete: true}
    }).map(function(x) {
        return x.rarete;
    }), true);
    },

    prix: function (){ return _.uniq(Multicolore.find({}, {
        sort: {price: 1}, fields: {price: true}
    }).map(function(x) {
        return x.price;
    }), true);
    },

    mana: function (){ return _.uniq(Multicolore.find({}, {
        sort: {mana: 1}, fields: {mana: true}
    }).map(function(x) {
        return x.mana;
    }), true);
    },

    foil: function (){ return _.uniq(Multicolore.find({}, {
        sort: {premium: -1}, fields: {premium: true}
    }).map(function(x) {
        return x.premium;
    }), true);
    },

    nom: function (){ return _.uniq(Multicolore.find({}, {
        sort: {name: 1}, fields: {name: true}
    }).map(function(x) {
        return x.name;
    }), true);
    },

    resultsmulticolore: function() {
        var self = Template.instance();
        var sortMulticolore = self.sortMulticolore.get();
// recupère le session.set et le passe en variable (pour pouvoir s'en servir dans le helpers)
        var manav = Session.get('manaFilter');
        var pricev = Session.get('priceFilter');
        var raretev = Session.get('rareteFilter');
        var typev =  Session.get('typeFilter');
        var editionv = Session.get('editionFilter');
        var premiumv = Session.get('premiumFilter');
        var namev = Session.get('nameFilter');
        var couleursv = Session.get('couleursFilter');
        var selector = {};
// si la valeur recupere est differente de "" ou 999 select mana = la valeur recupere
        if (manav != '999') {
            selector.mana = manav;
        }
        if (pricev != '999') {
            selector.price = pricev;
        }
        if (couleursv != "") {
            selector.couleurs = couleursv;
        }
        if (raretev != "") {
            selector.rarete = raretev;
        }
        if (typev != "") {
            selector.type = typev;
        }
        if (editionv != "") {
            selector.edition = editionv;
        }
        if (premiumv != "") {
            selector.premium = premiumv;
        }
        if (namev != "") {
            selector.name = namev;
        }
// return les champs valides selectionnes par selector
        return Multicolore.find(selector, { sort: { price: sortMulticolore }})
    },

});