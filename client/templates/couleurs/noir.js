Meteor.subscribe("noir");

Template.noir.onCreated(function() {
    this.sortNoir = new ReactiveVar(1);
});

Template.noir.helpers({
    noirTrié: function () {
        var self = Template.instance();
        var sortNoir = self.sortNoir.get();
        return Noir.find({}, { sort: { price: sortNoir } });
    }
});


Template.noir.events({
    'click #sorting': function() {
        var self = Template.instance();
        self.sortNoir.set(self.sortNoir.get() * -1);
    },
    // au click sur l'élément avec la classe supprimer
    'click .suppradmin'(event){
        event.preventDefault();

        Noir.remove({
            _id:this._id
        })
    },
});