Template.search.events({
    'submit .formtri': function(e,t){
        e.preventDefault();
        Session.set('manaFilter', parseInt($('.mana').val()));
        Session.set('priceFilter', parseInt($('.price').val()));
        Session.set('raretéFilter', $('.rareté').val());
    }
});

Template.search.helpers({
    results: function() {

        var empty = '';
        var i = parseInt(empty);
        var u = undefined;
        var ui = parseInt(u);
        var mana = 'manaFilter';
        var price = 'priceFilter';
        var rareté = 'raretéFilter';
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
            });
        }
    }
});
