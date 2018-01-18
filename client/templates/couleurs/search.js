Template.search.events({
    'keyup #mana': function(e,t){
        e.preventDefault();
        Session.set('manaFilter', parseInt($('#mana').val()));
    }
});

Template.search.helpers({
    results: function(){
        return Blanc.find({
            mana: Session.get('manaFilter')
        });
    }
});
