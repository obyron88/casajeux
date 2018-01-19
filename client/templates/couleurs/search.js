Template.search.events({
    'submit .formtri': function(e,t){
        e.preventDefault();
        Session.set('manaFilter', parseInt($('.mana').val()));
        Session.set('priceFilter', parseInt($('.price').val()));
        // Session.set('raretéFilter', $('.rareté').val());
    }
});

Template.search.helpers({
    results: function() {
        var s = '';
        var i = parseInt(s);
        if (Session.get('manaFilter') === i) {
            return Blanc.find({
                price: Session.get('priceFilter'),
                // mana: Session.get('manaFilter')
            });
        }
        else {
            return Blanc.find({
                mana: Session.get('manaFilter'),
                price: Session.get('priceFilter'),
                // rareté: Session.get('raretéFilter')
            });
        }
    }
});
