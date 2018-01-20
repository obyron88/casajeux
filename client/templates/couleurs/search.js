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

        var s = '';
        var i = parseInt(s);
        var u = undefined;
        var ui = parseInt(u);
        var mana = 'manaFilter';
        var price = 'priceFilter';
        var rareté = 'raretéFilter';
        var test = Session.equals(mana, i);
        var test2 = Session.equals(price, i);

        if (Session.equals(mana, i) || Session.equals(mana, ui)) {
            return Blanc.find({
                price: Session.get(price),
                rareté: Session.get(rareté),
            });
        }
        if (Session.equals(price, i) || Session.equals(price, ui)) {
            return Blanc.find({
                mana: Session.get(mana),
                rareté: Session.get(rareté),
            });
        }
        if (Session.equals(rareté, '')) {
            return Blanc.find({
                mana: Session.get(mana),
                price: Session.get(price),
            });
        }
        if (test || test2) {
            return Blanc.find({
                rareté: Session.get(rareté),
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
