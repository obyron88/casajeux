Template.search.events({
    'submit .formtri': function(e,t){
        e.preventDefault();
        Session.set('manaFilter', parseInt($('.mana').val()));
        Session.set('priceFilter', parseInt($('.price').val()));
        Session.set('raretéFilter', $('.rareté').val());
        Session.set('typeFilter', $('.type').val());
        Session.set('éditionFilter', $('.édition').val());

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

    results: function() {

        var empty = '';
        var i = parseInt(empty);
        var u = undefined;
        var ui = parseInt(u);
        var mana = 'manaFilter';
        var price = 'priceFilter';
        var rareté = 'raretéFilter';
        var type = 'typeFilter';
        var édition = 'éditionFilter';
        var manai = Session.equals(mana, i);
        var manaui = Session.equals(mana, ui);
        var pricei = Session.equals(price, i);
        var priceui = Session.equals(price, ui);
        var raretéi = Session.equals(rareté, empty);

        if (manai && pricei) {
            return Blanc.find({
                rareté: Session.get(rareté),
            });
        }
        if (manai && raretéi) {
            return Blanc.find({
                price: Session.get(price),
            });
        }
        if (pricei && raretéi) {
            return Blanc.find({
                mana: Session.get(mana),
            });
        }
        if (manai || manaui) {
            return Blanc.find({
                price: Session.get(price),
                rareté: Session.get(rareté),
            });
        }
        if (pricei || priceui) {
            return Blanc.find({
                mana: Session.get(mana),
                rareté: Session.get(rareté),
            });
        }
        if (raretéi) {
            return Blanc.find({
                mana: Session.get(mana),
                price: Session.get(price),
            });
        }
        else {
            return Blanc.find({
                mana: Session.get(mana),
                price: Session.get(price),
                rareté: Session.get(rareté),
                type: Session.get(type),
                édition: Session.get(édition),
            });
        }
    }
});
