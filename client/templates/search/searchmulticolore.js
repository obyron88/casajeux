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
        // au submit du form .formtri récupère les values des inputs
        e.preventDefault();
        // prevent default reste sur la même page à l'action
        // crée manafilter qui correspond à la value récupéré de l'input de classe mana (parseInt transforme la value en integer)
        Session.set('manaFilter', parseInt($('.mana').val()));
        Session.set('priceFilter', parseFloat($('.price').val()));
        Session.set('raretéFilter', $('.rareté').val());
        Session.set('typeFilter', $('.type').val());
        Session.set('éditionFilter', $('.édition').val());
        Session.set('premiumFilter', $('.premium').val());
        Session.set('nameFilter', $('.name').val());
        Session.set('couleursFilter', $('.couleurs').val());

    }
});

Template.searchmulticolore.helpers({
    // _.uniq évite les doublons
    type: function (){ return _.uniq(Multicolore.find({}, {
        // sort tri par ordre alphabétique avec 1 (-1 tri ordre inversé)/ fields cherche dans la collection les fields type
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

    édition: function (){ return _.uniq(Multicolore.find({}, {
        sort: {édition: 1}, fields: {édition: true}
    }).map(function(x) {
        return x.édition;
    }), true);
    },

    rareté: function (){ return _.uniq(Multicolore.find({}, {
        sort: {rareté: 1}, fields: {rareté: true}
    }).map(function(x) {
        return x.rareté;
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
// récupère le session.set et le passe en variable (pour pouvoir s'en servir dans le helpers)
        var manav = Session.get('manaFilter');
        var pricev = Session.get('priceFilter');
        var raretév = Session.get('raretéFilter');
        var typev =  Session.get('typeFilter');
        var éditionv = Session.get('éditionFilter');
        var premiumv = Session.get('premiumFilter');
        var namev = Session.get('nameFilter');
        var couleursv = Session.get('couleursFilter');
        var selector = {};
// si la valeur récupéré est différente de "" ou 999 select mana = la valeur récupéré
        if (manav != '999') {
            selector.mana = manav;
        }
        if (pricev != '999') {
            selector.price = pricev;
        }
        if (couleursv != "") {
            selector.couleurs = couleursv;
        }
        if (raretév != "") {
            selector.rareté = raretév;
        }
        if (typev != "") {
            selector.type = typev;
        }
        if (éditionv != "") {
            selector.édition = éditionv;
        }
        if (premiumv != "") {
            selector.premium = premiumv;
        }
        if (namev != "") {
            selector.name = namev;
        }
// return les champs valides sélectionnés par selector
        return Multicolore.find(selector, { sort: { price: sortMulticolore }})
    },

});